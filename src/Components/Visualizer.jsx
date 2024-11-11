import React, { useState, useRef } from 'react';
import * as d3 from 'd3';
import { isAddress } from 'ethers';
import axios from 'axios';
import { DevUrl } from '../Constants';

const Visualizer = () => {
  const [inputValue, setInputValue] = useState('');
  const [validationMessage, setValidationMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const svgRef = useRef(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value.trim());
  };

  const validateWalletAddress = (address) => isAddress(address);

  const validateTransactionHash = (hash) => /^0x([A-Fa-f0-9]{64})$/.test(hash);

  const handleScanClick = async () => {
    const value = inputValue;

    if (validateWalletAddress(value)) {
      setLoading(true);

      try {
        const response = await axios.post(
          `${DevUrl}/token-transfers/`,
          { address: value },
          {
            headers: {
              'ngrok-skip-browser-warning': 'true',
              'Content-Type': 'application/json',
            },
          }
        );
        console.log(response.data);

        const combinedTransfers = response.data.from.concat(response.data.to);
        renderGraph(value, combinedTransfers);
        setValidationMessage('Valid wallet address found!');
      } catch (error) {
        console.log('Error:', error);
        setValidationMessage('Error retrieving data.');
      }
      setLoading(false);
    } else {
      setValidationMessage('Invalid input. Please enter a valid wallet address.');
    }
  };

  const handleLinkClick = async (address, blockNum) => {
    if (validateWalletAddress(address)) {
      setLoading(true);
  
      try {
        const response = await axios.post(
          `${DevUrl}/token-transfers/`,
          { address: address, blockNum: blockNum },
          {
            headers: {
              'ngrok-skip-browser-warning': 'true',
              'Content-Type': 'application/json',
            },
          }
        );
        console.log(response.data);
  
        const combinedTransfers = response.data.from.concat(response.data.to);
        renderGraph(address, combinedTransfers);
        setValidationMessage('Valid wallet address found!');
      } catch (error) {
        console.log('Error:', error);
        setValidationMessage('Error retrieving data.');
      }
      setLoading(false);
    } else {
      setValidationMessage('Invalid input. Please enter a valid wallet address.');
    }
  };


  const renderGraph = (centerAddress, transactions) => {
    const nodes = [{ id: centerAddress, center: true }];
    const links = [];
  
    transactions.forEach((tx) => {
      const isIncoming = tx.to.toLowerCase() === centerAddress.toLowerCase();
      const target = isIncoming ? tx.from : tx.to;
      
      // Ensure the node for each transaction party exists
      if (!nodes.some(node => node.id === target)) {
        nodes.push({ id: target, type: isIncoming ? 'incoming' : 'outgoing' });
      }
      
      links.push({
        source: centerAddress,
        target,
        hash: tx.txHash,
        blockNum: tx.blockNum,
        type: isIncoming ? 'incoming' : 'outgoing',  // Mark transaction type
      });
    });
  
    d3.select(svgRef.current).selectAll('*').remove();
  
    const width = 1400;
    const height = 600;
  
    const simulation = d3
      .forceSimulation(nodes)
      .force('link', d3.forceLink(links).id((d) => d.id).distance(150))
      .force('charge', d3.forceManyBody().strength(-300))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('x', d3.forceX((d) => d.center ? width / 2 : d.type === 'incoming' ? width / 3 : 2 * width / 3))
      .force('y', d3.forceY(height / 2).strength(0.05));
  
    const svg = d3
      .select(svgRef.current)
      .attr('width', width)
      .attr('height', height);
  
    const linkGroups = d3.group(links, d => `${d.source}-${d.target}`);

    const generatePathData = (d, i, total) => {
      const dx = d.target.x - d.source.x;
      const dy = d.target.y - d.source.y;
      const dr = Math.sqrt(dx * dx + dy * dy);
      const curveOffset = (i - (total - 1) / 2) * 20; // Adjust the curve offset
      return `M${d.source.x},${d.source.y}A${dr},${dr} 0 0,${i % 2 === 0 ? 1 : 0} ${d.target.x},${d.target.y}`;
    };
    // Links
    const link = svg
      .append('g')
      .attr('class', 'links')
      .selectAll('path')
      .data(links)
      .enter()
      .append('path')
      .attr('stroke', (d) => (d.type === 'incoming' ? 'green' : 'red'))
      .attr('stroke-width', 2)
      .attr('fill', 'none')
      .attr('d', (d, i) => {
        const group = linkGroups.get(`${d.source}-${d.target}`);
        return group.length > 1 ? generatePathData(d, i, group.length) : `M${d.source.x},${d.source.y}L${d.target.x},${d.target.y}`;
      })
      .on('mouseover', function (event, d) {
        d3.select(this).attr('stroke', '#555');
        tooltip
          .style('opacity', 1)
          .html(`Hash: ${d.hash}`)
          .style('left', `${event.pageX + 10}px`)
          .style('top', `${event.pageY + 10}px`);
      })
      .on('mouseout', function () {
        d3.select(this).attr('stroke', (d) => (d.type === 'incoming' ? 'green' : 'red'));
        tooltip.style('opacity', 0);
      })
      .on('click', function (event, d) {
        console.log(d);
        handleLinkClick(d.target.id, d.blockNum);
      });
  
    // Nodes
    const node = svg
      .append('g')
      .attr('class', 'nodes')
      .selectAll('circle')
      .data(nodes)
      .enter()
      .append('circle')
      .attr('r', (d) => (d.center ? 15 : 10))
      .attr('fill', '#40a9f3')  // Blue nodes for all transactions
      .call(drag(simulation))
      .on('mouseover', function (event, d) {
        d3.select(this).attr('fill', '#40a9f3');
        tooltip
          .style('opacity', 1)
          .html(`Address: ${d.id}`)
          .style('left', `${event.pageX + 10}px`)
          .style('top', `${event.pageY + 10}px`);
      })
      .on('mouseout', function () {
        d3.select(this).attr('fill', '#40a9f3');
        tooltip.style('opacity', 0);
      });
  
    const text = svg
      .append('g')
      .attr('class', 'labels')
      .selectAll('text')
      .data(nodes)
      .enter()
      .append('text')
      .attr('dy', -15)
      .attr('dx', 10)
      .text((d) => d.id.substring(0, 6) + '...');
  
    const tooltip = d3
      .select('body')
      .append('div')
      .attr('class', 'tooltip')
      .style('position', 'absolute')
      .style('text-align', 'left')
      .style('width', '500px')
      .style('padding', '8px')
      .style('font', '12px sans-serif')
      .style('background', 'lightsteelblue')
      .style('border', '1px solid #fff')
      .style('border-radius', '8px')
      .style('pointer-events', 'none')
      .style('opacity', 0);

      const showTooltip = (content, x, y) => {
        tooltip
          .html(content)
          .style('left', `${x}px`)
          .style('top', `${y}px`)
          .style('opacity', 1);
      };

      const hideTooltip = () => {
        tooltip.style('opacity', 0);
      };

      
      node.on('mouseover', function (event, d) {
        showTooltip(`Address: ${d.id}`, event.pageX + 10, event.pageY + 10);
      });
      
      // Hide the tooltip when clicking anywhere on the document
      document.addEventListener('click', (event) => {
        const isTooltipClick = tooltip.node().contains(event.target);
        if (!isTooltipClick) hideTooltip();
      });
  
      simulation.on('tick', () => {
        link.attr('d', (d, i) => {
          const group = linkGroups.get(`${d.source}-${d.target}`);
          return group.length > 1 ? generatePathData(d, i, group.length) : `M${d.source.x},${d.source.y}L${d.target.x},${d.target.y}`;
        });
        node.attr('cx', (d) => d.x).attr('cy', (d) => d.y);
        text.attr('x', (d) => d.x).attr('y', (d) => d.y);
      });
  
    function drag(simulation) {
      function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      }
  
      function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
      }
  
      function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      }
  
      return d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended);
    }
  };

  
  

  return (
    <div>
      <div className="flex flex-col items-center justify-center py-10 px-4 bg-white">
        <h1 className="text-3xl font-bold text-center mb-4">SecureTrace</h1>
        <p className="text-center text-gray-600 mb-6 max-w-2xl font-semibold">
          SecureTrace analyzes transaction data using blockchain forensic techniques, enhancing the detection of intricate patterns and potential vulnerabilities.
        </p>
        <div className="flex flex-col sm:flex-row items-center w-full md:max-w-3xl ">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter transaction hash or address value"
            className="py-3 px-4 rounded-xl border border-gray-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent mb-4 sm:mb-0 sm:mr-4 w-full"
          />
          <button onClick={handleScanClick} className="bg-green-500 w-40 text-black font-semibold py-3 px-8 rounded-xl shadow-md hover:bg-green-600 transition-all duration-300">
            {loading ? 'Loading...' : 'Scan Now'}
          </button>
        </div>
        {validationMessage && (
          <p className={`ml-10 mt-2 ${validationMessage.includes('Invalid') ? 'text-red-500' : 'text-green-500'}`}>
            {validationMessage}
          </p>
        )}
        <div>
          <svg ref={svgRef}></svg>
        </div>
      </div>
    </div>
  );
};

export default Visualizer;

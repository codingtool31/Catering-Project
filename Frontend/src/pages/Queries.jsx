import React from 'react';
import Sidebar from './Sidebar'; // Import Sidebar component

const Queries = () => {
  return (
    <div className="flex">
      <Sidebar /> {/* Include Sidebar in the layout */}

      <div className="flex-1 bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-6">Customer Queries</h1>
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-300">Customer Name</th>
              <th className="px-4 py-2 bg-gray-300">Query</th>
              <th className="px-4 py-2 bg-gray-300">Date</th>
              <th className="px-4 py-2 bg-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Example rows */}
            <tr>
              <td className="px-4 py-2">Jane Smith</td>
              <td className="px-4 py-2">How do I make a booking?</td>
              <td className="px-4 py-2">April 5, 2025</td>
              <td className="px-4 py-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Respond</button>
                <button className="bg-green-500 text-white px-4 py-2 ml-2 rounded">Resolve</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Queries;

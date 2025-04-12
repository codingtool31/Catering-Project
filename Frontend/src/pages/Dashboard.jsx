import React from 'react';
import Sidebar from './Sidebar';
import {
  FaDollarSign,
  FaChartBar,
  FaUsers,
  FaEnvelope,
} from 'react-icons/fa';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

// Dummy data for charts
const marketData = [
  { name: 'Jan', sales: 2400, profit: 1400 },
  { name: 'Feb', sales: 1398, profit: 980 },
  { name: 'Mar', sales: 9800, profit: 3908 },
  { name: 'Apr', sales: 3908, profit: 4800 },
  { name: 'May', sales: 4800, profit: 3800 },
  { name: 'Jun', sales: 3800, profit: 4300 },
];

const salesData = [
  { name: 'Week 1', amount: 300 },
  { name: 'Week 2', amount: 500 },
  { name: 'Week 3', amount: 700 },
  { name: 'Week 4', amount: 600 },
];

const Dashboard = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      {/* Right Side - Main Content */}
      <div className="flex-1 px-6 py-4">
        {/* Top Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
         
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm text-gray-500">Number of Sales</h4>
                <h2 className="text-xl font-bold">3450</h2>
              </div>
              <FaChartBar className="text-blue-500 text-2xl" />
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm text-gray-500">Total Revenue</h4>
                <h2 className="text-xl font-bold">$35,256</h2>
              </div>
              <FaDollarSign className="text-yellow-500 text-2xl" />
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm text-gray-500">Average Income</h4>
                <h2 className="text-xl font-bold">$35,256</h2>
              </div>
              <FaDollarSign className="text-green-500 text-2xl" />
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm text-gray-500">Opportunities</h4>
                <h2 className="text-xl font-bold">15,893</h2>
              </div>
              <FaUsers className="text-purple-500 text-2xl" />
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-3 gap-4">
          {/* Market Overview */}
          <div className="col-span-2 bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Market Overview</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={marketData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#8884d8" />
                <Bar dataKey="profit" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Activity List */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Today’s Activity</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>📥 Incoming Transfer - Ethereum</li>
              <li>📄 Sales Report - Ethereum</li>
              <li>📥 Incoming Transfer - Bitcoin</li>
              <li>📥 Incoming Transfer - Ethereum</li>
            </ul>
          </div>
        </div>

        {/* Sales Analytics */}
        <div className="mt-6 bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Sales Analytics</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="amount" stroke="#00bcd4" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

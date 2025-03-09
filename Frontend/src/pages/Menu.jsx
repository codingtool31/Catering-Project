import React, { useState } from 'react';

function Menu() {
  const [showMore, setShowMore] = useState(false); // State to toggle visibility of more items

  const toggleMenuItems = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-center text-black mb-12">Our Menu</h1>

      <div className="flex flex-wrap justify-center gap-8">
        {/* Appetizers Card */}
        <div className="bg-gray-100 text-black shadow-lg rounded-lg p-6 w-72">
          <h2 className="text-xl font-semibold mb-4">Appetizers</h2>
          <ul className="space-y-2">
            <li>Spring Rolls</li>
            <li>Stuffed Mushrooms</li>
            <li>Bruschetta</li>
          </ul>
        </div>

        {/* Main Courses Card */}
        <div className="bg-gray-100 text-black shadow-lg rounded-lg p-6 w-72">
          <h2 className="text-xl font-semibold mb-4">Main Courses</h2>
          <ul className="space-y-2">
            <li>Grilled Chicken</li>
            <li>Veggie Pasta</li>
            <li>Beef Wellington</li>
          </ul>
        </div>

        {/* Desserts Card */}
        <div className="bg-gray-100 text-black shadow-lg rounded-lg p-6 w-72">
          <h2 className="text-xl font-semibold mb-4">Desserts</h2>
          <ul className="space-y-2">
            <li>Chocolate Cake</li>
            <li>Fruit Tart</li>
            <li>Cheesecake</li>
          </ul>
        </div>
      </div>

      {/* Button to Toggle More Menu Items */}
      <div className="text-center mt-6">
        <button
          onClick={toggleMenuItems}
          className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition duration-300"
        >
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      </div>

      {/* More Menu Items */}
      {showMore && (
        <div className="mt-8 flex flex-wrap justify-center gap-8">
          {/* Extra Appetizers */}
          <div className="bg-gray-100 text-black shadow-lg rounded-lg p-6 w-72">
            <h2 className="text-xl font-semibold mb-4">Extra Appetizers</h2>
            <ul className="space-y-2">
              <li>Mini Tacos</li>
              <li>Caprese Skewers</li>
              <li>Bruschetta with Goat Cheese</li>
            </ul>
          </div>

          {/* Extra Main Courses */}
          <div className="bg-gray-100 text-black shadow-lg rounded-lg p-6 w-72">
            <h2 className="text-xl font-semibold mb-4">Extra Main Courses</h2>
            <ul className="space-y-2">
              <li>Seafood Paella</li>
              <li>Vegetarian Lasagna</li>
              <li>Chicken Parmesan</li>
            </ul>
          </div>

          {/* Extra Desserts */}
          <div className="bg-gray-100 text-black shadow-lg rounded-lg p-6 w-72">
            <h2 className="text-xl font-semibold mb-4">Extra Desserts</h2>
            <ul className="space-y-2">
              <li>Baklava</li>
              <li>Gelato</li>
              <li>Lemon Meringue Pie</li>
            </ul>
          </div>
        </div>
      )}

      {/* Red Note about Price Variation */}
      <div className="text-center text-red-500 mt-8">
        <p className="font-semibold">Note: Prices may vary based on the season and availability.</p>
      </div>
    </div>
  );
}

export default Menu;

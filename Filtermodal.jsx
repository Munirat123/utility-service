import React, { useState } from 'react';

const FilterModal = ({ isOpen, onClose }) => {
  const [filters, setFilters] = useState({
    category: 'all',
    startDate: '',
    endDate: '',
    searchText: '',
  });

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleApply = () => {
    console.log('Applied Filters:', filters);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Filter Options</h2>
        
        {/* Category Filter */}
        <div className="mb-4">
          <label className="block text-gray-700">Category</label>
          <select 
            name="category" 
            value={filters.category} 
            onChange={handleInputChange} 
            className="w-full p-2 border border-gray-300 rounded">
            <option value="all">All</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
          </select>
        </div>

        {/* Date Range Filter */}
        <div className="mb-4">
          <label className="block text-gray-700">Date Range</label>
          <input 
            type="date" 
            name="startDate" 
            value={filters.startDate} 
            onChange={handleInputChange} 
            className="w-full p-2 border border-gray-300 rounded mb-2" 
          />
          <input 
            type="date" 
            name="endDate" 
            value={filters.endDate} 
            onChange={handleInputChange} 
            className="w-full p-2 border border-gray-300 rounded" 
          />
        </div>

        {/* Text Search Filter */}
        <div className="mb-4">
          <label className="block text-gray-700">Search</label>
          <input 
            type="text" 
            name="searchText" 
            value={filters.searchText} 
            onChange={handleInputChange} 
            placeholder="Enter keywords..." 
            className="w-full p-2 border border-gray-300 rounded" 
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end mt-4">
          <button 
            className="bg-gray-500 text-white px-4 py-2 rounded mr-2" 
            onClick={onClose}>
            Close
          </button>
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded" 
            onClick={handleApply}>
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;

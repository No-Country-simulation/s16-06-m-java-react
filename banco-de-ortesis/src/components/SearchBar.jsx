import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [formData, setFormData] = useState({
    query: '',
    category: '',
    state: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-evenly items-center w-full sm:w-3/4 gap-2 p-2 rounded-lg bg-darkBlue shadow-md">
      <div className="flex items-center w-full sm:w-auto">
        <input
          className="w-full sm:w-auto border-none outline-none focus:outline-none active:outline-none focus:ring-0 active:ring-0 bg-transparent placeholder-lightBlue text-lightBlue"
          type="text"
          placeholder="Buscar..."
          value={formData.query}
          onChange={(e) => setFormData({ ...formData, query: e.target.value })}
        />
        <button type="submit" className="ml-2 p-1 border border-gray-300 rounded-md bg-white text-darkBlue" aria-label="Buscar">
          🔍
        </button>
      </div>
      <div className="flex flex-row gap-2 w-full sm:w-auto">
        <select
          className="border border-gray-300 rounded-md p-1 bg-darkBlue text-lightBlue"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        >
          {/* Opciones de categoría */}
        </select>
        <select
          className="border border-gray-300 rounded-md p-1 bg-darkBlue text-lightBlue min-w-[120px]"
          value={formData.state}
          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
        >
          {/* Opciones de estado */}
        </select>
      </div>
    </form>
  );
};

export default SearchBar;

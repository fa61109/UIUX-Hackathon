const FilterSidebar = () => {
    return (
      <aside className="w-64 bg-gray-100 p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-4">Filter By</h3>
        <ul className="space-y-2">
          <li className="text-gray-700 hover:text-blue-600 cursor-pointer">
            Sport
          </li>
          <li className="text-gray-700 hover:text-blue-600 cursor-pointer">
            SUV
          </li>
          <li className="text-gray-700 hover:text-blue-600 cursor-pointer">
            Hatchback
          </li>
        </ul>
        <div className="mt-6">
          <label className="block text-gray-700 mb-2">Max Price:</label>
          <input type="range" min="0" max="100" className="w-full" />
        </div>
      </aside>
    );
  };
  
  export default FilterSidebar;
  
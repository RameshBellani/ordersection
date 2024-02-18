import React, { useState } from "react";
import "./header.css";

// HeaderSection component
const HeaderSection = ({ data, setData }) => {
    // State for search value, selected status, and selected category
    const [searchValue, setSearchValue] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("all");
    const [selectedCategory, setSelectedCategory] = useState("all");
  
    // Event handler for search input change
    const handleSearchChange = (event) => {
      setSearchValue(event.target.value);
    };
  
    // Event handler for status select change
    const handleStatusChange = (event) => {
      setSelectedStatus(event.target.value);
    };
  
    // Event handler for category select change
    const handleCategoryChange = (event) => {
      setSelectedCategory(event.target.value);
    };
  
    // Event handler for search button click
    const handleSearch = () => {
      // Filter the data based on search input value, selected status, and selected category
      const filteredData = data.filter((item) =>
        // Check if status matches selected status, or if selectedStatus is 'all'
        (selectedStatus === "all" || item.status.toLowerCase() === selectedStatus.toLowerCase()) &&
        // Check if category matches selected category, or if selectedCategory is 'all'
        (selectedCategory === "all" || (item.orderType && item.orderType.toLowerCase() === selectedCategory.toLowerCase())) &&
        // Check if any value in the item includes the search input value (case-insensitive)
        Object.values(item).some((value) =>
          value.toString().toLowerCase().includes(searchValue.toLowerCase())
        )
      );

      // Update the data state with the filtered data
      setData(filteredData);
      
    };
  
    // Render the header section UI
    return (
      <div className="header-section">
        <div className="card-top">
          <h1 className="heading-header">Orders</h1>
          <button className="create-button">Create New</button>
        </div>
        <div className="selection-card">
          <div className="selection-sub-card flex-item">
            <label className="label" htmlFor="search">
              What are you looking for?
            </label>
            <input
              type="text"
              id="search"
              placeholder="Search for category, name, company, etc"
              className="inputSection"
              value={searchValue}
              onChange={handleSearchChange}
            />
          </div>
          <div className="relative flex-item">
            <label className="heading-card">Category</label>
            <select
              id="category"
              className="selection-section"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="all">All</option>
              <option value="Wholesale">Wholesale</option>
              <option value="Retail">Retail</option>
              <option value="Customer">Customer</option>
            </select>
          </div>

          <div className="relative flex-item">
            <label className="heading-card">Status</label>
            <select
              id="status"
              className="input-style"
              value={selectedStatus}
              onChange={handleStatusChange}
            >
              <option value="all">All</option>
              <option value="Pending">Pending</option>
              <option value="Shipped">Shipping</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    );
};

export default HeaderSection;

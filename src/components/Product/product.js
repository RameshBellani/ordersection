import React, { useState } from "react";
import { useTable } from "react-table";
import "./product.css";

// Define columns for your table
const columns = [
  { Header: "ID", accessor: "id" },
  { Header: "Shopify #", accessor: "shopifyNumber" },
  { Header: "Date", accessor: "date" },
  { Header: "Status", accessor: "status" },
  { Header: "Customer", accessor: "customer" },
  { Header: "Email", accessor: "email" },
  { Header: "Country", accessor: "country" },
  { Header: "Shipping", accessor: "shipping" },
  { Header: "Source", accessor: "source" },
  { Header: "Order Type", accessor: "orderType" },
];

// TableComponent component
const TableComponent = ({ data }) => {
  // State for current page and selected rows
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState({}); // State to track selected rows

  // Function to toggle row selection
  const toggleRowSelection = (id) => {
    setSelectedRows((prevState) => ({
      ...prevState,
      [id]: !prevState[id] // Toggle the current state
    }));
  };

  // Destructure table instance for useTable hook
  const { headerGroups, rows, prepareRow } = useTable({
    columns,
    data: data.slice((currentPage - 1) * 10, currentPage * 10), // Slice data to show only items for the current page
  });

  // Function to handle page click
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Render the TableComponent UI
  return (
    <div className="product-container">
      <div className="top-container">
        <h2 className="heading">Product Summary</h2>
        <button className="dispatch-button">Dispatch Selected</button>
      </div>
      <div className="table-container">
        <ul className="table">
          {/* Render table headers */}
          {headerGroups.map((headerGroup) => (
            <li key={headerGroup.id} className="table-header">
              {headerGroup.headers.map((column) => (
                <span key={column.id} className="header">
                  {column.render("Header")}
                </span>
              ))}
              <span className="header">Select</span>{" "}
              {/* Add header for checkbox */}
            </li>
          ))}
          {/* Render table rows */}
          {rows.map((row) => {
            prepareRow(row);
            return (
              <li key={row.id} className="table-row" {...row.getRowProps()}>
                {row.cells.map((cell, index) => (
                  <span
                    key={cell.id}
                    className="table-cell"
                    {...cell.getCellProps()}
                  >
                    {/* Render checkbox for first column */}
                    {index === 0 ? (
                      <input
                        type="checkbox"
                        checked={!!selectedRows[row.id]} // Check if the row id exists in the selectedRows state
                        onChange={() => toggleRowSelection(row.id)} // Toggle row selection
                      />
                    ) : null}
                    {cell.render("Cell")} {/* Render cell content */}
                  </span>
                ))}
              </li>
            );
          })}
        </ul>
      </div>
      {/* Pagination section */}
      <div className="pagination">
        <div className="flex space-x-1">
          {/* Render page buttons */}
          {[1, 2, 3].map((number) => (
            <button
              key={number}
              className={`page-button ${currentPage === number ? 'selected' : ''}`}
              onClick={() => handlePageClick(number)} // Handle page click
            >
              {number}
            </button>
          ))}
          {/* Render ellipsis */}
          <span className="text-gray-700">...</span>
          {/* Render last page button */}
          <button
            className={`page-button ${currentPage === 10 ? 'selected' : ''}`}
            onClick={() => handlePageClick(10)} // Handle last page click
          >
            10
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;

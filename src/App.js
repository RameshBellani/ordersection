import HeaderSection from './components/Header/header.js';
import './App.css';
import TableComponent from './components/Product/product.js';
import { useState } from 'react';

//customers Data
const customers = [

    {
      id: 1077624,
      shopifyNumber: 17717,
      date: '26 Jan 2020',
      status: 'Pending',
      customer: 'David',
      email: 'david@mail.com',
      country: 'Germany',
      shipping: 'DHL',
      source: 'WooCommerce',
      orderType: 'Customer'
    },
    {
      id: 1077625,
      shopifyNumber: 17718,
      date: '27 Jan 2020',
      status: 'Shipped',
      customer: 'Michael',
      email: 'michael@email.com',
      country: 'France',
      shipping: 'FedEx',
      source: 'Magento',
      orderType: 'Wholesale'
    },
    {
      id: 1077626,
      shopifyNumber: 17719,
      date: '28 Jan 2020',
      status: 'Delivered',
      customer: 'Sophia',
      email: 'sophia@example.com',
      country: 'Italy',
      shipping: 'UPS',
      source: 'BigCommerce',
      orderType: 'Retail'
    },
    {
      id: 1077627,
      shopifyNumber: 17720,
      date: '29 Jan 2020',
      status: 'Pending',
      customer: 'James',
      email: 'james@gmail.com',
      country: 'Spain',
      shipping: 'Correos',
      source: 'OpenCart',
      orderType: 'Wholesale'
    },
    {
      id: 1077628,
      shopifyNumber: 17721,
      date: '30 Jan 2020',
      status: 'Pending',
      customer: 'Emma',
      email: 'emma@mail.com',
      country: 'Netherlands',
      shipping: 'PostNL',
      source: 'PrestaShop',
      orderType: 'Retail'
    },
    {
      id: 1077629,
      shopifyNumber: 17722,
      date: '31 Jan 2020',
      status: 'Shipped',
      customer: 'William',
      email: 'william@email.com',
      country: 'Sweden',
      shipping: 'PostNord',
      source: 'Wix',
      orderType: 'Customer'
    },
    {
      id: 1077630,
      shopifyNumber: 17723,
      date: '1 Feb 2020',
      status: 'Delivered',
      customer: 'Olivia',
      email: 'olivia@example.com',
      country: 'Denmark',
      shipping: 'Bring',
      source: 'Squarespace',
      orderType: 'Wholesale'
    },
    {
      id: 1077631,
      shopifyNumber: 17724,
      date: '2 Feb 2020',
      status: 'Pending',
      customer: 'Benjamin',
      email: 'benjamin@gmail.com',
      country: 'Norway',
      shipping: 'Posten',
      source: 'Shopify',
      orderType: 'Retail'
    },
    {
      id: 1077632,
      shopifyNumber: 17725,
      date: '3 Feb 2020',
      status: 'Shipped',
      customer: 'Isabella',
      email: 'isabella@mail.com',
      country: 'Finland',
      shipping: 'Matkahuolto',
      source: 'Volusion',
      orderType: 'Customer'
    },
    {
      id: 1077633,
      shopifyNumber: 17726,
      date: '4 Feb 2020',
      status: 'Delivered',
      customer: 'Ethan',
      email: 'ethan@email.com',
      country: 'Ireland',
      shipping: 'An Post',
      source: '3DCart',
      orderType: 'Wholesale'
    },
    // Add more members as needed
  
  
  {
    id: 1077620,
    shopifyNumber: 17713,
    date: '22 Jan 2020',
    status: 'Pending',
    customer: 'Ahmed',
    email: 'ahmed.123@mail.com',
    country: 'Australia',
    shipping: 'Australian Post Api',
    source: 'ShopifyAU',
    orderType: 'Customer'
  },
  {
    id: 1077621,
    shopifyNumber: 17714,
    date: '23 Jan 2020',
    status: 'Shipped',
    customer: 'John',
    email: 'john@email.com',
    country: 'USA',
    shipping: 'UPS',
    source: 'Amazon',
    orderType: 'Wholesale'
  },
  {
    id: 1077622,
    shopifyNumber: 17715,
    date: '24 Jan 2020',
    status: 'Delivered',
    customer: 'Sarah',
    email: 'sarah@example.com',
    country: 'UK',
    shipping: 'Royal Mail',
    source: 'eBay',
    orderType: 'Retail'
  },
  {
    id: 1077623,
    shopifyNumber: 17716,
    date: '25 Jan 2020',
    status: 'Pending',
    customer: 'Emily',
    email: 'emily@gmail.com',
    country: 'Canada',
    shipping: 'Canada Post',
    source: 'Etsy',
    orderType: 'Wholesale'
  },
  {
    id: 1077623,
    shopifyNumber: 17716,
    date: '25 Jan 2020',
    status: 'Pending',
    customer: 'Emily',
    email: 'emily@gmail.com',
    country: 'Canada',
    shipping: 'Canada Post',
    source: 'Etsy',
    orderType: 'Wholesale'
  },
  {
    id: 1077623,
    shopifyNumber: 17716,
    date: '25 Jan 2020',
    status: 'Pending',
    customer: 'Emily',
    email: 'emily@gmail.com',
    country: 'Canada',
    shipping: 'Canada Post',
    source: 'Etsy',
    orderType: 'Wholesale'
  },
  {
    id: 1077623,
    shopifyNumber: 17716,
    date: '25 Jan 2020',
    status: 'Pending',
    customer: 'Emily',
    email: 'emily@gmail.com',
    country: 'Canada',
    shipping: 'Canada Post',
    source: 'Etsy',
    orderType: 'Wholesale'
  }, {
    id: 1077620,
    shopifyNumber: 17713,
    date: '22 Jan 2020',
    status: 'Pending',
    customer: 'Ahmed',
    email: 'ahmed.123@mail.com',
    country: 'Australia',
    shipping: 'Australian Post Api',
    source: 'ShopifyAU',
    orderType: 'Customer'
  },
  {
    id: 1077621,
    shopifyNumber: 17714,
    date: '23 Jan 2020',
    status: 'Shipped',
    customer: 'John',
    email: 'john@email.com',
    country: 'USA',
    shipping: 'UPS',
    source: 'Amazon',
    orderType: 'Wholesale'
  },
  {
    id: 1077622,
    shopifyNumber: 17715,
    date: '24 Jan 2020',
    status: 'Delivered',
    customer: 'Sarah',
    email: 'sarah@example.com',
    country: 'UK',
    shipping: 'Royal Mail',
    source: 'eBay',
    orderType: 'Retail'
  },
  {
    id: 1077623,
    shopifyNumber: 17716,
    date: '25 Jan 2020',
    status: 'Pending',
    customer: 'Emily',
    email: 'emily@gmail.com',
    country: 'Canada',
    shipping: 'Canada Post',
    source: 'Etsy',
    orderType: 'Wholesale'
  },
  {
    id: 1077623,
    shopifyNumber: 17716,
    date: '25 Jan 2020',
    status: 'Pending',
    customer: 'Emily',
    email: 'emily@gmail.com',
    country: 'Canada',
    shipping: 'Canada Post',
    source: 'Etsy',
    orderType: 'Wholesale'
  },
  {
    id: 1077623,
    shopifyNumber: 17716,
    date: '25 Jan 2020',
    status: 'Pending',
    customer: 'Emily',
    email: 'emily@gmail.com',
    country: 'Canada',
    shipping: 'Canada Post',
    source: 'Etsy',
    orderType: 'Wholesale'
  },
  {
    id: 1077623,
    shopifyNumber: 17716,
    date: '25 Jan 2020',
    status: 'Pending',
    customer: 'Emily',
    email: 'emily@gmail.com',
    country: 'Canada',
    shipping: 'Canada Post',
    source: 'Etsy',
    orderType: 'Wholesale'
  }, {
    id: 1077620,
    shopifyNumber: 17713,
    date: '22 Jan 2020',
    status: 'Pending',
    customer: 'Ahmed',
    email: 'ahmed.123@mail.com',
    country: 'Australia',
    shipping: 'Australian Post Api',
    source: 'ShopifyAU',
    orderType: 'Customer'
  },
  {
    id: 1077621,
    shopifyNumber: 17714,
    date: '23 Jan 2020',
    status: 'Shipped',
    customer: 'John',
    email: 'john@email.com',
    country: 'USA',
    shipping: 'UPS',
    source: 'Amazon',
    orderType: 'Wholesale'
  },
  {
    id: 1077622,
    shopifyNumber: 17715,
    date: '24 Jan 2020',
    status: 'Delivered',
    customer: 'Sarah',
    email: 'sarah@example.com',
    country: 'UK',
    shipping: 'Royal Mail',
    source: 'eBay',
    orderType: 'Retail'
  },
  {
    id: 1077623,
    shopifyNumber: 17716,
    date: '25 Jan 2020',
    status: 'Pending',
    customer: 'Emily',
    email: 'emily@gmail.com',
    country: 'Canada',
    shipping: 'Canada Post',
    source: 'Etsy',
    orderType: 'Wholesale'
  },
  {
    id: 1077623,
    shopifyNumber: 17716,
    date: '25 Jan 2020',
    status: 'Pending',
    customer: 'Emily',
    email: 'emily@gmail.com',
    country: 'Canada',
    shipping: 'Canada Post',
    source: 'Etsy',
    orderType: 'Wholesale'
  },
  {
    id: 1077623,
    shopifyNumber: 17716,
    date: '25 Jan 2020',
    status: 'Pending',
    customer: 'Emily',
    email: 'emily@gmail.com',
    country: 'Canada',
    shipping: 'Canada Post',
    source: 'Etsy',
    orderType: 'Wholesale'
  },
  {
    id: 1077623,
    shopifyNumber: 17716,
    date: '25 Jan 2020',
    status: 'Pending',
    customer: 'Emily',
    email: 'emily@gmail.com',
    country: 'Canada',
    shipping: 'Canada Post',
    source: 'Etsy',
    orderType: 'Wholesale'
  }
  // Add more member objects as needed
  // Continue adding members up to the desired count
];


const App = () => {
  // Initialize state for filtered data, starting with the full list of customers
  const [filteredData, setFilteredData] = useState(customers);

  return (
    <div className="App">
      {/* 
        Pass the filtered data and the setter function to the HeaderSection component
        This allows HeaderSection to update the data based on search and filter inputs
      */}
      <HeaderSection data={filteredData} setData={setFilteredData} />

      {/* 
        Pass the filtered data to the TableComponent component
        This component will display the data in a table format
      */}
      <TableComponent data={filteredData} />
    </div>
  );
}

export default App;
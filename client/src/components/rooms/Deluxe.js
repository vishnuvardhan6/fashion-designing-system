import React from 'react';
import './deluxe.css'; // Import CSS file

export default function Deluxe() {
  return (
    <div className="container">
      <h1>Fashion Designing</h1>
      <div className="card-container">
        {/* Shirt 1 */}
        <div className="card">
          <img src="https://cdnc.lystit.com/photos/2013/08/13/asos-red-smart-shirt-with-button-down-collar-product-1-12707518-722188934.jpeg" alt="shirt" />
          <div className="card-content">
            <h2>Red Formal Shirt</h2>
            <p>Price: $25</p>
            <button>Add to Cart</button>
          </div>
        </div>

        {/* Shirt 2 */}
        <div className="card">
          <img src="https://5.imimg.com/data5/XO/AE/MY-39077357/mens-check-shirts-1000x1000.jpg" alt="shirt" />
          <div className="card-content">
            <h2>Checked Shirt</h2>
            <p>Price: $30</p>
            <button>Add to Cart</button>
          </div>
        </div>

        {/* Shirt 3 */}
        <div className="card">
          <img src="https://th.bing.com/th/id/OIP.QeIXOzV8MLh06WksqJgUfgHaJ4?rs=1&pid=ImgDetMain" alt="shirt" />
          <div className="card-content">
            <h2>SweatShirt</h2>
            <p>Price: $27</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

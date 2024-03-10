import React, { useState } from "react";
import axios from "axios";
import './style.css';

export default function Entry() {
    const [productType, setproductType] = useState("");
    const [size, setSize] = useState("");
    const [price, setPrice] = useState("");
    const [AvailableStocks, setAvailableStocks] = useState("");
    const [productId, setproductId] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        console.log({
            productType,
            size,
            price,
            AvailableStocks,
            productId
        });
        axios.post('http://localhost:8081/entry', {
            productType,
            size,
            price,
            AvailableStocks,
            productId
        }).then((response) => {
            console.log(response.data);
        })
    }

    // Function to render image based on product type
    function renderRoomImage() {
        if (productType === "shirt") {
            return <img src="https://martinvalen.com/5459-large_default/men-s-button-short-sleeve-muscle-fit-shirt-in-yellow.jpg" alt="Deluxe Room" style={{ maxWidth: '100%', height: 'auto' }} />;
        } else if (productType === "non-deluxe") {
            return <img src="https://th.bing.com/th/id/OIP.-W5XhXv5e9KRzZBQt7YTfwHaLH?rs=1&pid=ImgDetMain" alt="Non-Deluxe Room" style={{ maxWidth: '100%', height: 'auto' }} />;
        } else {
            return null; // You can return a default image or leave it blank if no room type is selected
        }
    }

    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
                integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
                crossOrigin="anonymous"
            ></link>
            <script
                src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
                integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
                crossOrigin="anonymous"
            ></script>
            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
                crossOrigin="anonymous"
            ></script>

            <div className="container">
                <div className="image" style={{ maxWidth: '100%', height: 'auto' }}>
                    {renderRoomImage()}
                </div>
                <div className="content">
                    <div className="type">
                        <p>Product Type
                            <select
                                className="form-control"
                                name="room"
                                id="room"
                                value={productType}
                                onChange={(e) => setproductType(e.target.value)}
                            >
                                <option value="">Select Product type</option>
                                <option value="shirt">Shirt</option>
                                <option value="non-deluxe">Pant</option>
                            </select>
                        </p>
                    </div>
                    <p>Product Id: <input type="number" className="inputbox" value={productId} onChange={(e) => setproductId(e.target.value)} /> </p>
                    <p>Price: <input type="number" className="inputbox" value={price} onChange={(e) => setPrice(e.target.value)} /></p>
                    <p>Size: <input type="number" className="inputbox" value={size} onChange={(e) => setSize(e.target.value)} /></p>
                    <p>Available stocks: <input type="number" className="inputbox" value={AvailableStocks} onChange={(e) => setAvailableStocks(e.target.value)} /></p>
                    {/* <p id="description">You are viewing a room. It can accommodate guests. The price is according per night</p> */}
                    <button className="book-btn" onClick={handleSubmit}>Add Product</button>
                </div>
            </div>
        </>
    );
}

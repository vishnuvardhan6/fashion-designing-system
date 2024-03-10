import React from 'react';
import './nonDeluxe.css'; // Import CSS file

export default function NonDeluxe() {
  // Sample data for pants
  const pantsData = [
    {
      id: 1,
      name: "Cargo",
      image: "https://th.bing.com/th/id/R.b9601b6112a706a549aee7a8ccaff754?rik=ZoDZxNBoO3zCmQ&riu=http%3a%2f%2fwww.careyfashion.com%2ffashion%2fwp-content%2fuploads%2f2016%2f12%2fcargo-pants-for-men-9.jpg&ehk=L2CGGKV24f9PZO9C7YNbXs4iBanoACaipNdyor9r0v0%3d&risl=&pid=ImgRaw&r=0",
      price: "$40"
    },
    {
      id: 2,
      name: "Blue Jeans",
      image: "https://ae01.alicdn.com/kf/HTB11PKZcBfM8KJjSZFOq6xr5XXax/Plus-Size-46-Mens-Hip-Hop-Jeans-Skateboard-Man-Baggy-Jeans-Denim-Wide-Leg-Pants-Fashion.jpg",
      price: "$35"
    },
    {
      id: 3,
      name: "Chinos",
      image: "https://i5.walmartimages.com/asr/adda0cef-7c61-4456-b295-06567c95d50f_1.e3bf9638820ac63999dce722eb5d55c6.jpeg",
      price: "$30"
    }
  ];

  return (
    <div className="container">
      <h1>Fashion Designing</h1>
      <div className="card-container">
        {pantsData.map((pants) => (
          <div className="card" key={pants.id}>
            <img src={pants.image} alt={pants.name} />
            <div className="card-content">
              <h2>{pants.name}</h2>
              <p>Price: {pants.price}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

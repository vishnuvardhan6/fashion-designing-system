import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function View() {
  const [result, setResult] = useState(null);


  function handleDelete(event){
    
    axios.delete('http://localhost:8081/delete',{params: {
      "id": event.currentTarget.getAttribute("roomid"),
    }}).then((response) => {
      console.log(response.data);
    })
  }


  useEffect(() => {
    axios.get('http://localhost:8081/room').then((response) => {
      console.log(JSON.stringify(response.data));
      setResult(response.data);
    });
  }, []);

  // Object mapping room types to image URLs
  const roomTypeImages = {
    deluxe: 'https://i5.walmartimages.com/asr/4cc55c6f-f4bc-41c0-9561-07b21196398a.bc5ef9558ecc299253b1914518aa9b0d.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff',
    non_deluxe: 'https://i5.walmartimages.com/asr/adda0cef-7c61-4456-b295-06567c95d50f_1.e3bf9638820ac63999dce722eb5d55c6.jpeg',
    suite: 'https://example.com/suite-room-image.jpg',
  };

  return (
    <div>
      {result ? (
        result.map((room) => (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginLeft: '15rem',
              marginTop: '5rem',
              padding: '2rem',
            }}
          >
            <div
              className="card text-white bg-info mb-3"
              style={{ maxWidth: '840px', maxHeight: '600px' }}
            >
              <div className="row no-gutters">
                <div className="col-md-4">
                  {/* Set image source based on room type */}
                  <img
                    src={room.roomType ? roomTypeImages[room.roomType.toLowerCase().replace('-', '_')] : ""}

                    className="card-img"
                    alt=""
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                  

                    <h5 className="card-title"><b>Product ID: </b>{room.roomId}</h5>
                    <h5 className="card-title"><b>Price:</b> {room.price} INR</h5>
                    <h5 className="card-title"><b>Available Stocks </b>{room.vacancy}</h5>
                    <p className="card-text">
                      The product you are viewing can be ordered by{' '}
                      {room.size} persons
                    </p>
                  </div>
                  <button type="button" id="" class="btn btn-dark" style={{marginLeft:'7rem', marginBottom:'1rem'}}
                    onClick={handleDelete} roomid={room.roomId}
                  >Remove</button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>There is no data to display...</div>
      )}
    </div>
  );
}

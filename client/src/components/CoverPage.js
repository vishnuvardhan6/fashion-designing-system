import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function CoverPage() {
  const images = [
    'https://media.licdn.com/dms/image/D5612AQGcXUBs2CT-pQ/article-cover_image-shrink_720_1280/0/1706942460370?e=1715212800&v=beta&t=DNxvzWcKvUhINYpyDowevTHxZnaA3XwwwFG6-FQksd8',
    'https://wallpapercave.com/wp/wp3646111.jpg',
    'https://media.altphotos.com/cache/images/2017/08/04/14/1504/fashion-people.jpg',
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img
            src={image}
            alt={`Image ${index + 1}`}
            style={{ width: '100%', height: '650px' }}
          />
        </div>
      ))}
    </Slider>
  );
}

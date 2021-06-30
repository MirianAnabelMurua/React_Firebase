import React from "react";
import Card from "./Card";
import image2 from '../assets/image2.jpg'


const cards = [
 
  {
    id: 2,
    title: "Trabajo Final de React.JS",
    image: image2,
    url: "https://mirianmurua.000webhostapp.com/Murua/index.html",
  },
  
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;

import React from "react";
import PropTypes from "prop-types";
import "./card.css";

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

function Card({ imageSource, title, text, url }) {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={imageSource} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h1 className="card-title">{title}</h1>
        <p className="card-text text-secondary">
          {text
            ? text
            : "Mirian Murúa"}
        </p>
        <a
          href={url ? url : "#!"}
          target="_blank"
          className="btn btn-outline-secondary border-0"
          rel="noreferrer"
        >
           {url}
        </a>
      </div>
    </div>
  );
}



export default Card;

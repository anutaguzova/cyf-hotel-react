import React from "react";

const Card = props => {
  const name = props.cityInfo["name"];
  const description1 = props.cityInfo["description1"];
  const description2 = props.cityInfo["description2"];
  const imgURL = props.cityInfo["imgURL"];
  const moreInfo = props.cityInfo["moreInfo"];

  return (
    <div className="card">
      <img alt={name} src={imgURL} className="card-img-top" />
      <div className="card-body">
        <h3>{name}</h3>
        <p>{description1}</p>
        <p>{description2}</p>
        <div className="more_button">
          <a href={moreInfo} className="btn btn-primary">
            More information
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;

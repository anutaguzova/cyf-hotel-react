import React from "react";
import Card from "./Card";

const cityInfo = [
  {
    name: "Glasgow",
    description1:
      "Glasgow is a port city on the River Clyde in Scotland's western Lowlands.",
    description2:
      " The city is famous for its contributions to architectural styles, with the Glasgow School of Art being the most notable example.",
    imgURL:
      "https://a.cdn-hotels.com/gdcs/production95/d16/cc514640-8f0f-11e8-9bad-0242ac110002.jpg",
    moreInfo: "https://peoplemakeglasgow.com/"
  },
  {
    name: "Manchester",
    description1:
      "Manchester is a major city in the northwest of England with a rich industrial heritage.",
    description2:
      "As the home of Manchester United, the world's most famous football club.",
    imgURL:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/3d/31/60/manchester-town-hall.jpg?w=700&h=-1&s=1",
    moreInfo: "https://www.visitmanchester.com/"
  },
  {
    name: "London",
    description1:
      "London is famous for Big Ben, Buckingham Palace, British Museum, and Tower Bridge.",
    description2:
      "London is also known for its rich history, double-decker buses, red phone booths, world-class museums and galleries, financial districts",
    imgURL:
      "https://www.thestar.com/content/dam/thestar/life/travel/2022/07/08/an-insiders-guide-to-london-england-where-to-find-inspiring-art-cool-shops-and-classic-sunday-roast/london_england_credit_tomas_marek_istock.jpg",
    moreInfo: "https://www.visitlondon.com/"
  }
];

const TouristInfoCards = () => {
  return (
    <div className="cards">
      {cityInfo.map((el, index) => (
        <Card key={index} cityInfo={el} />
      ))}
    </div>
  );
};

export default TouristInfoCards;

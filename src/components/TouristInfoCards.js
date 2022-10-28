import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="cards">
      <div className="card">
        <img
          alt="Rome"
          src="https://a.cdn-hotels.com/gdcs/production95/d16/cc514640-8f0f-11e8-9bad-0242ac110002.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <h3>Rome</h3>
          <p>
            Glasgow is a port city on the River Clyde in Scotland's western
            Lowlands.
          </p>
          <p>
            The city is famous for its contributions to architectural styles,
            with the Glasgow School of Art being the most notable example.
          </p>
          <div className="more_button">
            <a
              href="https://peoplemakeglasgow.com/"
              className="btn btn-primary"
            >
              More information
            </a>
          </div>
        </div>
      </div>

      <div className="card">
        <img
          alt="Manchester"
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/3d/31/60/manchester-town-hall.jpg?w=700&h=-1&s=1"
          className="card-img-top"
        />
        <div className="card-body">
          <h3>Manchester</h3>
          <p>
            Manchester is a major city in the northwest of England with a rich
            industrial heritage.
          </p>
          <p>
            As the home of Manchester United, the world's most famous football
            club.
          </p>
          <div className="more_button">
            <a
              href="https://www.visitmanchester.com/"
              className="btn btn-primary"
            >
              More information
            </a>
          </div>
        </div>
      </div>

      <div className="card">
        <img
          alt="London"
          src="https://www.thestar.com/content/dam/thestar/life/travel/2022/07/08/an-insiders-guide-to-london-england-where-to-find-inspiring-art-cool-shops-and-classic-sunday-roast/london_england_credit_tomas_marek_istock.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <h3>London</h3>
          <p>
            London is famous for Big Ben, Buckingham Palace, British Museum, and
            Tower Bridge.
          </p>
          <p>
            London is also known for its rich history, double-decker buses, red
            phone booths, world-class museums and galleries, financial
            districts.
          </p>
          <div className="more_button">
            <a href="https://www.visitlondon.com/" className="btn btn-primary">
              More information
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;

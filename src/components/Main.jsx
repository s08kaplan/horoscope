import React from "react";

const Main = ({ data }) => {
  return (
    <div className="main">
      {data.map(({ id, title, date, desc, image }) => (
        <div className="card-container" key={id}>
          <div className="cards">
            <div>
              <h1>{title}</h1>
            </div>
            <div className="date">{date}</div>
            <img src={image} alt="" />
            <div>
                <p  className="hidden">{desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Main;

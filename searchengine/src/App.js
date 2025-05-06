import React, { useState } from "react";
import './style.css';
import gta from "./image/gta.jpg";
import black from "./image/black.png";
import hp from "./image/hp.jpg";
import iphone from "./image/iphone.jpg";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const data = [
    {
      "id": 1,
      "image": gta,
      "title": "GTA V ",
      "price": 335
    },
    {
      "id": 2,
      "image": hp,
      "title": "Macbook M1 Air",
      "price": 250
    },
    {
      "id": 3,
      "image": iphone,
      "title": "IPhone 16",
      "price": 160
    },
    {
      "id": 4,
      "image": black,
      "title": "Black Myth Wukong",
      "price": 40
    },
  ];

  const filteredData = data.filter((val) => {
    if (searchTerm === "") {
      return val;
    } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return val;
    }
    return false;
  });

  return (
    <>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input
            id="searchInput"
            type="text"
            placeholder="Search here..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
        <div className="template_Container">
          {
            filteredData.length > 0 ? (
              filteredData.map((val) => (
                <div className="template" key={val.id}>
                  <img src={val.image} alt="" />
                  <h3>{val.title}</h3>
                  <p className="price">${val.price}</p>
                </div>
              ))
            ) : (
              <h2 className="not-found">Sorry ! Item not available</h2>
            )
          }
        </div>
      </div>
    </>
  );
}

export default App;

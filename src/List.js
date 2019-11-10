import React from "react";
import "./List.css";

export default function List() {
  let ListData = {
    city: "Lisbon",
    humidity: 63,
    pressure: 1025,
    wind: 5
  };

  return (
    <div className="weather">
      <div className="row">
        <div className="col-5">
          <ul>
            <li>Humidity:{ListData.humidity}%</li>
            <li>Pressure:{ListData.pressure}Pa</li>
            <li>Wind:{ListData.wind}km/h</li>
            <li>Scattered clouds</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

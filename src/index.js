import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faSearch,
  faMapMarker,
  faSun
} from "@fortawesome/free-solid-svg-icons";
import Icons1 from "./Icons1";
import Icons2 from "./Icons2";
import Icons3 from "./Icons3";
import List from "./List";

library.add(fab, faSearch, faMapMarker, faSun);

function App() {
  return (
    <div className="container">
      <div className="weather-app">
        <div className="row">
          <div className="col-8">
            <form id="change-h2">
              <input
                type="text"
                placeholder="Enter a city"
                autocomplete="off"
                id="search-city"
                className="form-control"
              />
            </form>
          </div>

          <div className="col">
            <form>
              {" "}
              <button type="submit" className="search">
                <Icons1 />
              </button>
            </form>

            <form>
              <button type="submit" className="current-location">
                <Icons2 />
              </button>{" "}
            </form>
          </div>

          <div className="col">
            <div className="image_sun">
              <Icons3 />
            </div>

            <div className="col-6">
              <List />
              <h1>
                <span>16 </span>
                <small>
                  <span className="weather-unit">
                    <small>
                      <a href=" " className="">
                        °C
                      </a>{" "}
                      |
                      <a href=" " className="active">
                        °F{" "}
                      </a>{" "}
                    </small>
                  </span>
                </small>
              </h1>
            </div>

            <div className="col-5">
              <h2>Lisbon</h2>
            </div>
          </div>
        </div>
      </div>

      <small>
        <span class="code">
          <a
            href="https://github.com/Catarina333/Vanilla-weather-app"
            target="blank"
          >
            Open source code{" "}
          </a>
          by Ana Catarina Calheiros
        </span>
      </small>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

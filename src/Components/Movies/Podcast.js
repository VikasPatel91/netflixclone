import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
const Podcast = () => {
  return (
    <>
      <div>
        <ul className="movies-list">
          <li id="movies-logo">NETFLIX</li>
          <li id="movies-list">
            <Link id="mpe" to={"/movies"}>
              Movies
            </Link>
          </li>
          <li id="movies-list">
            <Link id="mpe" to={"/podcast"}>
              Podcast
            </Link>
          </li>
          <li id="movies-list">
            <Link id="mpe" to={"/e-books"}>
              E-Books
            </Link>
          </li>
        </ul>
      </div>
      <hr />
      <SearchBar />
      <div className="main-div">
        <div className="card">
          <div className="container">
            <h4>
              <b> podcast </b>
            </h4>
            <p>web developer</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Podcast;

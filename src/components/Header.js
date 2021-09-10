import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          A Very Real Bar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarDark"
          aria-controls="navbarDark"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse show" id="navbarDark">
          <ul className="navbar-nav me-auto mb-2 mb-xl-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Keg Options
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Info
              </a>
            </li>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;

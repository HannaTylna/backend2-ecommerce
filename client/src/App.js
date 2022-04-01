import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home.js";
import Product from "./pages/Product.js";

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container px-4 px-lg-5">
      <a className="navbar-brand" href="https://startbootstrap.com/">
        Start Bootstrap
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
          <li className="nav-item">
            <Link class="nav-link active" aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <a class="nav-link" href="#!">
              About
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Shop
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a className="dropdown-item" href="#!">
                  All Products
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  Popular Items
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  New Arrivals
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <form className="d-flex">
          <button className="btn btn-outline-dark" type="submit">
            <i className="bi-cart-fill me-1"></i>
            Cart
            <span className="badge bg-dark text-white ms-1 rounded-pill">
              0
            </span>
          </button>
        </form>
      </div>
    </div>
  </nav>
);

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:sku" element={<Product />} />
      </Routes>
      <footer className="py-5 bg-dark">
        <div className="container">
          <p class="m-0 text-center text-white">
            Copyright &copy; Your Website 2021
          </p>
          <p class="m-0 text-center text-white">
            Images by{" "}
            <a className="footer-link" href="https://unsplash.com/@usama_1248">
              Usama Akram
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;

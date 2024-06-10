import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
function NavBar({ setSearch2 }) {
  const prod = useSelector((state) => state.cartR.cart);
  const productIds = useSelector((state) => state.favR.fav);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light">
        <div className="container-fluid">
          <img
            style={{ width: "50px" }}
            src="https://png.pngtree.com/png-clipart/20221228/original/pngtree-a-logo-png-image_8817223.png"
          ></img>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link
                  className="nav-link active btn btn-outline-black text-light"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn btn-outline-black" to="/cart">
                  <div>
                    <FaShoppingCart
                      style={{
                        fontSize: "30px",
                        position: "absolute",
                        position: "relative",
                      }}
                      className={" "}
                    />
                    <span
                      style={{
                        fontSize: "10px",
                        position: "relative",
                        left: "-5px",
                      }}
                      class="badge rounded-pill badge-notification bg-danger "
                    >
                      {Object.values(prod).length}
                    </span>
                  </div>
                </Link>
              </li>
              <li className="nav-item ">
                <Link className=" nav-link btn btn-outline-dark" to="/wish">
                  <div>
                    <i
                      style={{
                        fontSize: "30px",
                        position: "absolute",
                        position: "relative",
                      }}
                      class="fa-regular fa-heart"
                    ></i>

                    <span
                      style={{
                        fontSize: "10px",
                        position: "relative",
                        top: "-7px",
                        right: "5px",
                      }}
                      class="badge rounded-pill badge-notification bg-danger "
                    >
                      {productIds.length}
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="col-4"
              style={{ margin: "auto" }}
            >
              <div className="input-group mt-2">
                <input
                  onChange={(e) => setSearch2(e.target.value)}
                  className="form-control me-2 icon-search icon-large"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
            </form>
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="nav-link btn btn-outline-dark" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn btn-outline-dark" to="/signup">
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;

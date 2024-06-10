import React, { useEffect, useState } from "react";
import axios from "axios";
import NCarde from "../Component.js/Carde/newCard";
import { useSelector } from "react-redux";
import MyButton from "../Component.js/Button/MyButton";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "../Component.js/Footer";

function Home({ search }) {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);
  const [category, setCategory] = useState(null);
  // const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
  }, []);
  //get categories to filter

  const categories = Array.from(new Set(products.map((res) => res.category)));
  const categoryOptions = categories.map((category) => ({
    value: category,
    label: category,
  }));
  const filterProduct = category
    ? products.filter((product) => product.category === category)
    : products;

  ////pagnations
  const totalPages = Math.ceil(filterProduct.length / limit);
  const currentProducts = filterProduct.slice((page - 1) * limit, page * limit);

  const goToNextPage = () =>
    setPage((nextPage) => Math.min(nextPage + 1, totalPages));
  const goToPreviousPage = () =>
    setPage((prevPage) => Math.max(prevPage - 1, 1));

  return (
    <>
      <div
        style={{ margin: 0, padding: 0, width: "100% ", overflowX: "hidden" }}
        className="container-fluid"
      >
        <div
          className="min-vh-100"
          style={{
            backgroundImage: "url('./wp7566265.webp')",
            backgroundSize: "cover",
          }}
        >
          <div className="col-6   ">
            <form onSubmit={(e) => e.preventDefault()} className="col-4">
              <div className="input-group mb-3">
                <select
                  className="col-4"
                  defaultValue=""
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="" key="default">
                    Select a category
                  </option>
                  {categoryOptions.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* <button className="btn btn-outline-dark" type="submit">Search</button> */}
            </form>
          </div>
        </div>

        <div className="row p-lg-4">
          {currentProducts
            .filter((product) => {
              return search === ""
                ? true
                : product.title.toLowerCase().startsWith(search.toLowerCase());
            })
            .map((product, index) => (
              <div
                className="col-lg-3 col-md-4 col-sm-6 col-12"
                key={product.id}
              >
                <NCarde
                  name={product.title}
                  desc={product.description}
                  img={product.images[0]}
                  price={product.price}
                  id={product.id}
                  rating={product.rating}
                  total={product.stock}
                  category={product.category}
                />
              </div>
            ))}
        </div>
      </div>
      <div className="m-3">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <MyButton
                onClick={goToPreviousPage}
                color="primary"
                style="page-link"
                content="Previous"
              />
            </li>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <li key={page} className="page-item">
                <Link className="page-link" href="#">
                  {page}
                </Link>
              </li>
            ))}
            <li className="page-item">
              <MyButton
                onClick={goToNextPage}
                style="page-link"
                content="Next"
              />
            </li>
          </ul>
        </nav>
      </div>
      <Footer />
    </>
  );
}

export default Home;

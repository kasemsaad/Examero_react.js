import React from "react";
const Footer = () => {
  return (
    <>
      <div class="container-fluid">
        <div class="row ">
          <section
            style={{ height: 200 }}
            class=" d-flex  justify-content-between bg-black"
          >
            <div class="text-light col-3  text-center align-content-center">
              <h4>GET IN TOUCH</h4>
              <p>mrady@yahoo.come</p>
              <p>01201565234</p>
            </div>
            <div class="col-5  text-center align-content-center"></div>

            <div class="text-light col-sm-3 w-25 text-center align-content-center">
              <p>Copyright &copy; Rady</p>
              <i class="fa-brands fa-square-github m-2 fs-5 "></i>
              <i class="fa-brands fa-facebook m-2 fs-5"></i>
              <i class="fa-brands fa-linkedin m-2 fs-5"></i>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Footer;

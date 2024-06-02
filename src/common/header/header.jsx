import React from 'react'
import "./header.css"
import personal from "./../../assets/image/IMG_20231104_171844_696.jpg"
import Examiro from "./../../assets/image/image 9.svg"
import notifiy from "./../../assets/image/ic_baseline-notifications-none.svg"
import moon from "./../../assets/image/solar_moon-line-duotone.svg"
import logo from "./../../assets/image/لوجو examero-01 1.svg"


 function Header() {
  return (
    <>
      <div className="image" style={{   width: "100%",   position: "absolute",   zIndex: -44, }}>
        <img src={Examiro} alt="examiro" width="100%" />
      </div>

   <div className="personal_image" style={{  position: "relative",}}>
   <div id="svg_header" style={{ width: "3.437rem", height: "3.437rem", borderRadius: "50%", backgroundColor: "blue", overflow: "hidden",}}>
        <img  style={{ objectFit: "cover" }} src={personal} width="100%"  height="100%" alt='presonal_img'/>
        </div>
     </div>

      <nav className="navbar-expand-lg navbar-light">
      <div className="container-fluid left_burger">
        <div  className="row row_rev_"  id="navbarSupportedContent"  style={{ justifyContent: "space-between",
            alignItems: "center",}}>

   <ul className="navbar-nav mb-lg-0 col-3 ul_resp_sm">
   <div className="d-flex"  style={{    alignItems: "center",    width: "100%",
     justifyContent: "space-evenly",  }} >

              <li className="nav-item">
       <div style={{ backgroundColor: "#0E0A43", width: "1.606rem", height: "1.606rem",
        borderRadius: "50%",  position: "relative", }} >
       <a href="#"> <img src={notifiy}  width="100%"  alt="notifaction"
        style={{paddingBottom: "2px",}}/></a>
                  <span
                    style={{
                      width: "auto",
                      height: "14px",
                      position: "absolute",
                      top: "0px",
                      left: "20px",
                      color: "#FFFFFF",
                      fontSize: "12px",
                      backgroundColor: "#991111",
                      borderRadius: "50%",
                      fontFamily: "'Times New Roman', Times, serif",
                      fontWeight: "800",
                    }}>
                    122
                  </span>
                </div>
              </li>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <li className="nav-item">
                  <div className="image_of_light" style={{backgroundColor: "#0E0A43",width: "25.7px",height: "25.7px",
                  borderRadius: "50%",}}>
                    <img src={moon} alt="moon" style={{paddingLeft: "4px",paddingBottom: "2px",}}/>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <button className="btn btn-light" style={{ margin: "6px" }}>
                    mostafa
                  </button>
                </li>
              </div>
            </div>
          </ul>
          <div className="col-3 text-center">
            <div  className="logo_examiro" style={{   width: "17.4vw",   height: "4.68vw", }}>
              <img  className="r"  src={logo}  alt="examiro"  width="100%"  height="100%"/>
            </div>
          </div>
        </div>
      </div>
    </nav>

{/*
<div style={{maxWidth: "60%", color:"white",
backgroundColor:"#0E0A43", marginLeft: "64px", borderRadius: "10px", position: "relative",top: "20px"}}>

  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium repellendus architecto esse, consectetur fugiat fugit quas ipsa, possimus rerum magnam veniam. Ex fuga maiores quasi recusandae inventore ut quaerat error!</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium repellendus architecto esse, consectetur fugiat fugit quas ipsa, possimus rerum magnam veniam. Ex fuga maiores quasi recusandae inventore ut quaerat error!</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium repellendus architecto esse, consectetur fugiat fugit quas ipsa, possimus rerum magnam veniam. Ex fuga maiores quasi recusandae inventore ut quaerat error!</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium repellendus architecto esse, consectetur fugiat fugit quas ipsa, possimus rerum magnam veniam. Ex fuga maiores quasi recusandae inventore ut quaerat error!</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium repellendus architecto esse, consectetur fugiat fugit quas ipsa, possimus rerum magnam veniam. Ex fuga maiores quasi recusandae inventore ut quaerat error!</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium repellendus architecto esse, consectetur fugiat fugit quas ipsa, possimus rerum magnam veniam. Ex fuga maiores quasi recusandae inventore ut quaerat error!</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium repellendus architecto esse, consectetur fugiat fugit quas ipsa, possimus rerum magnam veniam. Ex fuga maiores quasi recusandae inventore ut quaerat error!</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium repellendus architecto esse, consectetur fugiat fugit quas ipsa, possimus rerum magnam veniam. Ex fuga maiores quasi recusandae inventore ut quaerat error!</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium repellendus architecto esse, consectetur fugiat fugit quas ipsa, possimus rerum magnam veniam. Ex fuga maiores quasi recusandae inventore ut quaerat error!</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium repellendus architecto esse, consectetur fugiat fugit quas ipsa, possimus rerum magnam veniam. Ex fuga maiores quasi recusandae inventore ut quaerat error!</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium repellendus architecto esse, consectetur fugiat fugit quas ipsa, possimus rerum magnam veniam. Ex fuga maiores quasi recusandae inventore ut quaerat error!</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium repellendus architecto esse, consectetur fugiat fugit quas ipsa, possimus rerum magnam veniam. Ex fuga maiores quasi recusandae inventore ut quaerat error!</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium repellendus architecto esse, consectetur fugiat fugit quas ipsa, possimus rerum magnam veniam. Ex fuga maiores quasi recusandae inventore ut quaerat error!</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium repellendus architecto esse, consectetur fugiat fugit quas ipsa, possimus rerum magnam veniam. Ex fuga maiores quasi recusandae inventore ut quaerat error!</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium repellendus architecto esse, consectetur fugiat fugit quas ipsa, possimus rerum magnam veniam. Ex fuga maiores quasi recusandae inventore ut quaerat error!</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium repellendus architecto esse, consectetur fugiat fugit quas ipsa, possimus rerum magnam veniam. Ex fuga maiores quasi recusandae inventore ut quaerat error!</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium repellendus architecto esse, consectetur fugiat fugit quas ipsa, possimus rerum magnam veniam. Ex fuga maiores quasi recusandae inventore ut quaerat error!</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium repellendus architecto esse, consectetur fugiat fugit quas ipsa, possimus rerum magnam veniam. Ex fuga maiores quasi recusandae inventore ut quaerat error!</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium repellendus architecto esse, consectetur fugiat fugit quas ipsa, possimus rerum magnam veniam. Ex fuga maiores quasi recusandae inventore ut quaerat error!</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium repellendus architecto esse, consectetur fugiat fugit quas ipsa, possimus rerum magnam veniam. Ex fuga maiores quasi recusandae inventore ut quaerat error!</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium repellendus architecto esse, consectetur fugiat fugit quas ipsa, possimus rerum magnam veniam. Ex fuga maiores quasi recusandae inventore ut quaerat error!</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium repellendus architecto esse, consectetur fugiat fugit quas ipsa, possimus rerum magnam veniam. Ex fuga maiores quasi recusandae inventore ut quaerat error!</p>
</div> */}


    </>
  )
}
export default Header ;

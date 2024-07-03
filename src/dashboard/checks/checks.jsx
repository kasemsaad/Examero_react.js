import React, { useState } from 'react';
import img from "./../../assets/image/02-01 1.png";
import './check.css';
import * as htmlToImage from 'html-to-image';
import download from 'downloadjs';

export default function Checks() {
   
   

    const downloadPDF = () => {
        const element = document.getElementById('ana');
        htmlToImage.toPng(element)
            .then(function (dataUrl) {
                download(dataUrl, 'certificate.png');
            })
            .catch(function (error) {
                console.error('oops, something went wrong!', error);
            });
    };

  

    return (
        <>
            {/* Form section for inputs */}
          

            {/* Certificate section */}
            <div className="container pb-4" style={{ overflow: 'auto', marginTop: '18px', direction: 'rtl', border: "2px solid purple", borderRadius: "10px", width: "90%", margin: "auto", height: "100vh" }}>
                <div className="container wrapper_containr_certify">
                    <div id='ana'>
                        <img src={img} alt="" width={"300px"} />
                        <div className="content_">
                            <p className="student_cert">مصطفي عصام</p>
                            <p className="name_cert">mostffffffffffffffff</p>
                            <p className="first_sign">mostafa_leg</p>
                            <p className="sec_sign">mostafa_leg</p>
                            <div className="logo_certify" style={{ width: "100px", height: "100px", position: "absolute", right: "0" }}>
                                <img src={img} alt="" width={"100%"} height={"100%"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Download button */}
            <button onClick={downloadPDF} className='btn btn-danger'>Download as Image</button>
        </>
    );
}

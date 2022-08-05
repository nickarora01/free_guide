import React from 'react'
import {Link} from "react-router-dom";

const Footer=()=>{
    return(
<>
<footer>
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <ul>
                        <li>
                            <a href="https://www.freeguides.com/home">Home</a>
                        </li>
                        <li>
                        <Link to="/experience"> Experience </Link>
                        </li>
                        <li>
                            <a href="https://www.freeguides.com/organisationguide">Partner With Us</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <ul>
                        <li>
                            <a href="#">Become A Guide</a>
                        </li>
                        <li>
                            <a href="https://app.freeguides.com/signup">Sign Up</a>
                        </li>
                        <li>
                            <a href="https://www.freeguides.com/about-us">About</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <ul>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li>
                            <a href="https://www.freeguides.com/blog">Blog</a>
                        </li>
                        <li>
                            <a href="https://www.freeguides.com/faq">FAQs</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <ul>
                        <li>
                            <a href="https://www.freeguides.com/about-us">Our Principles</a>
                        </li>
                        <li>
                            <a href="https://drive.google.com/file/d/1sU-mmvDjYLKSE16AwxfFxnKhNRfgDn33/view">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="https://drive.google.com/file/d/1Jkix1hzRiizqFIbhExyLslPq2KBfRh1v/view">Terms & Conditions</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <a className="newsletr_btn">Subscribe To Our Newsletter</a>
                 
    
    <div className="social-icons">
       <a href="https://www.tiktok.com/@freeguides?lang=en"><img src={require('../images/tiktok.png')}/></a>
       <a href="https://www.facebook.com/freeguides"><img src={require('../images/fb.png')}/></a>
       <a href="https://www.instagram.com/freeguides/"><img src={require('../images/instagram.png')}/></a>
       <a href="https://www.youtube.com/channel/UCIUDgjzDCwelFH7WnO1aVoA"><img src={require('../images/youtube.png')}/></a>
       <a href="https://www.linkedin.com/company/freeguides/"><img src={require('../images/linkedin.png')}/></a>
       <a href="https://www.pinterest.com.au/marketingfreeguides/_created/"><img src={require('../images/pinterest.png')}/></a>
    </div>

                </div>
            </div>
        </div>
    </footer>
</>
    )
}
export default Footer;
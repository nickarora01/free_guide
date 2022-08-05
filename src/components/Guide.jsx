import React from "react";
import '../style.css'
const Guide=()=>{
    return(
<>
<div className="container">
        <div className="top">
            <div className="row">
              <div className="col-md-10">
                <h1>Historical Tour Of The Rocks</h1>
              </div>
              <div className="col-md-2">
                <p><img src={require('../images/Vector.png')} alt="image"/> Share  &nbsp;&nbsp;&nbsp;   <img src={require('../images/heart.png')} alt="image"/> 150</p>
              </div>
              <p>The Original Rocks Walking Tours gets up close & personal with the living history and British heritage of The Rocks. 
                Wander through hidden alleys and laneways and hear stories about the many characters and rogues that called The Rocks home.</p>
            </div>
        </div>
    </div>
<div className="container">
        <div className="second">
            <div className="row">
              <div className="col-md-8">
                <h2>Preview</h2>
                <p>
                     <h3><span className="loc">1</span> Sugarloof Mountain</h3>
                            <p><img src={require('../images/location.png')} alt="image"/> West Wallsend NSW 2286, AU
                                <ul><li></li><li></li></ul>
                                <p>0.5km</p><ul><li></li><li></li></ul>
                            </p>
                         <h3><span className="loc">2</span> Spring Creek</h3>
                            <p><img src={require('../images/location.png')} alt="image"/> West Wallsend NSW 2286, AU
                              <ul><li></li><li></li></ul>
                                <p>0.2km</p><ul><li></li><li></li></ul>
                            </p>
                        
                    <a href="#" className="ctn">View Full Itinerary</a>
                </p>
              </div>
              <div className="col-md-4">
                <div className="second_one">
                    <h3> Meet Your Guide</h3>
                    <div className="side">
                      <img src={require('../images/Ellipse3.png')} alt="image"/>
                      <div className="row">
                       <div className="col-md-4">8.5
                        <p className="block">RATING</p></div>
                        <div className="col-md-4">
                          158
                          <p className="block">FOLLOWERS</p>
                        </div></div></div>
                      <h5>Daniel Wasilewsky</h5>
                      <p><img src={require('../images/location.png')} alt="image"/> Sydney, Australia</p>
                      <p className="inner-tittle">Explore Sydney's beautiful coastline whilst leaning about the first settlement in Australia</p>
                      <a href="#" className="ctn">View my Experience</a>
                </div>
              </div>
             </div>
             </div>
             </div>
             <div className="col-md-4">
            <div className="second_one">
              <h2> Book Now</h2>
              <div className="book-imag"> 
                <a href="#"><img src={require('../images/Ellipse1.png')} alt="image"/> </a>
                <a href="#"><img src={require('../images/Ellipse6.png')} className="boimg" alt="image1"/></a>
                <a href="#"><img src={require('../images/Ellipse7.png')}className="boimg" alt="image"/></a>
                <a href="#" className="book_profile">+34 have booked</a>
              </div>
              <div className="profile_imgs">
                <div className="book-imag_link">
                  <div className="rate_sidebar">
                    <a href="#" className="site_btn blue_btn"><img src="images/goolge_icon.png" className="book_now_btn_icons" />
                      <img src={require('../images/apple_icon.png')} className="book_now_btn_icons" /> View Full Itinerary</a>
                  </div>
                  <div className="rate_sidebar">
                    <p>
                      <span>$25.00</span>
                    </p>
                  </div>
                </div>
              </div>
          
            </div>
          </div>
            
             </>
    )
}
export default Guide;
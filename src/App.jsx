import React from'react';
import '../src/style.css'
import { useState } from "react";
import Multiselect from "multiselect-react-dropdown";

const App =()=> {
  const [tags, setTags] = useState(["Crafts", "Architecture"]);
  const [category, setCategory] = useState(["Nature", "Culinary"]);
  const [lang, setLang] = useState(["English"]);
  const [duration, setDuration] = useState(["<60"]);
  return (
    <>
    <header>
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <a className="navbar-brand" href="#"><img src={require('../src/images/Group 4.png')}/>FreeGuides</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Experiences</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Partner With Us</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Become A Guide</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link signup_btn" href="#"><img src={require('../src/images/user.png')}/> Sign Up</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    </header>
    <section className="hero-section">
            <div className="container">
                <div className="row">
                    <h1>Try searching for "Hiking Experiences" or "Top 5 Museums"</h1>
                </div>
            </div>
        </section>

        <section class="experience_section mb-5">
        <div class="container">
            <div class="experience_outer">
                <div class="experience_inner1">
                    <h3>Trending Experiences</h3>
                </div>
                <div class="experience_inner1">
                   <a href="#">See More </a>
                </div>

            </div>

        </div>
    </section>
        <section class="cards-section mb-5">
            <div class="container">
                <div class="row">
                    <div class="card" >
                        <img src={require('../src/images/Mask-Group-1.png')}class="card-img-top" alt="Mask-Group-1"/>
                        <div class="card-body">
                            <h5 class="card-title">Historical Tour Of The Rocks</h5>
                            <p class="card-text">Explore Sydney's beautiful coastline whilst leaning about the first settlements in Australia</p>
                            <a href="#" class="card-link">4.3 <span>Rating</span></a>
                            <a href="#" class="card-link"><img src={require('../src/images/restaurant.jpg')}/><span>CULINARY</span> </a>
                          </div>
                      </div>
                      <div class="card" >
                        <img src={require('../src/images/Mask-Group-1-1.png')}class="card-img-top" alt="Mask-Group-1"/>
                        <div class="card-body">
                            <h5 class="card-title">Historical Tour Of The Rocks</h5>
                            <p class="card-text">Explore Sydney's beautiful coastline whilst leaning about the first settlements in Australia</p>
                            <a href="#" class="card-link">4.3 <span>Rating</span></a>
                            <a href="#" class="card-link"><img src={require('../src/images/restaurant.jpg')}/><span>CULINARY</span> </a>
                          </div>
                      </div>
                      <div class="card" >
                        <img src={require('../src/images/Mask-Group-1-2.png')} class="card-img-top" alt="Mask-Group-1"/>
                        <div class="card-body">
                            <h5 class="card-title">Historical Tour Of The Rocks</h5>
                            <p class="card-text">Explore Sydney's beautiful coastline whilst leaning about the first settlements in Australia</p>
                            <a href="#" class="card-link">4.3 <span>Rating</span></a>
                            <a href="#" class="card-link"><img src={require('../src/images/restaurant.jpg')}/><span>CULINARY</span> </a>
                          </div>
                      </div>
                      <div class="card" >
                        <img src={require('../src/images/Mask-Group-1-3.jpg')} class="card-img-top" alt="Mask-Group-1"/>
                        <div class="card-body">
                            <h5 class="card-title">Historical Tour Of The Rocks</h5>
                            <p class="card-text">Explore Sydney's beautiful coastline whilst leaning about the first settlements in Australia</p>
                            <a href="#" class="card-link">4.3 <span>Rating</span></a>
                            <a href="#" class="card-link"><img src={require('../src/images/restaurant.jpg')}/><span>CULINARY</span> </a>
                          </div>
                      </div>
                      <div class="card" >
                        <img src={require('../src/images/Mask-Group-1-4.jpg')} class="card-img-top" alt="Mask-Group-1"/>
                        <div class="card-body">
                            <h5 class="card-title">Historical Tour Of The Rocks</h5>
                            <p class="card-text">Explore Sydney's beautiful coastline whilst leaning about the first settlements in Australia</p>
                            <a href="#" class="card-link">4.3 <span>Rating</span></a>
                            <a href="#" class="card-link"><img src={require('../src/images/restaurant.jpg')}/><span>CULINARY</span> </a>
                          </div>
                      </div>
                </div>
            </div>
        </section>
        <section class="experience_section mb-5">
        <div class="container">
            <div class="experience_outer">
                <div class="experience_inner1">
                    <h3>Experiences Near You</h3>
                </div>
                <div class="experience_inner1">
                    <ul>
                        <li><a href="#">Price</a></li>
                        <li><a href="#">Rating</a> </li>
                        <li><a href="#">Distance</a></li>
                        <li><a href="#">Likes</a></li>
                        <li><a href="#">Creation Date</a></li>
                        <li><a href="#" class="hide_filter"><img src={require('../src/images/filter_icon.png')} /> Hide Filter</a></li>
                    </ul>
                </div>

            </div>

        </div>
    </section>
   
        <section>
         <div className='container'> 
        <div className="App">

      <label></label>Tags<Multiselect className='app1'
        isObject={false}
        onRemove={(event) => {
          console.log(event);
        }}
        onSelect={(event) => {
          console.log(event);
        }}
        options={tags}
        showCheckbox
      />
     <label>Category</label> <Multiselect className='app2'
        isObject={false}
        onRemove={(event) => {
          console.log(event);
        }}
        onSelect={(event) => {
          console.log(event);
        }}
        options={category}
        showCheckbox
      />
          <label>Language</label><Multiselect className='app3'
        isObject={false}
        onRemove={(event) => {
          console.log(event);
        }}
        onSelect={(event) => {
          console.log(event);
        }}
        options={lang}
        showCheckbox
      />
         <label>Tour Duation</label> <Multiselect className='app4'
        isObject={false}
        onRemove={(event) => {
          console.log(event);
        }}
        onSelect={(event) => {
          console.log(event);
        }}
        options={duration}
        showCheckbox
      />
      
    </div>
    </div>
        </section>
        <section class="experience_section mb-5">
        <div class="container">
            <div class="experience_outer">
                <div class="experience_inner1">
                    <h3>Trending Experiences</h3>
                </div>
                <div class="experience_inner1">
                   <a href="#">RESET FILTERS </a>
                </div>

            </div>

        </div>
    </section>
      <  section class="cards-section mb-5">
            <div class="container">
                <div class="row">
                    <div class="card" >
                        <img src={require('../src/images/Mask-Group-1.png')}class="card-img-top" alt="Mask-Group-1"/>
                        <div class="card-body">
                            <h5 class="card-title">Historical Tour Of The Rocks</h5>
                            <p class="card-text">Explore Sydney's beautiful coastline whilst leaning about the first settlements in Australia</p>
                            <a href="#" class="card-link">4.3 <span>Rating</span></a>
                            <a href="#" class="card-link"><img src={require('../src/images/restaurant.jpg')}/><span>CULINARY</span> </a>
                          </div>
                      </div>
                      <div class="card" >
                        <img src={require('../src/images/Mask-Group-1-1.png')}class="card-img-top" alt="Mask-Group-1"/>
                        <div class="card-body">
                            <h5 class="card-title">Historical Tour Of The Rocks</h5>
                            <p class="card-text">Explore Sydney's beautiful coastline whilst leaning about the first settlements in Australia</p>
                            <a href="#" class="card-link">4.3 <span>Rating</span></a>
                            <a href="#" class="card-link"><img src={require('../src/images/restaurant.jpg')}/><span>CULINARY</span> </a>
                          </div>
                      </div>
                      <div class="card" >
                        <img src={require('../src/images/Mask-Group-1-2.png')} class="card-img-top" alt="Mask-Group-1"/>
                        <div class="card-body">
                            <h5 class="card-title">Historical Tour Of The Rocks</h5>
                            <p class="card-text">Explore Sydney's beautiful coastline whilst leaning about the first settlements in Australia</p>
                            <a href="#" class="card-link">4.3 <span>Rating</span></a>
                            <a href="#" class="card-link"><img src={require('../src/images/restaurant.jpg')}/><span>CULINARY</span> </a>
                          </div>
                      </div>
                      <div class="card" >
                        <img src={require('../src/images/Mask-Group-1-3.jpg')} class="card-img-top" alt="Mask-Group-1"/>
                        <div class="card-body">
                            <h5 class="card-title">Historical Tour Of The Rocks</h5>
                            <p class="card-text">Explore Sydney's beautiful coastline whilst leaning about the first settlements in Australia</p>
                            <a href="#" class="card-link">4.3 <span>Rating</span></a>
                            <a href="#" class="card-link"><img src={require('../src/images/restaurant.jpg')}/><span>CULINARY</span> </a>
                          </div>
                      </div>
                      <div class="card" >
                        <img src={require('../src/images/Mask-Group-1-4.jpg')} class="card-img-top" alt="Mask-Group-1"/>
                        <div class="card-body">
                            <h5 class="card-title">Historical Tour Of The Rocks</h5>
                            <p class="card-text">Explore Sydney's beautiful coastline whilst leaning about the first settlements in Australia</p>
                            <a href="#" class="card-link">4.3 <span>Rating</span></a>
                            <a href="#" class="card-link"><img src={require('../src/images/restaurant.jpg')}/><span>CULINARY</span> </a>
                          </div>
                      </div>
                      <div class="card" >
                        <img src={require('../src/images/Mask-Group-1.png')}class="card-img-top" alt="Mask-Group-1"/>
                        <div class="card-body">
                            <h5 class="card-title">Historical Tour Of The Rocks</h5>
                            <p class="card-text">Explore Sydney's beautiful coastline whilst leaning about the first settlements in Australia</p>
                            <a href="#" class="card-link">4.3 <span>Rating</span></a>
                            <a href="#" class="card-link"><img src={require('../src/images/restaurant.jpg')}/><span>CULINARY</span> </a>
                          </div>
                      </div>
                      <div class="card" >
                        <img src={require('../src/images/Mask-Group-1-1.png')}class="card-img-top" alt="Mask-Group-1"/>
                        <div class="card-body">
                            <h5 class="card-title">Historical Tour Of The Rocks</h5>
                            <p class="card-text">Explore Sydney's beautiful coastline whilst leaning about the first settlements in Australia</p>
                            <a href="#" class="card-link">4.3 <span>Rating</span></a>
                            <a href="#" class="card-link"><img src={require('../src/images/restaurant.jpg')}/><span>CULINARY</span> </a>
                          </div>
                      </div>
                      <div class="card" >
                        <img src={require('../src/images/Mask-Group-1-2.png')} class="card-img-top" alt="Mask-Group-1"/>
                        <div class="card-body">
                            <h5 class="card-title">Historical Tour Of The Rocks</h5>
                            <p class="card-text">Explore Sydney's beautiful coastline whilst leaning about the first settlements in Australia</p>
                            <a href="#" class="card-link">4.3 <span>Rating</span></a>
                            <a href="#" class="card-link"><img src={require('../src/images/restaurant.jpg')}/><span>CULINARY</span> </a>
                          </div>
                      </div>
                      <div class="card" >
                        <img src={require('../src/images/Mask-Group-1-3.jpg')} class="card-img-top" alt="Mask-Group-1"/>
                        <div class="card-body">
                            <h5 class="card-title">Historical Tour Of The Rocks</h5>
                            <p class="card-text">Explore Sydney's beautiful coastline whilst leaning about the first settlements in Australia</p>
                            <a href="#" class="card-link">4.3 <span>Rating</span></a>
                            <a href="#" class="card-link"><img src={require('../src/images/restaurant.jpg')}/><span>CULINARY</span> </a>
                          </div>
                      </div>
                      <div class="card" >
                        <img src={require('../src/images/Mask-Group-1-4.jpg')} class="card-img-top" alt="Mask-Group-1"/>
                        <div class="card-body">
                            <h5 class="card-title">Historical Tour Of The Rocks</h5>
                            <p class="card-text">Explore Sydney's beautiful coastline whilst leaning about the first settlements in Australia</p>
                            <a href="#" class="card-link">4.3 <span>Rating</span></a>
                            <a href="#" class="card-link"><img src={require('../src/images/restaurant.jpg')}/><span>CULINARY</span> </a>
                          </div>
                      </div>

                </div>
            </div>
        </section>
        <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-2">
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Experiences</a>
                        </li>
                        <li>
                            <a href="#">Partner With Us</a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-2">
                    <ul>
                        <li>
                            <a href="#">Become A Guide</a>
                        </li>
                        <li>
                            <a href="#">Sign Up</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-2">
                    <ul>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#">FAQs</a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-2">
                    <ul>
                        <li>
                            <a href="#">Our Principles</a>
                        </li>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#">Terms & Conditions</a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <a class="newsletr_btn">Subscribe To Our Newsletter</a>
                    <img class="social_img" src={require('../src/images/social.png')} />
                    {/* <!-- <ul class="social-icons">
        <li>
           <a href="#">1</a> 
        </li>
        <li>
            <a href="#">2</a> 
         </li>
         <li>
            <a href="#">3</a> 
         </li>
    </ul> --> */}
                </div>
            </div>
        </div>
    </footer>
       

    </>
  );
}

export default App;

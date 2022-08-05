
import React,{useState,useEffect} from'react';
import '.././style.css'
import Footer from './Footer';
import Filter from './Filter';
import { Link } from 'react-router-dom';

const Experiencelist =()=> {
  const [users,setUser]=useState([])
  useEffect(()=>{
    fetchComments()
  },[])
  const fetchComments =()=>{
    fetch("./Data.json").then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp)
        setUser(resp.Data)
      })
    })
  }
  
  
  return (
    <>
    <header>
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <a className="navbar-brand" href="https://www.freeguides.com/home"><img src={require('../images/logo2.png')}/>FreeGuides</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                   <Link className="nav-link active" aria-current="page" to="/experience"> Experience </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://www.freeguides.com/organisationguide">Partner With Us</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Become A Guide</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link signup_btn" href="https://app.freeguides.com/signup"><img src={require('../images/user-black.png')}/> Sign Up</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    </header>
    <section className="hero-section">
        <div className="container">
            <div className="row">
                <div className="search_btn">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1"><img src={require('../images/search-outline.png')} /></span>
                        </div>
                        <input type="text" className="form-control" placeholder="Try searching for Hiking Experiences or Top 5 Museums" aria-label="Username" aria-describedby="basic-addon1"/>
                        <a href="#" className="search_icon_right">
                <img src={require('../images/Vector_arrow.png')} alt="arrow" />
        </a>


                      </div>
                    </div>
            </div>
        </div>
    </section>

        <section className="experience_section mb-5">
        <div className="container">
            <div className="experience_outer">
                <div className="experience_inner1">
                    <h3>Trending Experiences</h3>
                </div>
                <div className="experience_inner1">
                   <a href="#">See More </a>
                </div>

            </div>

        </div>
    </section>
        <section className="cards-section mb-5">
            <div className="container">
            
                <div className="row">
               {/* {
          users.map((item,{i})=> */}
          { users.map((item,{i},users)=>
                    <div className="card" >
                        <img src={item.img}className="card-img-top" alt="Mask-Group-1"/>
                        <div className="card-body">
                            <h5 className="card-title">{item.Heading}</h5>
                            <p className="card-text">{item.sub}</p>
                            <a href="#" className="card-link">4.3 <span>Rating</span></a>
                            <a href="#" className="card-link"><img src={require('../images/restaurant.jpg')}/><span>CULINARY</span> </a>
                          </div>
                      </div>
          )}
                </div>
        
            </div>
        </section>
        <Filter/>
       <Footer/>
    </>
  );
}

export default Experiencelist;
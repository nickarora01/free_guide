import React,{useState,useEffect} from "react";
import '../style.css'

const Sorting=()=>{
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
        return(
            <>
            <section>
    <div class="container">
      <div class="rate_sec">
        <div class="row">
          <div class="col-md-10">
            <h3>Rating</h3>
          </div>
          <div class="col-md-2"><a href="#" class="sort_btn"><img src={require('../images/sort.png')} alt="image"/>&nbsp;Sort</a>
          </div>


          <div class="Rate_users_profile">
            <h6><img src={require('../images/Ellipse9.png')} alt="image"/>&nbsp;<b>Micheal C</b>
              <spam class="eng"> 12 sep,2021
              </spam>
            </h6>
            <p><b> <img src={require('../images/Frame7.png')} alt="image"/> Pretty Exciting</b></p>
          </div>

          <div class="Rate_users_profile">
            <h6><img src={require('../images/Ellipse3.png')} alt="image" width="30px;" height="30px;"/>&nbsp;<b>Daniel W</b> &nbsp; <spam
                class="eng"> 12 sep,2021</spam>
            </h6>
            <p> Thank you, glad you like it</p>
          </div>

          <hr/>
          <div class="Rate_users_profile">
            <h6><img src={require('../images/Ellipse8.png')} alt="image"/>&nbsp;<b> Keanu W</b>&nbsp;<spam class="eng"> 12 sep,2021</spam>
            </h6>
            <p><b> <img src={require('../images/Frame8.png')} alt="image"/> Love it!!!!!</b></p>
            <p> Wow Vali. I thank you for all your effort and travel information.
              I really wasn’t expecting that you do this. So thank you very much.</p>
          </div>

          <div class="Rate_users_profile">
            <h6><img src={require('../images/Ellipse3.png')} alt="image" width="30px;" height="30px;"/>&nbsp;<b>Daniel W</b>&nbsp; <spam
                class="eng"> 12 sep,2021</spam>
            </h6>
            <p> Thank you, glad you like it</p>
          </div>
          <hr/>
          <div class="col-md-4"> <a href="#" class="site_btn">See More</a></div>
        </div>
      </div>
    </div>
  </section>
           
    <section>
    <div class="container">
      <div class="row">
        <div class="questio">
          <h3>Questions</h3>
          <div class="Rate_users_profile">
            <h6><img src={require('../images/James-T.png')} alt="image"/>&nbsp;<b>James T</b>
              <spam class="eng"> 12 sep,2021</spam>
              <spam class="hint">6 upvotes</spam>
            </h6>
            <p> <b>Are there any near by taril i can trek </b></p>
          </div>

          <div class="Rate_users_profile">
            <h6><img src={require('../images/Ellipse3.png')} alt="image" width="30px;" height="30px;"/>&nbsp;<b>Daniel W</b>&nbsp; <spam
                class="eng"> 12 sep,2021</spam>
            </h6>
            <p> Yes there is a ridge-oak taril that's 2 miles from this tour</p>
          </div>
          <hr/>
          <div class="Rate_users_profile">
            <h6><img src={require('../images/Carolyn-p.png')} alt="image"/>&nbsp;<b>Carolyn P</b>&nbsp; <spam class="eng"> 12 sep,2021
              </spam>
              <spam class="hint">1 upvotes</spam>
            </h6>
            <p><b> Would you mind adding a rest stop somewher in the middle? Some older folks got quiet tried during
                your
                joureny</b></p>
          </div>

          <div class="Rate_users_profile">
            <h6><img src={require('../images/Ellipse3.png')} alt="image" width="30px;" height="30px;"/>&nbsp;<b>Daniel W</b>&nbsp; <spam
                class="eng"> 12 sep,2021</spam>
            </h6>
            <p> Thank you for your feedback. I am always trying my best to create my best experiance for my fellow
              travellers. I will surely
              update the tour</p>
          </div>

          <hr/>
          <div class="col-md-4"> <a href="#" class="site_btn">See More</a></div>
        </div>

      </div>
    </div>
  </section>
  <section className="experience_section mb-5">
        <div className="container">
            <div className="experience_outer">
                <div className="experience_inner1">
                    <h3>Similar Experiences</h3>
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
 
            </>
        )
}
export default Sorting;
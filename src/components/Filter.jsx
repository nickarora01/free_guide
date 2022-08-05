import React,{useState,useEffect} from "react";
import firebase from "./firebase";
import { collection, query, orderBy, startAfter, limit, getDocs } from "firebase/firestore";  

const Filter=()=>{
  const [users,setUsers]=useState([]);
  const [show,setShow]=useState(true);
  useEffect(() => {
   firebase.firestore().collection('tours').orderBy('rating','desc').limit(9).get().then((collections)=>{
    // console.log(collections)
   const tour = collections.docs.map((tours)=>{
    // console.log(tours.id)
    return {...tours.data(),id:tours.id}
   })
   setUsers(tour)
    console.log(tour)
   })

}, []);
 
 
    return(
        <>
        <section className="experience_section mb-5">
        <div className="container">
            <div className="experience_outer">
                <div className="experience_inner1">
                    <h3>Experiences Near You</h3>
                </div>
                <div className="experience_inner1">
                  
       <ul>
          {
        show?<li><a href="#">Price</a></li>:null
      }
         {
        show?<li><a href="#">Rating</a> </li>:null
      }
          {
        show?<li><a href="#">Distance</a></li>:null
      }
       {
        show? <li><a href="#">Likes</a></li>:null
      }
       {
        show?  <li><a href="#">Creation Date</a></li>:null
      }
                       
                        <li><button  className="hide_filter" onClick={()=>setShow(!show)}><img src={require('../images/filter_icon.png')} />Hide filter</button></li>
                    </ul>
                </div>

            </div>

        </div>
    </section>
   
        <section>
       
         <div className='container' > 
        <div className="App" >
        <label>Tag</label>
        <select className="selectpicker" multiple data-live-search="true">
        <option>Crafts</option>
      <option>Architecture</option>
        </select>
        <label>Category</label>
        <select className="selectpicker" multiple data-live-search="true">
        <option>Nature</option>
        </select>
        <label>Lang</label>
        <select className="selectpicker" multiple data-live-search="true">
        <option>English</option>
        </select>
        <label>Time</label>
        <select className="selectpicker" multiple data-live-search="true">
        <option>60</option>
        </select>

        
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
                        <img src={item.CoverImages}className="card-img-top" alt="Mask-Group-1"/>
                        <div className="card-body">
                    <div className="persons">
                    <div className="person-left">
                        <a href="#" className="free_1">Free</a>
                    </div>
                    <div className="person-right">
                        <p><img src={require('../images/heart.png')} alt="image"/> 150</p>
                    </div>
                     </div>
                    <h5 className="card-title">Historical Tour Of The Rocks</h5>
                    <p className="card-text">Explore Sydney's beautiful coastline whilst leaning about the first
                        settlements in Australia</p>
                    <a href="#" className="card-link">{item.rating} /5 <span>Rating</span></a>
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
export default Filter;
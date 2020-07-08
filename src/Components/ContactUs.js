import React from 'react';
import "../css/main.css";
import Cont from "../assests/cont.jpg";

const Contact  = () => {
    return (
        <div>
            <div>
        <h1 className="text-4xl text-center pt-3 pb-3 font-bold" id="Contact Us">CONTACT US</h1>
        <div className="md:flex md:justify-center py-2 px-8">
        <span className="p-8 ">
          <img
            className="border-2 rounded-lg block m-auto"
            src={Cont}
            width="350"
            height="350"
            alt="news"
          />
          <p className=" text-center pt-8 pb-3  text-xl ">
          If You need Any Help Send Us an Email on Email@email.com <br></br>
          Or Call Us on 964xxxxxxx
          </p>
        </span>
        </div>
      </div>
            
        </div>
    );
}
 
export default Contact ;
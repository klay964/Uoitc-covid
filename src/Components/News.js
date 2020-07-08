import React from "react";
import "../css/main.css";
import Covid from "../assests/cv19.jpg";
import Iraq from "../assests/irq.jpg";
import China from "../assests/chn.jpg";

const News = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl text-center pt-3 pb font-bold" id="News">NEWS</h1>
      </div>
      <div className="md:flex md:justify-between py-2 px-8">
        <span className="p-8 ">
          <img
            className="border-2 rounded-lg"
            src={Covid}
            width="350"
            height="350"
            alt="news"
          />
          <p className=" text-center py-3  text-lg md:w-5/6">
            White House claims US is 'a leader' in fight against Covid-19 as
            cases rise Kayleigh McEnany made comment as majority of US states
            report increases in new coronavirus infections
          </p>
        </span>
        <span className="p-8 ">
          <img
            className="border-2 rounded-lg"
            src={Iraq}
            width="395"
            height="395"
            alt="news"
          />
          <p className=" text-center py-3  text-lg md:w-5/6">
            COVID-19: Iraqi government announces new measures:The meeting agreed
            a number of new measures, in line with recommendations from the
            World Health Organization
          </p>
        </span>
        <span className="p-8 ">
          <img
            className="border-2 rounded-lg"
            src={China}
            width="370"
            height="370"
            alt="news"
          />
          <p className=" text-center py-3  text-lg md:w-5/6">
            A cluster of COVID-19 in Beijing, People’s Republic of China:WHO is
            following up with Chinese authorities about a cluster of COVID-19
            cases in Beijing, People’s Republic of China.
          </p>
        </span>
      </div>
    </div>
  );
};

export default News;

//import { Translate } from "@mui/icons-material";
import "./Works.scss";
import { useState } from "react";

export default function Works() {
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Booking App",
      desc: "It's an application ed for reserving accommodations in specific cities, such as hotels.",
      img: "https://flightitineraryforvisa.com/wp-content/uploads/2018/12/Hotel-Booking-1280x720.jpg",
      link:"https://to-do-list-xp01.onrender.com/",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "To Do List",
      desc: "It's an application designed for creating and managing lists of tasks or activities that need to be completed.",
      img: "https://media.istockphoto.com/id/1285308242/photo/to-do-list-text-on-notepad.jpg?s=612x612&w=0&k=20&c=p85bCVQZwvkrqqqNOJGg2QuPDu6ynTlQHkASQOTELh8=",
      link:"https://to-do-list-xp01.onrender.com/",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Movie Master",
      desc: "It's an application that allows users to search for movies, providing information such as titles, genres, actors, and release dates.",
      img: "https://blog.logrocket.com/wp-content/uploads/2020/11/movie-search-app.png",
      link:"https://movies-api-y7sk.onrender.com/"
    },
  ];
 const [currentsilde,setcurrentSlide]=useState(0);
  const handleClick=(way)=>{
    way==="left" 
    ?setcurrentSlide(currentsilde>0?currentsilde-1:2)
    : setcurrentSlide(currentsilde<data.length-1?currentsilde+1:0);
  };
  return (
    <div className="works" id="works">
      <div className="slider" style={{transform:`translateX(-${currentsilde*100}vw)`}}>
        {data.map((d) => (
          <div className="container" key={d.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
                <a href={d.link}>Deployed Link</a>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img className="arrow left" src="assets/arrow.png" alt=""  onClick={()=>handleClick("left")}/>
      <img className="arrow right" src="assets/arrow.png" alt="" onClick={()=>handleClick("right")}/>
    </div>
  );
}

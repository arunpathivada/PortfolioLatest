import "./Portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList.jsx"
import { useEffect, useState } from "react";
import {educationPortfolio,internshipPortfolio,skillsPortfolio, hobbiesPortfolio} from "../data.js";
export default function Portfolio() {

  const [selected,setSelected]= useState("education");
  const [data,setData]=useState([]);

  const list=[
    {
      id:"education",
      title:"Education"
    },
    {
      id:"internship",
      title:"Internships & Courses"
    },
    
    {
      id:"skills",
      title:"Skills"
    },
    {
      id:"hobbies",
      title:"Hobbies"
    }  
  ]
  useEffect(()=>{
    switch(selected){
      case "education":
        setData(educationPortfolio);
        break;
        case "internship":
          setData(internshipPortfolio);
          break;
          case "skills":
            setData(skillsPortfolio);
            break;
            case "hobbies":
              setData(hobbiesPortfolio);
              break;
            default:
              setData(educationPortfolio);
    }
  },[selected]);
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
      {list.map((item) => (
  <PortfolioList title={item.title} key={item.id}  active={selected===item.id} setSelected={setSelected} id={item.id} />
))}  
      </ul>
      <div className="container">
        {data.map((d)=>(
          <div className="item">
         <img src={d.img} alt="" />
         <h3>{d.title}</h3>
           </div>
           ))}
        </div>
      </div>
  );
}

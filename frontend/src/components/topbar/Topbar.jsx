import "./Topbar.scss";
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
export default function Topbar({menuOpen,setMenuOpen}) {
  return (
    <div className={"topbar " +(menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <img src="assets/mylogored.png" alt="" />
          
          <div className="itemContainer">
            <div className="call">
            <PersonIcon className="icon"/>
            <span  className="span1">+91 8919813282</span>
            </div>
            <div className="mail">
            <MailIcon className="icon"/>
            <span className="span1">arunpathivada143@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

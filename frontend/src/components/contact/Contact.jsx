
import "./Contact.scss";
import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [message,setmessage]= useState(false);
  const [senderEmail,setsenderEmail]=useState(null);
  const [subject,setSubject]= useState(null);
 const [senderMessage,setsenderMessage]=useState(null);
  const handleClick=(e)=>{
    e.preventDefault();
    console.log("Sending Email");
    try{
    if (senderEmail && subject && message) {
      localStorage.setItem("email", senderEmail);
      localStorage.setItem("subject", subject);
      localStorage.setItem("senderMessage", senderMessage);

      axios
        .post("http://localhost:5000/send_email", {
          senderEmail: senderEmail,
          subject: subject,
          senderMessage: senderMessage,
          
        })
        .then(() => alert("Message Send Succesfuly"))
        .catch(() => alert("Oppssy daisssy"));
      return;
    }
    return alert("Fill in all the fields to continue");
  }catch(err){
    console.log(err);
  }
  }
  return (
    <div className='contact' id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form>
          <input type="text" placeholder="Email" onChange={(e)=>{setsenderEmail(e.target.value)}}/>
          <textarea placeholder="Message" cols={44} rows={10}  onChange={(e)=>{setsenderEmail(e.target.value)}}></textarea>
          <button type="submit" onClick={handleClick}>Send</button>
          {message && <span> Thanks i'll reply ASAP</span>}
        </form>
      </div>
    </div>
  )
}

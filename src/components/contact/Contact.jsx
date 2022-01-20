import React, { useRef, useState, useContext } from "react";
import "./Contact.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { ThemeContext } from "../../context";
import emailjs from "emailjs-com";

function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_4hf9bqo", "template_i584ddj", formRef.current, "user_Dmt8hDs8GWLX7bonplN8V").then(
      (result) => {
        console.log(result.text);
        setDone(true);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <BsFillTelephoneFill className="c-icon" />
              <p>+66 91 820 6002</p>
            </div>
            <div className="c-info-item">
              <MdEmail className="c-icon" />
              <p>nattagan.sanpa@gmail.com</p>
            </div>
            <div className="c-info-item">
              <MdLocationOn className="c-icon" />
              <p>234 mueung , Surat thani, Thailand, 84000</p>
            </div>
          </div>
        </div>
        <div className="c-right">
          <div >
            <p className="c-desc">
              <b>What's your story?</b> Get in touch Always avaliable for freelancing if the right project comes along
              me.
            </p>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input
                style={{ backgroundColor: darkMode && "#383838" }}
                type="text"
                placeholder="Name"
                name="user_name"
              />
              <input
                style={{ backgroundColor: darkMode && "#383838" }}
                type="text"
                placeholder="Subject"
                name="user_subject"
              />
              <input
                style={{ backgroundColor: darkMode && "#383838" }}
                type="text"
                placeholder="Email"
                name="user_email"
              />
              <textarea
                style={{ backgroundColor: darkMode && "#383838" }}
                rows="5"
                placeholder="Message"
                name="message"
              />
              <button>Submit</button>
              {done && "   ..Thank you"}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

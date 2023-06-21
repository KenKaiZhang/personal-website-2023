import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "../styles/connectSection.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useInView } from "framer-motion";

const ConnectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [sent, setSent] = useState<boolean>(false);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm("service_xjaz4qs", "template_w2elpkx", e.target, "6Sfmrb1ltPB0bdaYV")
      .then((res) => {
        if (res.status === 200) {
          setSent(true);
          e.target.reset();
        }
      });
  };

  const typeOut = {
    opacity: isInView ? 1 : 0,
    transition: "1s",
  };

  return (
    <section className="connect" ref={ref}>
      <div className="background" />
      <div className="header">
        {"Let's Connect!".split("").map((char, i) => {
          return /\s/.test(char) ? (
            <h2 key={i} style={{ ...typeOut, transitionDelay: `${i / 10}s` }}>
              &nbsp;
            </h2>
          ) : (
            <h2 key={i} style={{ ...typeOut, transitionDelay: `${i / 10}s` }}>
              {char}
            </h2>
          );
        })}
      </div>
      <div className="socials">
        <a className="gmail" href="mailto:ckzhang2674@gmail.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
        </a>
        <a className="instagram" href="https://instagram.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
        </a>
        <a
          className="linkedin"
          href="https://www.linkedin.com/in/chen-kai-zhang/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
        </a>
      </div>
      <p>or</p>
      <form className="message" onSubmit={sendEmail}>
        <div className="headers">
          <input type="text" placeholder="Email" name="email" />
          <button type="submit" className={sent ? "disappear" : ""} disabled={sent}>
            <FontAwesomeIcon icon={sent ? faEnvelope : faPaperPlane} />
          </button>
        </div>
        <textarea placeholder="Send a message" name="message" />
      </form>
    </section>
  );
};

export default ConnectSection;

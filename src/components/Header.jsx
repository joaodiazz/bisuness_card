import { FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Header = () => {
  return (
    <header className="header">
      <div className="user">
        <h2 className="userName">João Dias</h2>
        <span className="userJob">Front-end Developer</span>
        <p className="workIn">Pernambuco - Brazil</p>
      </div>

      <div className="buttons">
        <button className="btn1">
          <HiMail /> Email
        </button>

        <button className="btn2">
          <FaLinkedin /> LinkedId
        </button>
      </div>
    </header>
  );
};

export default Header;

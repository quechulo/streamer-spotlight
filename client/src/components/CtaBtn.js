import "./CtaBtn.css";
import { useNavigate } from "react-router-dom";

const CtaBtn = ({ text, link }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`${link}`);
  };

  return <button className="button-cta" onClick={handleClick}>{text}</button>;
};

export default CtaBtn;

import './Collapse.scss';
import { useState } from 'react';
import IconArrow from "./../../assets/images/icons/arrow_up.png";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);


  return (
      <div className="collapse">
        <button
          type="button"
          className="collapsible"
          onClick={() => setIsOpen(!isOpen)}
        >
          {title}
          <img className={"icon " + (isOpen ? 'open' : '')} src={IconArrow} alt="triangle vers le haut" />
        </button>
        <div className={"content " + (isOpen ? "display" : "")} >
          {content}
        </div>
      </div>
  );
}

export default Collapse;


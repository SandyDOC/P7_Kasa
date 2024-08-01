import './Collapse.scss';
import { useState } from 'react';
import IconArrow from "./../../assets/images/icons/arrow_up.png";

const Collapse = ({ title, content, width }) => {
  const [isOpen, setIsOpen] = useState(false);

  const collapseStyle = {
    width: width
  };

  return (
      <div className="collapse" style={collapseStyle}>
        <button
          type="button"
          className="collapsible"
          onClick={() => setIsOpen(!isOpen)}
          style={collapseStyle}
        >
          {title}
          <img className={"icon " + (isOpen ? 'open' : '')} src={IconArrow} alt="triangle vers le haut" />
        </button>
        <div className={"content " + (isOpen ? "display" : "")} style={collapseStyle}>
          {content}
        </div>
      </div>
  );
}

export default Collapse;


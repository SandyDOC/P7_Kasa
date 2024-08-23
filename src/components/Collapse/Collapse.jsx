import { useState, useRef } from 'react';
import IconArrow from "./../../assets/images/icons/arrow_up.png";
import './Collapse.scss';

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef();

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

      <div ref={contentRef}
        className='content-container'
        style={isOpen ?
          { height: contentRef.current.scrollHeight + "px", } : {
            height: "0px",
          }
        }>
        <div className="content">
          {content}
        </div>
      </div>
    </div>
  );
}

export default Collapse;


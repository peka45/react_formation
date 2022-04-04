import React, { useState } from "react";
import style from "./Button.module.scss";
import PropTypes from "prop-types";

function Button(props) {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <button
        onClick={(evt) => {
          setClicked(true);
          setTimeout(() => {
            setClicked(false);
          }, 1000);
          props.eventOnClick();
        }}
        className={`${style.Button}${clicked?' '+style.clicked:''}`}
        style={{
          ...props.style,
          backgroundColor: props.type === "submit" ? "green" : "red"
        }}
        type={props.type}
      >
        {props.children}
      </button>
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  eventOnClick: PropTypes.func.isRequired,
  bgColor: PropTypes.string,
  children: PropTypes.array.isRequired,
  style: PropTypes.any,
  type: PropTypes.string,
};

Button.defaultProps = {
  eventOnClick: () => {
    console.error("Fonction du button undefined");
  },
  bgColor: "blueocean",
};

export default Button;

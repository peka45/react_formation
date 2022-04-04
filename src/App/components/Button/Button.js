import React, { useState, useEffect } from "react";
import style from "./Button.module.scss";
import PropTypes from "prop-types";

function Button(props) {
  const [clicked, setClicked] = useState(false);

  // Observer le changement sur clicked
  useEffect(() => {
    setTimeout(() => {
      if (clicked) {
        setClicked(false);
      }
    }, 1000);
  }, [clicked]);

  return (
    <div>
      <button
        onClick={(evt) => {
          setClicked(true);

          props.eventOnClick();
        }}
        className={`${style.Button}${clicked ? " " + style.clicked : ""}`}
        style={{
          ...props.style,
          backgroundColor: props.type === "submit" ? "green" : "red",
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

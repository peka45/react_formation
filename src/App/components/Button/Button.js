import React from "react";
import style from "./Button.module.scss";
import PropTypes from "prop-types";

function Button(props) {
  console.log(props);
  return (
    <button
      onClick={props.eventOnClick}
      className={style.Button}
      style={{ backgroundColor: props.bgColor }}
    >
      {props.text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  eventOnClick: PropTypes.func.isRequired,
  bgColor: PropTypes.string,
};

Button.defaultProps = {
  eventOnClick: () => {
    console.error("Fonction du button undefined");
  },
};

export default Button;

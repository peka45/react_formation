import React, { useState, useEffect } from "react";
import style from "./Button.module.scss";
import PropTypes from "prop-types";

function Button(props) {
  //gestion d'une valeur etatique
  const [clicked, setClicked] = useState(false);
  //observation des changement /montage de la valeur
  useEffect(() => {
    if (clicked) {
      setTimeout(() => {
        setClicked(false);
      }, 350);
    }
  }, [clicked]);
  //cmp did mount
  useEffect(() => {
    console.log("le composant est monté");
  }, []);
  return (
    <button
      onClick={(evt) => {
        //moddif async d'une valeur d'etat
        setClicked(true);
        props.lorsqueLeButtonEstClicked();
      }}
      className={`${style.Button}${clicked ? " " + style.clicked : ""}`}
      style={{
        ...props.style,
        backgroundColor: props.bgColor,
        color: props.color,
      }}
      type={props.type}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  lorsqueLeButtonEstClicked: PropTypes.func.isRequired,
  style: PropTypes.object,
  bgColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};
Button.defaultProps = {
  lorsqueLeButtonEstClicked: () => {
    console.warn("Fonction du button undefined");
  },
  bgColor: "skyblue",
  color: "white",
  type: "button",
};

export default Button;

import React, { useState } from "react";
import PropTypes from "prop-types";
import style from "./MemeForm.module.scss";

const initialState = {};

const MemeForm = (props) => {
  const [state, setstate] = useState(initialState);

  return (
    <div className={style.MemeForm} data-testid="MemeForm">
      memeForm
    </div>
  );
};

MemeForm.propTypes = {};
MemeForm.defaultProps = {};

export default MemeForm;

import React from "react";
import PropTypes from "prop-types";
import style from "./MemeViewer.module.scss";

const MemeViewer = (props) => {
  return (
    <div className={style.MemeViewer} data-testid="MemeViewer">
      {props.children}
    </div>
  );
};

MemeViewer.propTypes = {
  children: PropTypes.any.isRequired,
};
MemeViewer.defaultProps = {
  children: <div>Children absents</div>,
};

export default MemeViewer;

import React from "react";
import style from "./MemeViewer.module.scss";
import I_Meme, { I_Image } from "../interfaces/common";
import { connect } from "react-redux";

interface I_MemeViewerProps {
  meme: I_Meme;
  image: I_Image | undefined;
}

const MemeViewer: React.FC<I_MemeViewerProps> = (props) => {
  return (
    <svg
      className={style.MemeViewer}
      data-testid="MemeViewer"
      viewBox={`0 0  ${props.image ? props.image.w : "1000"} ${
        props.image ? props.image.h : "1000"
      }`}
    >
      {props.image !== undefined && (
        <image href={props.image.url} x="0" y="0"></image>
      )}
      <text
        x={props.meme.x}
        y={props.meme.y}
        fontSize={props.meme.fontSize}
        fill={props.meme.color}
        textDecoration={props.meme.underline ? "underline" : "none"}
        fontStyle={props.meme.italic ? "italic" : "normal"}
        fontWeight={props.meme.fontWeight}
      >
        {props.meme.text}
      </text>
    </svg>
  );
};

MemeViewer.propTypes = {};
MemeViewer.defaultProps = {};

// store > vers props
function mapStateToProps(state: any, ownProps: any) {
  return {
    ...ownProps,
    meme: state.current,
    image: state.ressources.images.find(
      (e: I_Image) => e.id === state.current.imageId
    ),
  };
}

// Dispatch action vers le store
function mapDispatchToProps(dispatch: Function) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(MemeViewer);

export const unConnectedMemeViewer = MemeViewer;

import React from "react";
import style from "./MemeViewer.module.scss";
import I_Meme, { I_Image } from "../interfaces/common";

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
      >
        {props.meme.text}
      </text>
    </svg>
  );
};

MemeViewer.propTypes = {};
MemeViewer.defaultProps = {};

export default MemeViewer;

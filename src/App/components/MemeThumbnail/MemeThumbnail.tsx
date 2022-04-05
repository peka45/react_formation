import React from "react";
import styles from "./MemeThumbnail.module.scss";
import I_Meme, { I_Image } from "../interfaces/common";
import { connect } from "react-redux";
import MemeViewer from "../MemeViewer/MemeViewer";

interface I_MemeThumbnailProps {
  images: Array<I_Image>;
  memes: Array<I_Meme>;
}

const MemeThumbnail: React.FC<I_MemeThumbnailProps> = (props) => {
  return (
    <div data-testid="MemeThumbnail" className={styles.MemeForm}>
      {props.memes.map((me) => {return <MemeViewer />})}
    </div>
  );
};

MemeThumbnail.propTypes = {};
MemeThumbnail.defaultProps = {};

function mapStateToProps(storeState: any, ownProps: any) {
  return {
    ...ownProps,
    images: storeState.ressources.images,
    memes: storeState.ressources.memes,
  };
}

function mapDispatchToProps(dispatch: Function) {}

export default connect(mapStateToProps, mapDispatchToProps)(MemeThumbnail);

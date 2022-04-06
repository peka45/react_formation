import React from "react";
import styles from "./MemeThumbnail.module.scss";
import I_Meme, { I_Image } from "../interfaces/common";
import { connect } from "react-redux";
import { unConnectedMemeViewer as UCMemeViewer } from "../MemeViewer/MemeViewer";

interface I_MemeThumbnailProps {
  images: Array<I_Image>;
  memes: Array<I_Meme>;
}

const MemeThumbnail: React.FC<I_MemeThumbnailProps> = (props) => {
  return (
    <div data-testid="MemeThumbnail" className={styles.MemeThumbnail}>
      {props.memes.map((me, i) => {
        return (
          <UCMemeViewer
            key={`thumbnail-meme-viewer${i}`}
            meme={me}
            image={props.images.find((i) => i.id === me.imageId)}
          />
        );
      })}
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

function mapDispatchToProps(dispatch: Function) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(MemeThumbnail);

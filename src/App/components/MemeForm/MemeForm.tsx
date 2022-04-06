import React from "react";
import styles from "./MemeForm.module.scss";
import I_Meme, { I_Image } from "../interfaces/common";
import Button from "../Button/Button";
import { CURRENT_ACTIONS } from "../../store/store";
import { connect } from "react-redux";

interface I_MemeFormProps {
  currentMeme: I_Meme;
  images: Array<I_Image>;
  onInputValueChange: Function;
  onSubmit: Function;
}

const MemeForm: React.FC<I_MemeFormProps> = (props) => {
  return (
    <div data-testid="MemeForm" className={styles.MemeForm}>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          props.onSubmit();
        }}
      >
        <h1>Titre</h1>
        <input type="text" id="f_titre" placeholder="saisir titre" />
        <hr />
        <h2>Image</h2>
        <select
          //value={props.currentMeme.imageId? props.currentMeme.imageId : -1}
          onChange={(evt) => {
            props.onInputValueChange({ imageId: Number(evt.target.value) });
          }}
        >
          <option value="-1">Aucune</option>
          {props.images.map((e, i) => {
            return (
              <option value={e.id} key={"select-img-" + i}>
                {e.name}
              </option>
            );
          })}
        </select>
        <hr />
        <h2>text</h2>
        <input
          type="text"
          value={props.currentMeme.text}
          onChange={(evt) => {
            props.onInputValueChange({ text: evt.target.value });
          }}
        />
        <div className={styles.half}>
          <div>
            <label htmlFor="f_x">x:</label>
            <br />
            <input
              type="number"
              className={styles.smallInput}
              onChange={(evt) => {
                props.onInputValueChange({
                  x: evt.target.value,
                });
              }}
            />
          </div>
          <div>
            <label htmlFor="f_y">y:</label>
            <br />
            <input
              type="number"
              className={styles.smallInput}
              onChange={(evt) => {
                props.onInputValueChange({
                  y: evt.target.value,
                });
              }}
            />
          </div>
        </div>
        <hr />
        <label htmlFor="f_color">Couleur</label>
        <input
          type="color"
          id="f_color"
          onChange={(evt) => {
            props.onInputValueChange({
              color: evt.target.value,
            });
          }}
        />
        <div className={styles.half}>
          <div>
            <label htmlFor="f_sz">font-size:</label>
            <br />
            <input
              type="number"
              className={styles.smallInput}
              onChange={(evt) => {
                props.onInputValueChange({
                  fontSize: Number(evt.target.value),
                });
              }}
            />
          </div>
          <div>
            <label htmlFor="f_fw">font-weight:</label>
            <br />
            <input
              type="number"
              className={styles.smallInput}
              min="100"
              step="100"
              max="900"
              onChange={(evt) => {
                props.onInputValueChange({
                  fontWeight: evt.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className={styles.half}>
          <div>
            <label htmlFor="f_underline">underline:</label>
            <br />
            <input
              id="f_underline"
              type="checkbox"
              onChange={(evt) => {
                props.onInputValueChange({
                  underline: evt.target.checked,
                });
              }}
            />
          </div>
          <div>
            <label htmlFor="f_italic">italic:</label>
            <br />
            <input
              id="f_italic"
              type="checkbox"
              onChange={(evt) => {
                props.onInputValueChange({
                  italic: evt.target.checked,
                });
              }}
            />
          </div>
        </div>
        <div className={styles.half}>
          <Button type="reset" bgColor="tomato">
            clear
          </Button>
          <Button type="submit" bgColor="skyblue">
            save
          </Button>
        </div>
      </form>
    </div>
  );
};

MemeForm.propTypes = {};
MemeForm.defaultProps = {};

function mapStateToProps(storeState: any, ownProps: any) {
  return {
    ...ownProps,
    images: storeState.ressources.images,
    currentMeme: storeState.current,
  };
}

function mapDispatchToProps(dispatch: Function) {
  return {
    onInputValueChange: (memeValuesToChange: Object) => {
      dispatch({
        type: CURRENT_ACTIONS.UPDATE_CURRENT,
        value: memeValuesToChange,
      });
    },
    onSubmit: () => {
      dispatch({ type: CURRENT_ACTIONS.SAVE_CURRENT });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MemeForm);

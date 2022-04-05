import React from "react";
import style from "./MemeForm.module.scss";
import I_Meme, { I_Image } from "../interfaces/common";
import Button from "../Button/Button";

interface I_MemeFormProps {
  currentMeme: I_Meme;
  images: Array<I_Image>;
  onInputValueChange: Function;
}

const MemeForm: React.FC<I_MemeFormProps> = (props) => {
  return (
    <div className={style.MemeForm} data-testid="MemeForm">
      <form>
        <input
          type="text"
          name="meme_text"
          id=""
          placeholder="Text du meme"
          value={props.currentMeme.text}
          onChange={(evt) => {
            props.onInputValueChange({ text: evt.target.value });
          }}
        ></input>
        <div className="flexCol">
          <Button type="submit" bgColor="skyblue">
            Valider
          </Button>
          <Button type="reset" bgColor="tomato">
            Reset
          </Button>
        </div>
      </form>
    </div>
  );
};

MemeForm.propTypes = {};
MemeForm.defaultProps = {};

export default MemeForm;

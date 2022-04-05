import React, { Component } from "react";
import style from "./App.module.css";
import I_Meme, {
  DummyMeme as initialMemeState,
  I_Image,
} from "./components/interfaces/common";
import FlexWLayout from "./components/layouts/FlexWLayout/FlexWLayout";
import MemeForm from "./components/MemeForm/MemeForm";
import MemeViewer from "./components/MemeViewer/MemeViewer";

interface I_AppProps {
  AppName: string;
}

interface I_AppState {
  currentMeme: I_Meme;
  images: Array<I_Image>;
}

class App extends Component<I_AppProps, I_AppState> {
  constructor(props: I_AppProps) {
    super(props);
    this.state = {
      currentMeme: initialMemeState,
      images: [
        {
          id: 0,
          url: "img/futurama.jpg",
          w: 1200,
          h: 675,
          name: "futurama",
        },
      ],
    };
  }

  componentDidMount() {
    console.log("%c%s", "color: green", "Le composant App est monté");
  }

  componentDidUpdate(oldProps: I_AppProps, oldState: I_AppState) {
    console.log("%c%s", "color: green", "======= updated =======");
    console.log("%c%s", "color: green", "oldProps", oldProps);
    console.log("%c%s", "color: green", "oldState", oldState);
    console.log("%c%s", "color: green", "=======================");
  }

  render(): React.ReactNode {
    return (
      <div className={style.App}>
        <FlexWLayout>
          <MemeViewer
            meme={this.state.currentMeme}
            image={this.state.images.find(
              (i: I_Image) => i.id === this.state.currentMeme.imageId
            )}
          ></MemeViewer>
          <MemeForm
            currentMeme={this.state.currentMeme}
            images={this.state.images}
            onInputValueChange={(changedValuesObject: any) => {
              this.setState({
                currentMeme: {
                  ...this.state.currentMeme,
                  ...changedValuesObject,
                },
              });
            }}
          ></MemeForm>
        </FlexWLayout>
      </div>
    );
  }
}

export default App;

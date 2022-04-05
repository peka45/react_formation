import React, { Component } from "react";
import style from "./App.module.css";
import { DummyMeme as initialMemeState } from "./components/interfaces/common";
import FlexWLayout from "./components/layouts/FlexWLayout/FlexWLayout";
import MemeForm from "./components/MemeForm/MemeForm";
import MemeThumbnail from "./components/MemeThumbnail/MemeThumbnail";
import MemeViewer from "./components/MemeViewer/MemeViewer";

interface I_AppProps {
  AppName: string;
}

class App extends Component<I_AppProps> {
  constructor(props: I_AppProps) {
    super(props);
    this.state = {
      currentMeme: initialMemeState,
      images: [],
      memes: [],
    };
  }

  render(): React.ReactNode {
    return (
      <div className={style.App}>
        <MemeThumbnail />
        <FlexWLayout>
          <MemeViewer />
          <MemeForm />
        </FlexWLayout>
      </div>
    );
  }
}

export default App;

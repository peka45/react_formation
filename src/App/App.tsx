import React, { Component } from "react";
import style from "./App.module.css";
import FlexWLayout from "./components/layouts/FlexWLayout/FlexWLayout";
import MemeForm from "./components/MemeForm/MemeForm";
import MemeViewer from "./components/MemeViewer/MemeViewer";

interface I_AppProps {
  AppName: string;
}

interface I_AppState {
  counter: number;
  uneValue: string;
}

class App extends Component<I_AppProps, I_AppState> {
  constructor(props: I_AppProps) {
    super(props);
    this.state = { counter: 0, uneValue: "Hello" };
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
          <MemeViewer></MemeViewer>
          <MemeForm></MemeForm>
        </FlexWLayout>
      </div>
    );
  }
}

export default App;

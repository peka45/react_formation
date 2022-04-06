import { combineReducers, createStore } from "redux";
import { DummyMeme } from "../components/interfaces/common";
import { REST_BASE_URL } from "../config/config";

const initialRessourcesState = {
  images: [],
  memes: [],
};

export const RessourcesActions = Object.freeze({
  ADD_INIT_IMAGES: "ADD_INIT_IMAGES",
  ADD_INIT_MEMES: "ADD_INIT_MEMES",
  ADD_MEME: "ADD_MEME",
});

function ressourceReducer(state = initialRessourcesState, action) {
  switch (action.type) {
    case RessourcesActions.ADD_INIT_IMAGES:
      return { ...state, images: action.values };
    case RessourcesActions.ADD_INIT_MEMES:
      return { ...state, memes: action.values };
    case RessourcesActions.ADD_MEME:
      return { ...state, memes: [...state.memes, action.value] };
    case "ADD_INIT_ALL":
      console.log(action);
      return { ...state, memes: action.memes, images: action.images };
    case "INIT_LOADING":
      const prm = fetch(`${REST_BASE_URL}/memes`).then((f) => f.json());
      const pri = fetch(`${REST_BASE_URL}/images`).then((f) => f.json());
      Promise.all([prm, pri]).then((aResp) => {
        store.dispatch({
          type: "ADD_INIT_ALL",
          memes: aResp[0],
          images: aResp[1],
        });
      });
      return state;
    default:
      return state;
  }
}

function modalReducer(state = { isShow: false, content: "" }, action) {
  switch (action.type) {
    case "SHOW_MODAL":
      return { isShow: true, content: action.value };
    case "HIDE_MODAL":
      return { isShow: false, content: "" };
    default:
      return state;
  }
}

export const CURRENT_ACTIONS = Object.freeze({
  UPDATE_CURRENT: "UPDATE_CURRENT",
  RESET_CURRENT: "RESET_CURRENT",
  SAVE_CURRENT: "SAVE_CURRENT",
});

function currentReducer(state = DummyMeme, action) {
  switch (action.type) {
    case CURRENT_ACTIONS.UPDATE_CURRENT:
      return { ...state, ...action.value };
    case CURRENT_ACTIONS.RESET_CURRENT:
      return { ...DummyMeme };
    case CURRENT_ACTIONS.SAVE_CURRENT:
      // Enregistre en base json
      fetch(`${REST_BASE_URL}/memes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      })
        .then((f) => f.json())
        .then((o) => {
          // enregistre aussi dans le store le meme
          store.dispatch({ type: RessourcesActions.ADD_MEME, value: o });
        });
      return state;
    default:
      return state;
  }
}

export const store = createStore(
  combineReducers({
    modal: modalReducer,
    ressources: ressourceReducer,
    current: currentReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// store.subscribe(() => {
//   console.log("store subscribe:");
//   console.log(store.getState());
// });

store.dispatch({
  type: "INIT_LOADING",
});
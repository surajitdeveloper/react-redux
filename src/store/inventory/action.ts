import { InventoryActionTypes } from "./types";

import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

import { ApplicationState } from "../index";
import inventory from "../../mockdata";

import firebase from "../../firebase";
export type AppThunk = ActionCreator<
  ThunkAction<void, ApplicationState, null, Action<string>>
>;

export const fetchRequest: AppThunk = () => {
  return (dispatch: Dispatch): Action => {
    try {
      
      
      return dispatch({
        type: InventoryActionTypes.FETCH_SUCCESS,
        payload: inventory
      });
    } catch (e) {
      return dispatch({
        type: InventoryActionTypes.FETCH_ERROR
      });
    }
  };
};

export const fetchData = () => {
  const myPromise = new Promise((resolve, reject) => {
    const fire = firebase.database().ref("product")
      fire.on("value", (snapshot) => {
        // console.log("snap --- ",snapshot.val());
        resolve(snapshot.val());
     },  (error) => {
        console.log("Error: " , error);
     });
      // console.log("firebase --- ",fire);
  });
  return myPromise;
}

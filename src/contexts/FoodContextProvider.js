import React from "react";
import { foodReducer } from "../reducers/FoodReducer";

export const FoodContext = React.createContext();
const initialState = {
    foods: [],
   
};


const FoodContextProvider = props => {
    const [food_state, food_dispatch] = React.useReducer(
        foodReducer,
        initialState
    );

    return (
        <FoodContext.Provider value={{ food_state, food_dispatch }}>
            {props.children}
        </FoodContext.Provider>
    );
};
export default FoodContextProvider;

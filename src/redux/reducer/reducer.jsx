
import { CHANGE_THEME, COUNTER } from "../Types/types";
const initialState = {
  color: localStorage.getItem("color") || "#090631",
  lay: localStorage.getItem("lay") || "#0E0A43",
  counter: Number(localStorage.getItem("counter")) || 0,
};

const changeTheme = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      const newColor = state.color === "white" ? "#090631" : "white";
      const newLay = state.lay === "#0E0A43" ? "#ECECEC" : "#0E0A43";

      localStorage.setItem("color", newColor);
      localStorage.setItem("lay", newLay);

      return {
        ...state,
        color: newColor,
        lay: newLay,
      };

    case COUNTER:
      const newCount = 44;

      localStorage.setItem("counter", newCount);

      return {
        ...state,
        counter: newCount,
      };

    default:
      return state;
  }
};

export default changeTheme;

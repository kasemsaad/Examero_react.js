const notify = {
  not: "",
};
const notification = (state = notify, action) => {
  switch (action.type) {
    case "NOT":
      return { ...state, not: action.payload };

    default:
      return state;
  }
};
export default notification;

export const setNot = (not) => ({
  type: "NOT",
  payload: not,
});


const initialState = {
  tasks: JSON.parse(localStorage.getItem("list1"))||[],
  showPopup: false,
  editedTaskBody: "",
  count: 0,
  editedIndex: "",
};

export default function reducer(state = initialState, action) {
  let tasks = [...state.tasks];

  if (action.type === "INSERT") {
    tasks.push(action.data);
    return { ...state, tasks: tasks };
  } else if (action.type === "EDIT") {
    return { ...state, showPopup: true, editedIndex: action.data };
  } else if (action.type === "CLOSE") {
    return { ...state, showPopup: false };
  } else if (action.type === "DELETE") {
    tasks.splice(action.data, 1);
    return { ...state, tasks: tasks };
  } else if (action.type === "SAVE") {
    tasks[state.editedIndex] = action.data;
    return { ...state, tasks: tasks, showPopup: false };
  }else if (action.type === "SAVELIST") {
    localStorage.setItem("list1",JSON.stringify(state.tasks));
  }
  return state;
}

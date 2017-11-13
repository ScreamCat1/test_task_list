<<<<<<< HEAD
const propDef = (field, direction) => {
  if (direction === 'asc') {
    return (a, b) => {
      if (a[field] > b[field]) {
        return 1;
      } else if (a[field] < b[field]) {
        return -1;
      }
      return 0;
    };
  }
  return (a, b) => {
    if (a[field] < b[field]) {
      return 1;
    } else if (a[field] > b[field]) {
      return -1;
    }
    return 0;
  };
};
=======
>>>>>>> 58775b3e4f1318fa31ba1e7b7c5b7bab4a264d19
const defaultTasks = {
  tasks: [],
  totalTaskCount: 0,
};

const tasks = (initialState = defaultTasks, action) => {
<<<<<<< HEAD
  const { type, payload } = action;

  if (type === 'SET_TASKS') {
    return payload;
  } else if (type === 'SORT_TASKS') {
    const { payload: { field, direction, tasks: tasksList } } = action;
    const sortedTasks = tasksList.sort(propDef(field, direction));
    return { ...initialState, tasks: sortedTasks };
=======
  if (action.type === 'SET_TASKS') {
    return action.payload;
>>>>>>> 58775b3e4f1318fa31ba1e7b7c5b7bab4a264d19
  }
  return initialState;
};

export default tasks;
<<<<<<< HEAD
=======

>>>>>>> 58775b3e4f1318fa31ba1e7b7c5b7bab4a264d19

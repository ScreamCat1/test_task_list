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
const defaultTasks = {
  tasks: [],
  totalTaskCount: 0,
};

const tasks = (initialState = defaultTasks, action) => {
  const { type, payload } = action;

  if (type === 'SET_TASKS') {
    return payload;
  } else if (type === 'SORT_TASKS') {
    const { payload: { field, direction, tasks: tasksList } } = action;
    const sortedTasks = tasksList.sort(propDef(field, direction));
    return { ...initialState, tasks: sortedTasks };
  }
  return initialState;
};

export default tasks;

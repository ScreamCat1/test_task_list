const defaultTasks = {
  tasks: [],
  totalTaskCount: 0,
};

const tasks = (initialState = defaultTasks, action) => {
  if (action.type === 'SET_TASKS') {
    return action.payload;
  }
  return initialState;
};

export default tasks;


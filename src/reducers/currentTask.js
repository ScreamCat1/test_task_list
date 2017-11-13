const currentTask = (initialState = null, { type, payload }) => {
  if (type === 'SET_TASK') {
    const { id, tasks } = payload;
    return tasks.find(element => (element.id === +id));
  }
  return initialState;
};

export default currentTask;

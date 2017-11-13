const defaultState = {
  username: '',
  email: '',
  text: '',
  status: '',
  image_path: '',
};

const currentTask = (initialState = defaultState, { type, payload }) => {
  if (type === 'SET_TASK') {
    const { id, tasks } = payload;
    return tasks.find(element => (element.id === +id));
  }
  return initialState;
};

export default currentTask;

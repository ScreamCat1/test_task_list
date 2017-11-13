import axios from 'axios';

export const sortTasks = data => ({ type: 'SORT_TASKS', payload: data });

export const setTasks = page => (dispatch) => {
  let currentPage = '';
  if (page) {
    currentPage = `&page=${page}`;
  }
  axios
    .get(`https://uxcandy.com/~shapoval/test-task-backend?developer=Maksym${currentPage}`,
      {
        headers: { 'Access-Control-Allow-Origin': '*' },
      }).then((
      {
        data:
          {
            message:
              {
                tasks,
                total_task_count: totalTaskCount,
              },
          },
      }) => dispatch(
      {
        type: 'SET_TASKS',
        payload: { tasks, totalTaskCount: Number(totalTaskCount) },
      }));
};

export const setTask = data => ({ type: 'SET_TASK', payload: data });

export const setNewTask = (data) => {
  axios({
    url:
    'https://uxcandy.com/~shapoval/test-task-backend/create?developer=Maksym',
    crossDomain: true,
    method: 'POST',
    mimeType: 'multipart/form-data',
    contentType: false,
    processData: false,
    data,
    dataType: 'json',

  }).then(() => setTasks);
};

export const autorizeAdmin = data => ({ type: 'AUTORIZE', payload: data });

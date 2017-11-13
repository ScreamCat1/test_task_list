import axios from 'axios';

import { url, create } from '../constants';

export const sortTasks = data => ({ type: 'SORT_TASKS', payload: data });

export const setTasks = page => (dispatch) => {
  const currentPage = `&page=${page}`;
  axios
    .get(`${url}${currentPage}`,
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
    url: create,
    crossDomain: true,
    method: 'POST',
    mimeType: 'multipart/form-data',
    contentType: false,
    processData: false,
    data,
    dataType: 'json',

  }).then(resp => console.log(resp, 'tut'));
};

export const updateTask = ({ id, data }) => {
  axios({
    url: `https://uxcandy.com/~shapoval/test-task-backend/edit/:${id}?developer=Maksym`,
    crossDomain: true,
    method: 'POST',
    mimeType: 'multipart/form-data',
    contentType: false,
    processData: false,
    data,
    dataType: 'json',
  }).then(({ data: { message } }) => console.log(message));
};

export const autorizeAdmin = data => ({ type: 'AUTORIZE', payload: data });

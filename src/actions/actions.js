import axios from 'axios';

export const sortTasks = data => ({type: 'SORT_TAKS', payload: data });

export const setTasks = () => {
  return (dispatch) => {
    axios.get('https://uxcandy.com/~shapoval/test-task-backend?developer=Maksym',
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
      }) => dispatch({type: 'SET_TASKS', payload:{tasks, totalTaskCount } }));
  }
};
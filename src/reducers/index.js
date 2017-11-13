import { combineReducers } from 'redux';

import tasks from './tasks';
import autorized from './autorized';
import currentTask from './currentTask';

const rootReducers = combineReducers({
  tasks,
  autorized,
  currentTask,
});

export default rootReducers;

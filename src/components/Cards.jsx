import React, { Component } from 'react';
import axios from 'axios';

import Pagination from './Pagination';
import Card from './Card';

class Cards extends Component {
  constructor(prop) {
    super(prop);

    this.state = {
      totalTaskCount: 0,
      tasks: [],
    };
  }

  componentDidMount() {
    axios.get('https://uxcandy.com/~shapoval/test-task-backend?developer=Maksym',
      {
        headers: { 'Access-Control-Allow-Origin': '*' },
      })
      .then(({ data: { message: { tasks, total_task_count: totalTaskCount } } }) => this.setState({ tasks, totalTaskCount }));
  }
  render() {
    const { tasks, totalTaskCount } = this.state;
    return (
      <div>
        <Card tasks={tasks} />
        <Pagination totalTaskCount={totalTaskCount} />
      </div>
    );
  }
}

// const Cards = () => (
//   <div className="col-md-6">
//     <div className="row">
//       <div className="col-3">
//         <img
//           className="card-img-top"
//           src="https://uxcandy.com/~shapoval/test-task-backend/upload/user_images/5900dfd7/1508836540_1.jpg"
//           alt="Card cap"
//         />
//       </div>
//       <div className="card-body col-6">
//         <h4 className="card-title">Card title</h4>
//         <p className="card-text">
//             Some quick example text to build on the card title and make up the
//             bulk of the content.
//         </p>
//         <a href="" className="btn btn-primary">Go somewhere</a>
//       </div>
//     </div>
//     <div className="row">
//       <div className="col-3">
//         <img
//           className="card-img-top"
//           src="https://uxcandy.com/~shapoval/test-task-backend/upload/user_images/5900dfd7/1508836540_1.jpg"
//           alt="Card cap"
//         />
//       </div>
//       <div className="card-body col-6">
//         <h4 className="card-title">Card title</h4>
//         <p className="card-text">
//             Some quick example text to build on the card title and make up the
//             bulk of the content.
//         </p>
//         <a href="" className="btn btn-primary">Go somewhere</a>
//       </div>
//     </div>
//     <div className="row">
//       <div className="col-3">
//         <img
//           className="card-img-top"
//           src="https://uxcandy.com/~shapoval/test-task-backend/upload/user_images/5900dfd7/1508836540_1.jpg"
//           alt="Card cap"
//         />
//       </div>
//       <div className="card-body col-6">
//         <h4 className="card-title">Card title</h4>
//         <p className="card-text">
//             Some quick example text to build on the card title and make up the
//             bulk of the content.
//         </p>
//         <a href="" className="btn btn-primary">Go somewhere</a>
//       </div>
//     </div>
//   </div>
// );

export default Cards;

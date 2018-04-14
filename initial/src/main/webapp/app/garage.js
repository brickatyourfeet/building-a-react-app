import React from 'react';
import ReactDOM from 'react-dom';
import Vehicles from './vehicles';

require('./../styles/style.css');

class Garage extends React.Component {

  constructor() {
    super();

    this.state = {
      vehicles: [{"id":1,"name":"Pickup","make":{"name":"Nissan","id":1},"model":{"name":"Titan","id":1},"driver":{"name":"Susan","id":1}}],
    }
  }

  render() {
    const {vehicles} = this.state;

    return <div>
      <Vehicles vehicles={vehicles} />
    </div>;
  }
}

ReactDOM.render(<Garage />, document.getElementById('garage'));
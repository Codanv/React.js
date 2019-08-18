import React from 'react';
import ReactDOM from 'react-dom';

import Bike from './Bike'

ReactDOM.render(
  <Bike model="2019" engine="four-stroke engine" maxSpeed="600" newPrice="400" />,
  document.getElementById("root")
);
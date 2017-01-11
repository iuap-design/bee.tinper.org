import React from 'react';
import { render } from 'react-dom';
import routes from './routes'

import 'tinper-bee/assets/tinper-bee.css';

let root = document.getElementById('app');
render( routes, root );

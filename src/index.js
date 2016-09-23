import React from 'react';
import {render} from 'react-dom';

import Routers from './Routers.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'highlight.js/styles/atelier-seaside-dark.css';
import './main.css';


render(<Routers />,document.getElementById('root'));

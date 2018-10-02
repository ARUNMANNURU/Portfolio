import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { BrowserRouter }  from 'react-router-dom';
import AWS from 'aws-sdk';

AWS.config.update({
	accessKeyId: 'AKIAJJJS7D2NMVYOITMQ',
	secretAccessKey:'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'
});

AWS.config.region = 'us-east-1';



ReactDOM.render(
  <BrowserRouter>
	<App />
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
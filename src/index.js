import React from 'react';

//import ReactDOM from 'react-dom'; // React 17
import { createRoot } from 'react-dom/client';

import './styles/index.css';
import App from './components/App';


/* REACT 17 */
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

/* REACT 18 */
// Utilisez createRoot pour le rendu initial de votre application
createRoot(document.getElementById('root')).render(<App />);
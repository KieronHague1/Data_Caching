// src/index.js
import React from 'react'; // Import React library
import ReactDOM from 'react-dom/client'; // Import ReactDOM for rendering the React app
import App from './App'; // Import the main App component
import './index.css'; // Import the main CSS file for global styles

// Create the root element to render the React app
const root = ReactDOM.createRoot(document.getElementById('root')); // Targets the HTML element with the id 'root'
root.render(
    <React.StrictMode>
        <App /> {/* Renders the main App component wrapped in StrictMode for highlighting potential issues */}
    </React.StrictMode>
);

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Ensure this line is present

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if using TypeScript
root.render(<App />);


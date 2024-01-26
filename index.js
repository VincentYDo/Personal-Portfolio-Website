

import { createRoot } from 'react-dom/client';
import React from 'react';

document.body.innerHTML = '<div id="root"></div>';

const root = createRoot(document.getElementById('root'));
root.render(<App />);

// reactDom.render(<App />, document.getElementById('root'));
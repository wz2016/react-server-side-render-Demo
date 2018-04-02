// One idea for servicer side API render; Two times render
// Updated store twice; one initialize, second one after API request complete
// Not a good approach

// Alternative: Figure out what components would have rendered (based on URL)
// Call a 'loadData' method attached to each of those components
// wait ... detect all request are complete -> render with collected data -> send to browser

import React from 'react';
import { renderToString } from 'react-dom/server';
// import Home from '../client/components/Home';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/Routes';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';

export default (req, store) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>
    );

    return `
        <html>
            <head></head>
            <body>
                <div id="root">${content}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;

}
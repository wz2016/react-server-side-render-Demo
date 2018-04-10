import React from 'react';
// import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';

// OLD Client Render Route
// export default () => {
//     return (
//         <div>
//             <Route exact path="/" component={Home} />
//             <Route path="/users" component={UsersList} />
//         </div>
//     );
// }

export default [
 {
   ...HomePage,
   path: '/',
   exact: true
 },
 {
   ...UsersListPage,
   path: '/users',
 }
];

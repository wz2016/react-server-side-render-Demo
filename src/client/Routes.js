import React from 'react';
// import { Route } from 'react-router-dom';
import Home from './components/Home';
import UsersList, { loadData } from './components/UsersList';

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
     path: '/',
     component: Home,
     exact: true
 },
 {
     path: '/users',
     component: UsersList,
     loadData,
 }
];
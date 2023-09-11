// import React from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
// } from 'react-router-dom';

// const Routers = () => (
//   <Router>
//     <header>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Главная</Link>
//           </li>
//           <li>
//             <Link to="/about">Контакты</Link>
//           </li>
//           <li>
//             <Link to="/users">Пользователи</Link>
//           </li>
//         </ul>
//       </nav>
//     </header>

//     <main>
//       {/* <Switch> рендерит первый <Route>, совпавший с URL */}
//       <Switch>
//         <Route path="/about">
//           <About />
//         </Route>
//         <Route path="/users">
//           <Users />
//         </Route>
//         <Route path="/">
//           <Home />
//         </Route>
//       </Switch>
//     </main>
//   </Router>
// );

// const Home = () => <h2>Главная</h2>;

// const About = () => <h2>Контакты</h2>;

// const Users = () => <h2>Пользователи</h2>;


// export default Routers;
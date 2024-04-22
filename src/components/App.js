// import logo from '../logo.svg';
// import '../App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>Bonjour</h1>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'

function App() {
    return (<div>
        <Banner />
        <Cart />
        <ShoppingList />
    </div>)
}

export default App
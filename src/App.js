import './App.css';
import {BrowserRouter,Route} from "react-router-dom"
import HomePage from "./Pages/HomePage"
import Menu from "./Components/Menu"

import RegistroPage from "./Pages/RegistroPage"
import DescriptionPage from "./Pages/DescriptionPage"
import LoginPage from "./Pages/LoginPage"
import AdminPage from "./Pages/AdminPage"

function App() {
 

  return (
    <BrowserRouter>
      <Menu />
      <Route path="/" component={HomePage} exact />
      <Route path="/alta" component={RegistroPage} exact />
      <Route path="/producto/:id" component={DescriptionPage} exact />
      <Route path="/login" component={LoginPage} exact />
      <Route path="/admin" component={AdminPage} exact />

      
    </BrowserRouter>
  );
}

export default App;

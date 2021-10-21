import { Switch, Route, Link } from 'react-router-dom';
import './assets/css/base.css';
import './assets/css/style.scss';
import './assets/css/grid.css';
import './assets/css/responsive.scss';
import './assets/fonts/fontawesome-free-5.15.3/css/all.min.css'
import './App.css'
import Header from './components/Header.jsx'
import Container from './components/Container.jsx'
import Footer from './components/Footer.jsx'
import ProductItem from './pages/ProductItem.jsx';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Furniture from './pages/Furniture';
import Sofas from './pages/Sofas';

function App() {
  return (
    <div className="app">
        <ToastContainer/>
      <Switch>
        <Route exact path="/">
          <Header/>
          <Container/>
        </Route>
        <Route path="/product/:id">
          <Header/>
          <ProductItem/>
        </Route>
        <Route path="/furniture">
          <Header/>
          <Furniture/>
        </Route>
        <Route path="/coffee tables">
          <Header/>
        </Route>
        <Route path="/sofas">
          <Header/>
          <Sofas />
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;

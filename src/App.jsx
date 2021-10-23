import { Switch, Route } from 'react-router-dom';
import BackToTop from "react-back-to-top-button";
import './assets/css/base.css';
import './assets/css/style.scss';
import './assets/css/grid.css';
import './assets/css/responsive.scss';
import './assets/fonts/fontawesome-free-5.15.3/css/all.min.css'
import './App.css'

import Header from './components/Header.jsx'
import Container from './components/Container.jsx'
import Footer from './components/Footer.jsx'
import DonorLogo from './components/Container/DonorLogo';

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Furniture from './pages/Furniture';
import ProductItem from './pages/ProductItem.jsx';
import CoffeeTables from './pages/CoffeeTables';
import Sofas from './pages/Sofas';
import NotFound from './pages/NotFound';


function App() {
  return (
    <div className="app">
        <ToastContainer/>
        <Header/>
      <Switch>
        <Route exact path="/React-simen-demo">
          <Container/>
        </Route>
        <Route path="/React-simen-demo/product/:id">
          <ProductItem/>
        </Route>
        <Route path="/React-simen-demo/furniture">
          <Furniture/>
        </Route>
        <Route path="/React-simen-demo/coffee tables">
          <CoffeeTables />
        </Route>
        <Route path="/React-simen-demo/sofas">
          <Sofas />
        </Route>
        <Route path="*" component={NotFound} />
      </Switch>
      <DonorLogo/>
      <Footer/>
      <BackToTop
        showAt={100}
        speed={500}
      >
        <i className="fa fa-angle-up"/>
      </BackToTop>
    </div>
  );
}

export default App;

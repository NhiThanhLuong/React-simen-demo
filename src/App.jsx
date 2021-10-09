// import './css/base.css';
import './assets/css/base.css';
import './assets/css/style.scss';
import './assets/css/grid.css';
import './assets/css/responsive.scss';
import './assets/fonts/fontawesome-free-5.15.3/css/all.min.css'
import './App.css'
import Header from './components/Header.jsx'
import Container from './components/Container.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="app">
      <Header/>
      <Container/>
      <Footer/>
    </div>
  );
}

export default App;

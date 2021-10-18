import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="container-fluid">
          <div className="col">
            <Switch>
              <Route path="/gallery" component={Gallery} />
              <Route path="/contact" component={Contact} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
      <Footer />
    </div>

  );
}

export default App;

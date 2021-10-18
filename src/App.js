import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <section>
        <div className="container-fluid">
          <div className="row">Content</div>
        </div>
      </section>
    </div>
  );
}

export default App;

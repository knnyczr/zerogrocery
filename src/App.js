import Nav from './components/Nav'
import Products from './components/Products'
import Footer from './components/Footer'

import './scss/App.scss'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <Products />
      <Footer />
    </div>
  );
}

export default App;

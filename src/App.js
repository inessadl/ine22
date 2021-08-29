import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Intro from './components/Intro.js';
import Work from './components/Work';

function App() {
  return (
    <div className="app"> 
      <Header />

      <main>
        <Intro />
        <Work />
      </main>

      <Footer />
    </div>
  );
}

export default App;

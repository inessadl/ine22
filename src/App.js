import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Intro from './components/Intro.js';
import Career from './components/Career';
import Work from './components/Work';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Header />
      </header>
      <section className="intro">
        <Intro />
      </section>
      <section className="career">
        <Career />
      </section>
      <section className="work">
        <Work />
      </section>
      <footer className="app-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;

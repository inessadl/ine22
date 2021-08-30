import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Intro from './components/Intro.js';
import Work from './components/Work';

function App() {
  return (
    <div className="app"> 
      <Header></Header>

      <main>
        <Intro></Intro>
        <Work></Work>
      </main>

      <Footer></Footer>
    </div>
  );
}

export default App;

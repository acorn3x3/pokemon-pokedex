import './App.css';
import Header from './components/Layout/Header/Header.js';
import Main from './components/Main/Main';
import Footer from './components/Layout/Footer/Footer.js';
import background from '../src/PokemonBackground.jpg';

function App() {
  return (
    <section
      className="app"
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        background: `url(${background})`,
        minHeight: '100vh',
      }}
    >
      <Header />
      <Main />
      <Footer />
    </section>
  );
}

export default App;

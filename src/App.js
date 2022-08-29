import logo from './logo.svg';
import './App.css';
import ImageComponent from './components/ImageComponent';
import ButtonComponent from './components/ButtonComponent';

function App() {
  return (
    <div className="App">
      <ButtonComponent testo='Cliccami!'></ButtonComponent>
      <ImageComponent imgn='https://www.gabetta-architetto-monza.com/images/news/architettura-mondo-cosa-vedere.jpg' altern='Immagine struttura architettonica' />
    </div>
  );
}

export default App;

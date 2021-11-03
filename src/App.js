import './App.css';
import ImgSlide from './components/ImgSlide';
import data from './components/Data'

function App() {
  return (
     <ImgSlide slides={data} />
  );
}

export default App;

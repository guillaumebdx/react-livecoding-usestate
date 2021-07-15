import './App.css';
import Slider from "./Components/Slider"

const images = [
    {
        id: 1,
        url: 'https://source.unsplash.com/random?dog&random=1',
        category: 'dog',
    },
    {
        id: 2,
        url: 'https://source.unsplash.com/random?dog&random=2',
        category: 'dog',
    },
    {
        id: 3,
        url: 'https://source.unsplash.com/random?dog&random=3',
        category: 'dog',
    },
    {
        id: 4,
        url: 'https://source.unsplash.com/random?cat&random=4',
        category: 'cat',
    },
    {
        id: 5,
        url: 'https://source.unsplash.com/random?cat&random=5',
        category: 'cat',
    },
    {
        id: 6,
        url: 'https://source.unsplash.com/random?cat&random=6',
        category: 'cat',
    },

]

const App = () => {

  return (
      <>
        <h1>Slider</h1>
        <Slider images={images} title={'Bienvenue sur ce slider'} />
        <Slider images={images} title={'Bienvenue sur ce superbe slider'} />
      </>
  )
};

export default App;

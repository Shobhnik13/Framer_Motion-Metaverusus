
import './App.css';
import About from './Components/About';
import Explore from './Components/Explore';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';

function App() {
  return (
<div className="App bg-black overflow-hidden">
    <Navbar/>
    <Hero/>
    {/* positioning the components in relative  */}
      <div className='relative'>
        {/* writing down the comps and self closing div for rendering gradients  */}
      <About/>
        <div className='gradient-03 z-0'/>
      <Explore/>
      </div>
</div>
  );
}

export default App;


import logo from './logo.svg';

import ParticleBackground from './particlebackground';
import Vimeo from '@u-wave/react-vimeo'
import Footer from './footer'
export default function App() {
  return (
    <div className="font-body" >    
      
      <Vimeo video = "805782314" autoplay background responsive loop/>
      <header className="absolute top-0" hidden>
        <img src={logo} className="App-logo" alt="logo"/>
      </header> 
      
      <Footer/>
    </div>
  );
}
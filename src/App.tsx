
import logo from './logo.svg';

import ParticleBackground from './particlebackground';


export default function App() {
  return (
    <div className="App">
      <ParticleBackground />
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to ymg website
        </p>
      </header>
      
    </div>
  );
}
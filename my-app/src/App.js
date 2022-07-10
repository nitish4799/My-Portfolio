import Aboutme from "./components/About me/Aboutme";
import Navbar from "./components/Navbar/Navbar"
import Services from "./components/Services/Services";
import Getintouch from './components/Getintouch/Getintouch';
import Work from './components/Work/Work';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Aboutme/>
      <Services/>
      <Work/>
      <Getintouch/>
    </div>
  );
}

export default App;

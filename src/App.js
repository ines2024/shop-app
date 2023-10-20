

import './App.css';
import data from './Components/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from './Components/Navbar';
import Shoplist from './Components/Shoplist';
function App() {
  console.log(data)
  return (
    <div className="App">
     <Navbar1/>
     <Shoplist products={data}/>
    </div>
  );
}

export default App;

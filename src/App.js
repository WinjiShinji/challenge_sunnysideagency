import Nav from "./Nav";
import Footer from "./Footer";
import Landing from "./Landing";
import { DataProvider } from "./context/ResizeContext";


function App() {

  
  return (
    <div className="App">
      <DataProvider>
        <Nav />
        <Landing />
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;

import { Festival } from "./components/Festival";
import { Header } from "./components/Header";
import { Video } from "./components/Video";
import { LineUp } from "./components/LineUp";
import {Gallerys} from "./components/Gallerys";
import { Tickets } from "./components/Tickets";
import { Footer } from "./components/Footer";


function App() {
  return (
    < >
      <Header />
      <Video />
      <Festival />
      <LineUp />
      <Gallerys/>
      <Tickets/>
      <Footer/>      
    </>
  );
}

export default App;

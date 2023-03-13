import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Side__Socials from "./components/Side__Socials/Side__Socials";
import Featured__products from "./components/Home/Featured__products/Featured__products";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Side__Socials />
      <Featured__products />
    </>
  );
}

export default App;

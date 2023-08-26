import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <main className="py-3"> 
        <Container>
          <Outlet></Outlet>
        </Container>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;

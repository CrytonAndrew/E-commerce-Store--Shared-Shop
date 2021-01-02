import React from "react"
import { Container } from "react-bootstrap" // A container to move the elements away from the coners
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomeScreen from "./Screens/HomeScreen";

function App() {
  return (
    <> 
    <Header />
    <main className="py-3">
      <Container >
        <HomeScreen />
      </Container>
    </main>
    <Footer />
    </>
  );
}

export default App;

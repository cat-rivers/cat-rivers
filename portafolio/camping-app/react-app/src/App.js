import { useState, useEffect } from "react";
import { CampForm } from "./components/Campform";
import { LandingPage } from "./components/LandingPage";
import { Search } from "./components/Search";
import { Container, Col, Row } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Container>
      <div className="App">
        <header className="App-header">
          {/* <LandingPage />
          <Search /> */}
          <CampForm />
        </header>
      </div>
    </Container>
  );
}

export default App;

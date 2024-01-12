import "./App.css";
import Router from "./Config/router";

import Navbar from "./Views/Navbar";
import Footer from "./Views/Footer";
import GoToTop from "./ReUseAble/GoToTop";
function App() {
  return (
    <div className="container">
      <div className="sub-container">
        {/* NAVBAR - COMPONENT */}
        <Navbar />

        {/* ROUTER - COMPONENT */}
        <Router />
        <br />
        <br />

        <GoToTop />
        {/* FOOTER - COMPONENT */}
        <Footer />
      </div>
    </div>
  );
}

export default App;

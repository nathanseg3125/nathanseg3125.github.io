import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Components/Home.js";
import Home2 from "./Components/Home2.js";
import Paintings from "./Components/Paintings.js";
import Information from "./Components/Information.js";
import Comment from "./Components/Comments.js";
import Contact from "./Components/Contact.js";
import Help from "./Components/Help.js";
import Paintings2 from "./Components/Paintings2.js";
import Information2 from "./Components/Information2.js";
import Comments2 from "./Components/Comments2.js";
import Contact2 from "./Components/Contact2.js";
import Help2 from "./Components/Help2.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Home2" component={Home2} />
        <Route exact path="/Paintings" component={Paintings} />
        <Route exact path="/Information" component={Information} />
        <Route exact path="/Comment" component={Comment} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Help" component={Help} />
        <Route exact path="/Paintings2" component={Paintings2} />
        <Route exact path="/Information2" component={Information2} />
        <Route exact path="/Comments2" component={Comments2} />
        <Route exact path="/Contact2" component={Contact2} />
        <Route exact path="/Help2" component={Help2} />
      </BrowserRouter>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import Task1 from "./components/Task1"
import Task2 from "./components/Task2";
import Form from "./components/Form";
import Calculator from "./components/Calculator"
import Emoji from "./compositions/Emoji";
import Text from "./compositions/Text";
import Counter from "./components/Counter"
import CounterText from "./components/CounterText"
import Context from "./context/Context"
import ToDo from "./functional/ToDo";
import ToDo2 from "./functional/ToDo2";
import UseReducer from "./UseReducer";
import UseEffect from './useeffect/UseEffect'
import UseEffect2 from './useeffect/UseEffect2'
import CustomHook from "./CustomHook";
import Navbar from "./router/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./router/Home";
import About from "./router/About";
import Contact from "./router/Contact";
import React from "react";

function App() {
    const lists = [1, 2, 3, 4];
    return (
      <div>


        <Router>
            <Navbar />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>




        <CustomHook />
        <UseEffect2 />
        <UseEffect />
        <UseReducer />
      <ToDo2 />
      <ToDo />
      <Context />
        {/** never don't have a space in children body like don't keep space around {} like <Counter>{ in this case */}
      <Counter>{(count, counter) =><CounterText count = {count} counter={counter} />}</Counter>
      {/* <Counter render = {(count, counter) =><CounterText count = {count} counter={counter} />} />  use for render props*/} 
      <Task1 locale={"bn-BD"} country={"Bangladesh"} />
      <Task2 lists = {lists} />
      <Form />
      <Calculator />

      <Emoji>{({addEmoji})=><Text addEmoji={addEmoji} />}</Emoji>

      </div>
    );
}

export default App;

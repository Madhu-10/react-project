import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeLayout from './Layout/HomeLayout'
import Home from './Pages/Home';
import Contact from './Pages/Contact'
import About from './Pages/About'

function App() {
  return (
    <>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia&effect=neon|outline|emboss|shadow-multiple|Audiowide"></link>
        <BrowserRouter>
          <Routes>
            <Route element={<HomeLayout />}>
              <Route index element={<Home />}></Route>
              <Route path='/Contact' element={<Contact />}></Route>
              <Route path='/About' element={<About />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;

import './App.css';
import ButtonAppBar from './components/navbar/navbar';
import dashboard from './components/dashboard/dashboard';
import cards from './components/cards/cards';
import settings from './components/settings/settings';
import reports from './components/reports/reports';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {
  return (
    <Router>
      <div className="App">
      <ButtonAppBar></ButtonAppBar>
      <cards></cards>
      <Routes>
        <Route path="/dashbaord" element={<dashbaord/>}></Route>
        <Route path="/cards" element={<cards/>}></Route>
        <Route path="/settings" element={<settings/>}></Route>
        <Route path="/reports" element={<reports/>}></Route>
      </Routes>
    </div>
    </Router>
    
  );
}

export default App;

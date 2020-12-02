import Card from "./components/employee/card";
import Nav from "./components/header/nav";
import SearchBar from "./components/search/searchBar";
import Label from "./components/table/label";
import './App.css';


//This is what shows on the page
function App() {
  return (
    <div className="App">
      <Nav />
      <SearchBar />
      <Label />
      <Card />
    </div>
  );
}

export default App;

import './App.css'
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import CartWidget from './components/CartWidget/CartWidget'

function App() {

return (
  <>

    <NavBar/>
    
    <ItemListContainer greeting={"Bievenidos a Cafe&Aroma"}/>


  </>
)
}


export default App
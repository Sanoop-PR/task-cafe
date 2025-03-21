import './App.css'
import { Routes, Route } from "react-router";
import Home from './pages/Home';
import AllMenuList from './pages/AllMenuList';
import CreateMenu from './pages/CreateMenu';
import AllMenuItemsList from './pages/AllMenuItemsList';
import CreateItem from './pages/CreateItem';
import EditMenu from './pages/EditMenu';
import EditItem from './pages/EditItem';
import NavBar from './components/NavBar';

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-menu" element={<AllMenuList />} />
        <Route path="/create-menu" element={<CreateMenu />} />
        <Route path="/item-list/:title" element={<AllMenuItemsList />} />
        <Route path="/create-item/:title" element={<CreateItem />} />
        <Route path="/edit-menu/:title" element={<EditMenu />} />
        <Route path="/edit-item/:id" element={<EditItem />} />
      </Routes>
    </>
  )
}

export default App

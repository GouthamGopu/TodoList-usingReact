import './App.css';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import Home from './components/Home';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<><Navbar /><Home/></>,
    },
    {
      path:'/todos',
      element:<><Navbar /><TodoList/></>,
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

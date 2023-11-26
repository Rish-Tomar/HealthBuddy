import logo from './logo.svg';
import './App.css';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';

const router =createBrowserRouter([
  {
    path:"/",
    element:<HomePage/>
  },
  // {
  //   path:"/profile",
  //   element:<ProfilePage/>
  // }
])


function App() {
  return (
    <div className="App">
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;

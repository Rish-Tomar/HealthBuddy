import logo from './logo.svg';
import './App.css';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Profile from './pages/Profile';
import NearbyDoctors from './pages/NearbyDoctors';

//All Routes of the Apps are defined below 
const router =createBrowserRouter([
  {
    path:"/",
    element:<HomePage/>
  },
  {
    path:"/profile",
    element:<Profile/>
  },
  {
    path:'/nearbydoctors',
    element:<NearbyDoctors/>
  }
])

// entrypoint function to App handling all Rendering
function App() {
  return (
    <div className="App">
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;

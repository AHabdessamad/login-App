import './App.css';
import {Login, Register, Profile, Password, Recovery, Reset, Notfound} from './imports';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';


// Root Routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/reset',
    element: <Reset />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/password',
    element: <Password />
  },
  {
    path: '/recovery',
    element: <Recovery />
  },
  {
  path: '*',
  element: <Notfound />
  }
])

function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;

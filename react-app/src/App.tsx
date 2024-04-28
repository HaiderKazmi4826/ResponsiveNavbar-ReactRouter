import React from 'react'
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Link,
  Outlet,
  NavLink,
  createRoutesFromElements,
  useParams,
} from "react-router-dom";
import "./App.css";
import AppLayout from './components/AppLayout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='blog' element={<Blog />} />
    </Route>,
  ),
);


const App = () => {
  return <RouterProvider router={router} />;
}

export default App
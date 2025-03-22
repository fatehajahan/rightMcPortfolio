import './App.css';
import CursorHover from './components/CursorHover/CursorHover';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Archives from './pages/Archives/Archives';
import Sidebar from './components/Sidebar/Sidebar';

const Layout = () => {
  return (
    <div >
      {/* <CursorHover /> */}
      <Sidebar/>
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />} />
      <Route path='/archiveProjects' element={<Archives />} />
    </>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

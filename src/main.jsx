import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from './components/Layout/Main';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Appliedjobs from './components/Appliedjobs/Appliedjobs';
import Blog from './components/Blog/Blog';
import Error from './components/Error/Error';
import Header from './components/Header/Header';
import JobDetails from './components/JobDetails/JobDetails';
import Jobs from './components/Jobs/Jobs';
import SingleJobDetails from './components/SingleJobDetails/SingleJobDetails';
import AppliedJobDetails from './components/AppliedJobDetails/AppliedJobDetails';
import ActiveLink from './components/ActiveLink/ActiveLink';
// import Footer from './components/Footer/Footer';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/category.json')
      },
      {
        path: 'header',
        element: <Header></Header>
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'appliedjobs',
        element: <Appliedjobs></Appliedjobs>
      },
      {
        path: 'jobs',
        element: <Jobs></Jobs>
      },
      {
        path: 'jobDetails/:id',
        element: <JobDetails></JobDetails>
      },
      {
        path: 'singlejobdetails',
        element: <SingleJobDetails></SingleJobDetails>
      },
      {
        path: 'appliedjobdetails',
        element: <AppliedJobDetails></AppliedJobDetails>
      },
      {
        path: 'activelink',
        element: <ActiveLink></ActiveLink>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      // {
      //   path: 'footer',
      //   element: <Footer></Footer>
      // },
      {
        path: '*',
        element: <Error></Error>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

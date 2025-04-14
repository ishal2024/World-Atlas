import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import   {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Country from './Components/Country.jsx'
import FetchApi from './Api/Fetch.js'
import Contact from './Components/Contact.jsx'
import Home from './Components/Home.jsx'
import CountryDetail from './Components/CountryDetail.jsx'
import About from './Components/About.jsx'

const router = createBrowserRouter([{
  path : '/',
  element : <App />,
  children : [
    {path:'',element : <Home />},
    {path : 'country' , element : <Country /> , loader : FetchApi },
    {path:'contact',element : <Contact />},
    {path: '/about' , element : <About />},
    {path : 'country/:one', element : <CountryDetail/> , loader : FetchApi}
  ]
}])

createRoot(document.getElementById('root')).render(
<RouterProvider router={router}>
  <App />
</RouterProvider>
 
)

//import CSS
import './styles/App.css'

//import module
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom"

//import pages & layout
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import Country from './pages/Country';
import PageNotFound from './pages/PageNotFound';
import CountryLayout from './layout/CountryLayout';

//Main code
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} >
      <Route index element={<Home />} />
      <Route path='/country' element={<CountryLayout />}>
        <Route path=':name' element={<Country />}/>
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

function App() {
  

  return (
    <RouterProvider router={router} />
  )
}

export default App

/*
  async function awaitHandler(){
    try {
        const data  = await promise;
        return [data,null]
    }
    catch(error){
      console.error(error);
      return [null,error] 
    }
  } 

   <span>{crypto.randomUUID()}</span>
*/

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import { LayoutOne } from './Layouts/LayoutOne'
import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { Blog } from './Pages/Blog'
import { Help } from './Pages/Help'
import { Service } from './Pages/Service'
import { LayoutTwo } from './Layouts/LayoutTwo'
import { LayoutThree } from './Layouts/LayoutThree'
import { Contact } from './Pages/Contact'
import { Review } from './Pages/Review'
import { Notfound } from './Pages/Notfound'

function App() {
  const route= createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<LayoutOne/>}>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
        
      </Route>
        <Route path='/layoutTwo' element={<LayoutTwo/>}>
        <Route index element={<Service/>}/>
        <Route path='/layoutTwo/help' element={<Help/>}/>
      </Route>

      <Route path='/layoutThree' element={<LayoutThree/>}>
        <Route index element={<Contact/>}/>
        <Route path='/layoutThree/review' element={<Review/>}/>
      </Route>
      <Route path='*' element={<Notfound/>}/>

      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={route}/>
    </>
  )
}

export default App

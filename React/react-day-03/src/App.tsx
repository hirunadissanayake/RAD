// ES7+ React/Redux/React-Native snippets
// install this extention and use snippets
// rfc -> for create component
// import React, { useEffect, useState } from "react"

// export default function App() {
//   // useEffect(function, [])
//   const [count, setCount] = useState(0)
//   const [value, setValue] = useState(0)

//   // for mounting and every re-renders
//   // useEffect(() => {
//   //   console.log("Hello")
//   // })

//   // only run mounting (empty depedancy array)
//   // useEffect(() => {
//   //   console.log("Hello")
//   // }, [])

//   // only run -> mounting and value varible changes
//   useEffect(() => {
//     console.log("Hello")
//   }, [value])

//   // useEffect(()=> {}, [])
//   // useEffect(function () {}, [])

//   // console.log("Hi")

//   return (
//     <div>
//       <h4>{count}</h4>
//       <button onClick={() => setCount((prev) => prev + 1)}>+</button>
//       <button onClick={() => setCount((prev) => prev - 1)}>-</button>
//       <button onClick={() => setValue((prev) => prev - 1)}>Change value</button>
//     </div>
//   )
// }

// ----------------- Context ------------------------------
// import { useState, createContext } from "react"
// import CompoA from "./components/CompoA"

// export const DataContext = createContext<any>(null)

// const App = () => {
//   const [data, setData] = useState("Initial data")

//   return (
//     <>
//       <h1>Component APP</h1>
//       <h2>{data}</h2>
//       <DataContext.Provider value={{ data, setData }}>
//         {/* <DataContext.Provider value={data}> */}
//         <CompoA dataProp={data} />
//       </DataContext.Provider>
//     </>
//   )
// }

// export default App

// ------------------------------------------------
// import { BrowserRouter, Routes, Route } from "react-router-dom"

import {BrowserRouter, Routes, Route} from "react-router-dom"

import Deafault from "./pages/Default"
import Home from "./pages/Home"
import About from "./pages/About"
import Header from "./components/Header"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Layout from "./components/Layout"

export default function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        {/* with layout */}
        <Route path="/" element={<Layout />}>

          <Route index element={<Deafault />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          
        </Route>

        {/* no layout */}
        <Route path="/login" element={<Login />} />

        {/* <Route path="/contact/me" element={<About />} /> */}
        <Route path="/contact/:id" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}
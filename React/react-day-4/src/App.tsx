// ----------- USE REF ----------------------
// import { useRef, useEffect } from "react"

// const App = () => {
//   const ref = useRef(0)

//   console.log(ref)
//   console.log(ref.current) // value is here

//   useEffect(() => {
//     console.log("Component is re-rendered")
//   })

//   const handleClick = () => {
//     ref.current += 1 //  ref.current =  ref.current + 1
//     console.log(ref.current)
//   }

//   return (
//     <div>
//       <button onClick={handleClick}>Click</button>
//     </div>
//   )
// }

// export default App

// import { useRef, useEffect } from "react"

// const App = () => {
//   const inputRef = useRef<any>(null)

//   console.log(inputRef)

//   const handleClick = () => {
//     inputRef?.current.focus()

//     if (inputRef.current) {
//       inputRef.current.style.backgroundColor = "red"
//     }
//   }

//   return (
//     <div>
//       <input ref={inputRef} />
//       <button onClick={handleClick}>Click</button>
//     </div>
//   )
// }

// export default App

// // --------------------- useMemo ------------------------
// import { useState, useMemo } from "react"

// const inputHandler = (value: any) => {
//   let sum = 0
//   for (let i = 0; i < 1000000000; i++) {
//     sum++
//   }
//   return value
// }

// const App = () => {
//   const [name, setName] = useState("")
//   const [email, setEmail] = useState("")

//   // const data =   inputHandler(name)
//   const data = useMemo(() => {
//     inputHandler(name)
//   }, [name])

//   console.log("rendered")

//   return (
//     <div>
//       <input
//         placeholder="name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         placeholder="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <p>{data}</p>
//     </div>
//   )
// }

// export default App

// --------------------- useCallBack ------------------------
// import { useState, useEffect, useCallback } from "react"

// const App = () => {
//   const [name, setName] = useState("")
//   const [email, setEmail] = useState("")
//   const [result, setResult] = useState("")

//   // component re-render -> function re-create
//   // const myFunction = () => {
//   //   console.log("My Function is running")
//   //   return "Hello"
//   // }

//   const myFunction = useCallback(() => {
//     console.log("My Function is running")
//     return "Hello"
//   }, [email])

//   useEffect(() => {
//     console.log("Use Effect running")
//     setResult(myFunction())
//   }, [myFunction])

//   console.log("component re-rendered")

//   return (
//     <div>
//       <input
//         placeholder="name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         placeholder="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <p>{result}</p>
//     </div>
//   )
// }

// export default App

// ------------------------- useReducer ------------------------

// {
// id:""
// name:""
// email:""
// age:0
// }
import { useReducer } from "react"

// return {
//   id: action.data,
//   name: state.name,
//   email: state.email,
//   age: state.age
// }

const reducer = (state: any, action: any) => {
  console.log("action : ", action)
  switch (action.type) {
    case "ID":
      return { ...state, id: action.data }
    case "NAME":
      return { ...state, name: action.data }
    case "EMAIL":
      return { ...state, email: action.data }
    case "AGE":
      return { ...state, age: action.data }
    default:
      return state
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    id: "",
    name: "",
    email: "",
    age: 0
  })

  console.log(state)

  return (
    <div>
      <input
        placeholder="ID"
        value={state.id}
        onChange={(e) => {
          dispatch({ type: "ID", data: e.target.value })
        }}
      />
      <input
        placeholder="Name"
        value={state.name}
        onChange={(e) => {
          dispatch({ type: "NAME", data: e.target.value })
        }}
      />
      <input
        placeholder="Email"
        value={state.email}
        onChange={(e) => dispatch({ type: "EMAIL", data: e.target.value })}
      />
      <input
        placeholder="Age"
        value={state.age}
        onChange={(e) => dispatch({ type: "AGE", data: e.target.value })}
      />
    </div>
  )
}

export default App
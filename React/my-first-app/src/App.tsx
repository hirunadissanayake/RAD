// import UserDetail from "./components/UserDetail"; 

// const dataList = [
//   {
//   name: "Hiruna",
//   age: 23,
//   isAdmin: false,
//   email: "hiruna.com" 
//   },
//   {
//     name: "ABC",
//     age: 23,
//     isAdmin: true, 
//   },
//   {
//     name: "XYZ",
//     age: 23,
//     isAdmin: false,
//   },
//   {
//     name: "PQR",
//     age: 23,
//     isAdmin: false,
//   }
// ]
// const App =()=> {
//   return (
//     <>
//       <h1>User Detail List</h1>
//       {/* <hr />
//       <UserDetail name="Hiruna" age={23} email="hiruna.com" isAdmin={true}/>
//       <UserDetail name="ABC" age={23}  isAdmin={false}/> */}

//       <hr />
//       {/* const newList = dataList.forEach */}
      
//       {
//         dataList.map((item, index) => {
//           return <UserDetail key={index} name={item.name} age={item.age} email={item.email} isAdmin={item.isAdmin}/>
//         })
//       }
      
//     </>
//   );
// }

// export default App


// //click event 
// const App = () =>{
//   const handleClick = (e:any) => {
//     console.log("Clicked")
//     e.targetContent = "Ouch"

//   }


//   return (
//     <>
//       <button onClick={handleClick}>Click Me</button>
//     </>
//   )

// }
// export default App

// const App = () => {
  
//   let count: number = 0
  
//   const incriment = () => {
//     count++
//   }
//   const decriment = () => {
//     count--
//   }

//   const reset = () => {
//     count = 0
//   }

//   return (
//     <>
//       <h1>Count : </h1>
//       <div>
//       <button onClick={() => reset}>Reset</button>
//       <button onClick={() => decriment}>-</button>
//       <button onClick={() => incriment}>+</button>
//       </div>
//     </>
//   );
// };

// export default App;

// import { useState } from "react";

// const App = () => {
  
//   //const count: number = 0
//   let [count, setCount] = useState(0)
  
//   const incriment = () => {
//     setCount(count + 1)
//   }
//   const decriment = () => {
//     setCount(count - 1)
//   }

//   const reset = () => {
//     setCount(0)
//   }

//   return (
//     <>
//       <h1>Count : {count} </h1>
//       <div>
//       <button onClick={() => reset()}>Reset</button>
//       <button onClick={() => decriment()}>-</button>
//       <button onClick={() => incriment()}>+</button>
//       </div>
//     </>
//   );
// };

// export default App;

import { useState } from "react";

const App = () => {
  const [name, setName] = useState<string>("")
  const [age, setAge] = useState<number>(0)
  const [email, setEmail] = useState<string>("")

  return (
    <div className="w-full bg-yellow-100
"> 
      <h1>Name: {name},
      Age: {age},
      Email: {email}
      </h1>
      <input value = {name} onChange={(e) => setName(e.target.value)} type = "text" placeholder="name"/>
      <input value = {age} onChange={(e) => setAge(Number(e.target.value))} type = "number" placeholder="age"/>
      <input value = {email} onChange={(e) => setEmail(e.target.value)} type = "text" placeholder="email"/>
      <button>Save</button>
    </div>
  );
};

export default App
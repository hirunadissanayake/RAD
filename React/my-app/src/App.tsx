import DetailsCard from "./components/Details"


const App = () => {
  let name = "shamodha"

  // jsx: JavaScript xml
  return (
    <>
      <DetailsCard>
        <ul>
          <li>Java</li>
          <li>Node</li>
          <li>React</li>
        </ul>
      </DetailsCard>
      <DetailsCard name={"hello"} />
      <DetailsCard />
      <h1
        style={{
          backgroundColor: "#000"
        }}
      >
        Hello, React
      </h1>
      <h2 className="test">This is my web application</h2>
      <h2 className="test">{name}</h2>
      <h3>Hi Hi</h3>
    </>
  )
}

export default App
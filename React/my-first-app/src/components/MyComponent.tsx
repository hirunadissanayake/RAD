const MyComponent = (prop:any) => {
    
    const name = prop

    return (
    <>
    <h1>MyComponent</h1>
    <h2>This is my first component</h2>
    {prop.children}
    <hr />
    {/* <h1>Hello</h1>
    <h2>this is my second component</h2> */}

    <h1>{prop.age}</h1>
    <h1>{prop.email}</h1>
    
    
    </>
    )
}

export default MyComponent
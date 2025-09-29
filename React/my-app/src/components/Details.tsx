const DetailsCard = (props: any) => {
  return (
    <div>
      <h1>This is detail component</h1>
      {props.children}
      <h1>{props.name}</h1>
    </div>
  )
}

export default DetailsCard
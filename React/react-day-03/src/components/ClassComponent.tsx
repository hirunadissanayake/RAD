import { Component } from "react"

export class ClassComponent extends Component {
  componentDidMount() {
    console.log("Component mounting catch here")
  }

  componentDidUpdate(prevProps: any, prevState: any, snapshot: any): void {
    console.log(prevProps, prevProps)
  }

  componentWillUnmount() {
    console.log("removing component catch here")
  }

  render() {
    return (
      <div>
        <h1>I'm Class Component</h1>
      </div>
    )
  }
}
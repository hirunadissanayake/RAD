import { Component, type ReactNode } from "react";

export class ClassComponenet extends Component{
    componentDidMount() {
        console.log("component mounting catch here")
    }

    // componentDidUpdate(prevPros, prevState, snapshot): void {}

    componentWillUnmount() {
        console.log("removing component catch here")
    }

    
}
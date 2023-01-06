import React from "react";

class ErrorBoundary extends React.Component {
    constructor (props) {
        super();
        this.state = {
            hasError: false
        }
    }

componentDidCatch (error, info) {
    this.setState({
        hasError : true
    })
}


render () {
   return this.hasError ? <h1>Oooops. That's not good</h1> : this.props.children
}


}


export default ErrorBoundary
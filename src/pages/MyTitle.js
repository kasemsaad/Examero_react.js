import React from "react";
class MyTitle extends React.Component{

    render(){

        return(<>
        <h1 className={`text-center text-${this.props.textColor}`}> {this.props.test}</h1>
        </>)
    }
}
export default MyTitle
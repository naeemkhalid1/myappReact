// import React from "react";
import React,{Component} from "react";

// const componentProps=(props)=>{
//         return <h1>Hello {props.name}</h1>;
//     }
class ComponentProps extends Component{
    getval(val)
    {
        return <h1>this is Will{val}</h1>
    }

render(){
    return(
        <div>
            <h1>Hello {this.getval(1)} </h1>
        </div>
    )
}



}

export default ComponentProps;

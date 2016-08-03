import React,{Component} from 'react';

//es6����Counter��
export default class Counter extends Component{
   constructor(props){
       super(props);
       this.state ={ counter : 0};
       this.interval = setInterval(() => this.tick(),1000);
   }
    tick(){
        this.setState({
            counter : this.state.counter + this.props.increment
        });
    }
    componentWillUnmount(){
        clearInterVal(this.interval);
    }
    render(){
        return(
            <h1 style={{color: this.props.color}}>
                Counter ({this.props.increment}): {this.state.counter}
            </h1>
        );
    }
}


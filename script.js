const  el =  React.createElement

function Button(props){
  return el('button',{onClick:props.handleClick},props.name)
}

class Counter extends React.Component{

  state= {
    num: 0
  }

  handleIncrement = () =>{
    this.setState({
      num: this.state.num + 1
    })
  }

   handleDecrement = () =>{
    this.setState({
      num: this.state.num - 1
    })
  }

  render(){
    return el('div',null,el(Button,{handleClick:this.handleIncrement,name:'Increment'},null),
                          el(Button,{handleClick:this.handleDecrement,name:'Decrement'},null),
                             el('p',null,this.state.num),
                           )
  }
}


ReactDOM.render(el(Counter,null,null),document.querySelector('#root'))

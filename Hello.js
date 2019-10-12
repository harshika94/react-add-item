import React,{Component} from 'react';


class Hello extends Component{
  constructor(props){
      super(props);
      this.state={
        items:[],
        value:''
      }
      this.value=""
      this.myRef = React.createRef();
  }
  handleChange = (e) =>{
    this.setState({
      value:e.target.value
    })
  }
  addItem = () =>{
      console.log(this.state.value);
      let items = [...this.state.items]
      this.state.items.push(this.state.value);
      this.setState({
        items:this.state.items,value:''},console.log(this.state.items))
  }
  render(){
    return(
      <React.Fragment>
        <div>Add your Shopping Items here:-</div>
        <input type="text" onChange={this.handleChange} value={this.state.value}/>
        <button onClick={this.addItem}>Add Items</button>
        <div>
          <ul>
            {this.state.items.map((item,i)=>{
              return <li id={i}>{item}</li>
            })}
          </ul>
        </div>
      </React.Fragment>
    )
        
  }
}


export default Hello;
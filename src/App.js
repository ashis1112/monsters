import logo from './logo.svg';
import './App.css';
import react,{Component} from 'react'
import Cardlist from './component/card-list/Cardlist' 
import Searchbox from './component/searchbox/Searchbox'

class App extends Component{
  constructor(){
    super()

    this.state={
      monsters:[],
      searchfield:''
    }

  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(users=>this.setState({monsters:users}))
    .catch(err=>console.log(err)) 
  }
  
  render(){
    const {monsters,searchfield}=this.state
    const filtermons=monsters.filter((x)=>
      x.name.toLowerCase().includes(searchfield.toLowerCase()) 
    )
    return (
      <div className="App">
        <Searchbox handlechange={(e)=>this.setState({searchfield:e.target.value})} />
        <Cardlist monsters={filtermons} />
  
      </div>
    );
  }

}

export default App;

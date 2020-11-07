import React, {Component} from 'react';
import axios from 'axios';
// import { render } from 'react-dom';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import './App.css';

// const state = {
//     robots: robots,
//     searchfield:''
// }
class App extends Component {
    constructor(){
        super()
        this.state = {
            robots:[],
            searchfield:''
        }
    }

componentDidMount(){
       axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
                return response.data;
        })
        .then(users => {

            this.setState({robots:users})
        })
    }

    onSearchChange=(event)=>{
            this.setState({searchfield:event.target.value})       
        }

    render(){
         // filter the elements 
         const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())      
        })
        
        if(!robots.length){
            return <h1>Loading...</h1>
        }else{
    return (
        <div className='tc '>
            <h1 className='f1'>RobotFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
            <Cardlist robots={filteredRobots} />
        </Scroll>
        </div>
    );
        }
    }
}

export default App;

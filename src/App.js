import React, {useState,useEffect} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';
import Scroll from './Scroll';



function App(){
	/*constructor(){
		super()
		this.state = {
			 robots: [],
             searchfield: ''
		}
	}
	componentDidMount(){
		fetch('http://jsonplaceholder.typicode.com/users')
		.then(responce=>{
			return responce.json();
		})
		.then(users=>{
			this.setState({robots: users})
		})
		
	}*/
	useEffect(()=>{
		fetch('http://jsonplaceholder.typicode.com/users')
		.then(responce=>responce.json())
		.then(users=>{setRobots(users)})
	},[])

	const [robots,setRobots] = useState([])
	const [searchfield, setSearchfield] = useState('')
	
	const onsearchchange = (event) =>{
		setSearchfield(event.target.value)
	}
	const filteredRobots=robots.filter(robots=>{
	return robots.name.toLowerCase().includes(searchfield.toLowerCase())
	})
	    
	return(
		<div className='tc'>
		  <h1>RoboFriends</h1>
		  <SearchBox searchchange={onsearchchange} />
          <Scroll>
             <CardList robots={filteredRobots} />
		  </Scroll>
		</div>
		);
    }


export default App;
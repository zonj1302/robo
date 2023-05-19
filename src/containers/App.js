import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';

function App() {
    const [ searchField, setSearchField ] = useState("");
    const [ data, setData ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(detail => {
                setData(detail);
                setSearchField(detail);
                setIsLoading(false);
            })
            .catch(error => {
                console.log("Error loading data", error);
                setIsLoading(false);
            })
    }, []);

    const onSearchChange = (event) => {
        const searchValue = event.target.value;
        const filteredRobots = data.filter(robo => (
            robo.name.toLowerCase().includes(searchValue.toLocaleLowerCase())
        ))
        setSearchField(filteredRobots);
    }

  return (
    <div className="tc">
        <h1 className="f1 tracked">RoboFriends</h1>
        <SearchBox searchChange={ onSearchChange } />
        {isLoading ? 
            <h2 className="f1 tracked">Loading</h2>
        : 
            <CardList robots={ searchField }/>
        }
    </div>
  );
}

export default App;

import React, {useState, useEffect} from 'react';
import Nav from '../header/nav';
import Card from '../employee/card';
import SearchBar from '../search/searchBar';
import Label from '../table/label';
import API from '../../utils/API';





function Main() {
    //Set initial state
    const [users,setUsers] = useState([])
    const [filteredUsers,setFilteredUsers] = useState([])

    useEffect(() => {
        console.log("use effect running");
        API.getUsers()
        .then (response => {
            console.log(response);
            setUsers(response.data.results);
            setFilteredUsers(response.data.results);
        })
        
    }, [])


    //Handles the Sorting
    const handleSortClick = heading => {
        const compare = (a,b) => {
            // console.log(b[heading]);
            return b[heading].first.localeCompare(a[heading].first)
        }
        const sortedUsers = filteredUsers.sort(compare)
        let newUsers = [...sortedUsers]
        console.log(sortedUsers);
        setFilteredUsers(newUsers)
        
    }
    //Handles the Filte For last name
    const handleSearchChange = event => {

        let filteredUsers = users.filter(user => {
            return user.name.last.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1;
        })

       
        setFilteredUsers([...filteredUsers])
    }


    return (
    
        <div>
            <Nav />
            <SearchBar handleSearchChange={handleSearchChange}/>
            <Label handleSortClick={handleSortClick} /> 
            <div className="container">
                {filteredUsers.map(user => {
                    return(
                        <Card user={user} />
                    )
                })}
           
            </div>
        </div>
    )
}

export default Main

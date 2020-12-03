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
        API.getUsers()
        .then (response => {
            console.log(response);
            setUsers(response.data.results);
            setFilteredUsers(response.data.results);
        })
        
    }, [])

    const handleSortClick = heading => {
        const compare = (a,b) => {
            console.log(b[heading]);
            return b[heading].first.localeCompare(a[heading].first)
        }
        const sortedUsers = filteredUsers.sort(compare)
        console.log(sortedUsers);
        setFilteredUsers(sortedUsers)
    }
    return (
    
        <div>
            <Nav />
            <SearchBar />
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

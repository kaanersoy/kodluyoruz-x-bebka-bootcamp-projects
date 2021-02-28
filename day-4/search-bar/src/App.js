import './App.scss';
import './focus.css';
import { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  function fetchUsers() {
    fetch('https://randomuser.me/api/?results=100')
      .then((res) => res.json())
      .then((res) => {
        setUsers(res.results);
        setFilteredUsers(res.results);
      });
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  function filterUsers(id) {
    const filteredUsers = users.filter((user) => user.id.value !== id);
    setUsers(filteredUsers);
  }

  function makeSearch(e) {
    const text = e.target.value.toLowerCase();
    if (text.length > 3) {
      setIsSearching(true);
      const filteredUsers = users.filter((usr) => {
        const username = usr.name.first + usr.name.last;
        if (username.toLowerCase().includes(text)) return usr;
      });
      setFilteredUsers(filteredUsers);
    } else {
      setIsSearching(false);
    }
  }

  return (
    <div className="App">
      <h1>Contacts</h1>
      <div className="search-box">
        <input
          onChange={(e) => {
            makeSearch(e);
          }}
          type="text"
          name="search-users"
          id="search-users"
          required
        />
        <label htmlFor="search-users" id="placeholder">
          Search
        </label>
        <span className="border-animation"></span>
        <span className="border-grey"></span>
      </div>
      <div className="users">
        {users && !isSearching
          ? users.map((user) => (
              <div className="card-container" key={Math.random() * 11525}>
                <div className="col">
                  <img src={user.picture.large} alt="" />
                </div>
                <div className="col">
                  <h3>{user.name.first + ' ' + user.name.last}</h3>
                  <p>Description</p>
                </div>
                <button onClick={() => filterUsers(user.id.value)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#161616"
                  >
                    <path d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z" />
                  </svg>
                </button>
              </div>
            ))
          : null}

        {users && isSearching
          ? filteredUsers.map((user) => (
              <div className="card-container" key={Math.random() * 11525}>
                <div className="col">
                  <img src={user.picture.large} alt="" />
                </div>
                <div className="col">
                  <h3>{user.name.first + ' ' + user.name.last}</h3>
                  <p>Description</p>
                </div>
                <button onClick={() => filterUsers(user.id.value)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#161616"
                  >
                    <path d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z" />
                  </svg>
                </button>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default App;

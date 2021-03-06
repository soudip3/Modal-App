import './App.css';
import AddUser from './Components/User/AddUser'
import React, {useState, Fragment} from 'react'
import ShowUser from './Components/User/ShowUser'
let dummy_data = []

function App() {
  const [data,setData] = useState(dummy_data)
  const onAddUser = (add_data) => {
    setData((prevData) => {
      return [...prevData,add_data]
    })
  }
  return (
    <Fragment className="App">
      <AddUser addUser={onAddUser}></AddUser>
      {data.length!==0 && <ShowUser users={data}></ShowUser>}
    </Fragment>
  );
}

export default App;

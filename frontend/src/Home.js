import {useState, useEffect} from "react"
import Header from "./components/Header";
import List from "./components/List";
import Modal from "./components/Modal";
import Loader from "./components/Loader";
import NoUser from "./components/NoUser";
import axios from "axios"

function App() {
  const [users, setUsers] = useState([]);
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState([]);
  const [curUser, setCurUser] = useState(null);
  const [query, setQuery] = useState({search: '', field: 'Username'});

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get(`${process.env.REACT_APP_API}/users`);
        setAllData(response);
      } catch (error) {
        setAllData([])
        console.error(error.message);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  useEffect(() => {
    console.log(query);
    if(query.search === ''){
      setUsers(allData);
      return;
    } 
    const tmp = allData.filter((item) => item[query.field].includes(query.search));
    setUsers(tmp);
  }, [query, allData]);

  return (
    <div className='w-full min-h-screen'>
      <Header query={query} setQuery={setQuery} />
      {
        loading ? <Loader />
        : (users.length === 0 ? <NoUser/> : <List users={users} setCurUser={setCurUser}/>)
      }
      {curUser && <Modal curUser={curUser} setCurUser={setCurUser} />}
    </div>
  );
}

export default App;

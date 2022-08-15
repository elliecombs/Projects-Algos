import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Update from './components/Update';
import { useEffect, useState} from 'react';
import axios from 'axios';
import SafariList from './components/SafariList';
import Form from './components/Form';
import Show from './components/Show';

function App() {
  const [loaded, setLoaded] = useState(false); 
  const [errors, setErrors] = useState([]);
  const [safariList, setSafariList] = useState([]);
  
  //Get Safaris List
  useEffect(()=>{
      axios.get("http://localhost:8000/api/safari")
      .then((res)=>{
        console.log('All the safaris', res);
        setSafariList(res.data);
        setLoaded(true);
      })
      .catch((err)=>{
          console.log(err);
      })
  }, []);
  
  //Delete Button & Remove from Dom
  const removeFromDom = id => {
      setSafariList(safariList.filter(SafariList => SafariList._id !== id));
  }

  return (
  <BrowserRouter>
    <div className="App">
      <Routes>
                    {/* //User sees these routes!!! */}
            {/* //Home Route */}
            <Route path='/' element={loaded && <SafariList safariList={SafariList} removeFromDom={removeFromDom} setSafariList={setSafariList} />} 
            />
            {/* Update Route */}
            <Route path='/safari/update/:id' element={<Update setSafariList={setSafariList}/>} /> 
            {/* Add or Create Route */}
            <Route path='/safari/create' element={ <Form initialName = "" errors = {errors} setSafariList = {setSafariList} safariList = {safariList} setErrors = {setErrors} />} />
            {/* Show Route */}
            <Route path='/safari/show/:id' element={<Show />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;

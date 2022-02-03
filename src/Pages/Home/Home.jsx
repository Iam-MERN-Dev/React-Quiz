import { Button, MenuItem, TextField } from '@material-ui/core';
import { useNavigate }from 'react-router-dom';
import React,{ useState } from 'react';
import Category, { } from "../../Data/Categories.jsx"
import "./Home.css"
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage.jsx';

const Home = ({ name , setName ,fetchQuestions}) => {
  let navigate = useNavigate()
  const [category , setCategory] = useState("");
  const [difficulty, setDiffyculty] = useState("")
  const [error , setError ] = useState(false);

  const handleSubmit =( ) => {
    if (!category ||!difficulty||!name) {
      setError(true)
      return;
    }
    else {
       setError(false)
       fetchQuestions(category, difficulty)
       navigate("/quiz")
    }
  }

  return (
    <div className='content'>
       <div className='settings'>
         <span style={{ fontSize: 30 }}>Quiz Setings</span>
         <div className='settings_select'>
          {error && <ErrorMessage>Please Fill all the feilds </ErrorMessage>}
            <TextField 
             style={{ marginBottom: 25 }}
             label="Enter Your Name "
             variant="outlined"
             onChange={(e)=> setName(e.target.value)}
             value={name} 
            />
            <TextField 
             select
             label='Select Category'
             variant="outlined"
             style={{ marginBottom: 30 }}
             value={category}
             onChange={(e)=> setCategory(e.target.value)}
            >
              {
                Category.map((cat) => (
                  <MenuItem key={cat.category} value={cat.value}>
                    {cat.category}
                  </MenuItem>  
                ))
              }
            </TextField>
            <TextField 
             select
             label='Select Category'
             variant="outlined"
             style={{ marginBottom: 30 }}
             onChange={(e)=> setDiffyculty(e.target.value)}
             value={difficulty}
            >
              <MenuItem key="Easy" value="easy">Easy</MenuItem>
              <MenuItem key="Medium" value="medium">Medium</MenuItem>
              <MenuItem key="Hard" value="hard">Hard</MenuItem>
            </TextField>
            <Button variant='contained' color="primary" size='large' onClick={handleSubmit}>Start Quiz</Button>
         </div>
       </div>
       <img src='/quiz.svg' className='banner' alt='quiz img'></img>
    </div>
  );
}

export default Home;

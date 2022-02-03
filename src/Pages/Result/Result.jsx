import { Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Result.css"

function Result({name , score}) {
  let navigate = useNavigate()
  useEffect(()=> {
    if(!name) {
      navigate("/")
    }
  }, [name , navigate])
  return (
    <div className='result'>
        <span className='title'>Final Score : {score} </span>
        <Button variant='contained' color="secondary" size='large'
        style={{ alignSelf: "center", marginTop: 20 }} href="/" > Go To Home </Button>
    </div>
  );
}

export default Result;

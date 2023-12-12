import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import axios from 'axios';


export default function Form() {
  const [fromCurrency , SetFromCurrency] = React.useState('');
  const [toCurrency , SetToCurrency] = React.useState('');
  const [price , setPrice] = React.useState('');
  const [date , setDate] = React.useState('');
  const CONVERT_API = "https://currency-converter-dj8x.onrender.com/api/convert"

  const handlePost = () => {
    const data = {
      fromCurrency: fromCurrency,
      toCurrency: toCurrency,
      date: date
    }
    axios
    .post(CONVERT_API, data)
    .then(res => {
       setPrice(res.data.price);
    })
    .catch(err => {
      console.log(err);
    })

  }

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      style={{
        display:'flex',
        flexDirection:'column'
      }}
    >
      
      <Typography variant="h3">Convert Currencies</Typography>
      <Box>
      <TextField 
       id="outlined-basic" 
       label="From Currency" 
       variant="outlined" 
       helperText="eg: bitcoin"
       onChange={(e)=>{
        SetFromCurrency(e.target.value);
       }}
       />
      <TextField 
        id="outlined-basic" 
        label="To Currency" 
        variant="outlined" 
        helperText="eg: usd" 
        onChange={(e)=> {
          SetToCurrency(e.target.value);
        }}

      />
      </Box>
      <Box>
      <TextField 
        id="outlined-basic" 
        label="Date" 
        variant="outlined" 
        helperText="FORMAT: DD-MM-YYYY" 
        onChange={(e)=> {
          setDate(e.target.value);
        }}

      />
      </Box>
      <Box>
      <Button variant='contained' onClick={handlePost}>
          Convert
      </Button>
      </Box>
      <Box>
        {price !== '' && <Typography>{'Price: '+ price }</Typography>}
      </Box>
    </Box>
  );
}
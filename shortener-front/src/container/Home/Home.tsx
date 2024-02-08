import TextField from '@mui/material/TextField';
import { Button, FormGroup, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import axiosApi from '../../axiosApi';
import { useMutation } from '@tanstack/react-query';

const Home = () => {
  const [originalUrl, setOriginalUrl]  = useState('');
  // let shortUrl: ApiLink = {shortUrl: ''};

  const onFormSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const mutation = useMutation({
      mutationFn: async(originalUrl)=> {
        await axiosApi.post('/links', originalUrl);
      }
    })
    await mutation.mutateAsync();
  }
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    setOriginalUrl(value);
  };

  return (
    <>
      <FormGroup
        sx={{
          '& .MuiTextField-root': { m: 1, width: '100ch' },
        }}
        onSubmit={onFormSubmit}
      >
        <Grid container direction="column" alignContent="center" spacing={2}>
            <TextField
              required
              id="outlined-required"
              label="Enter original URL"
              defaultValue="http://"
              value={originalUrl}
              onChange={inputChangeHandler}
            />
            <Button type="submit" variant="outlined" sx={{width:'90px',margin: 'auto'}}>Shorten</Button>
        </Grid>
      </FormGroup>
      <Grid>
        <Typography  sx={{mt:5}}>
          Your link now looks like this:
        </Typography>
        <Typography variant="h4">
          <a href="/" target="_blank">pltcm ,eltn ccskrf</a>
        </Typography>
      </Grid>

    </>
  );
};

export default Home;

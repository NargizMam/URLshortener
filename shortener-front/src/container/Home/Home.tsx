import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button, Grid, Typography } from '@mui/material';
import axiosApi from '../../axiosApi';

const Home = () => {
  const [originalUrl, setOriginalUrl] = useState({
    originalUrl: ''
  });
  const [shortUrl, setShortUrl] = useState('');
  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newLink = await axiosApi.post('/links', originalUrl);
    if (!newLink) {
      setShortUrl('Данная ссылка не найдена!');
    }
    setShortUrl(newLink.data.shortUrl);
    setOriginalUrl({
      originalUrl: ''
    });
  };
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    setOriginalUrl({
      originalUrl: value
    });
  };

  return (
    <Grid style={{margin: '50px auto', width: '60%', textAlign: 'center'}}>
      <form
        onSubmit={onFormSubmit}
      >
        <Grid container direction="column" alignContent="center" spacing={2}>
          <TextField
            fullWidth
            required
            id="outlined-required"
            type="url"
            label="Enter original URL"
            value={originalUrl.originalUrl}
            onChange={inputChangeHandler}
          />
        </Grid>
        <Button type="submit" variant="outlined" sx={{width: '90px', margin: '10px auto'}}>Shorten</Button>
      </form>
      {shortUrl ? (<Grid>
        <Typography sx={{mt: 5}}>
          Your link now looks like this:
        </Typography>
        <Typography variant="h4">
          <a href={shortUrl} target="_blank">{shortUrl}</a>
        </Typography>
      </Grid>) : null}
    </Grid>
  );
};

export default Home;

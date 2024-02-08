import TextField from '@mui/material/TextField';
import { Button, FormGroup, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';

const Home = () => {
  const [originalUrl, setOriginalUrl]  = useState('');
  // let shortUrl: ApiLink = '';

  const onFormSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    // const mutation = useMutation({
    //   mutationFn: async(originalUrl)=> {
    //     await axiosApi.post('/shortener', originalUrl);
    //   }
    // })
    // await mutation.mutateAsync(`/https://${shortUrl}`);
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
        <div>
          <TextField
            required
            id="outlined-required"
            label="Enter original URL"
            defaultValue="http://"
            value={originalUrl}
            onChange={inputChangeHandler}
          />
        </div>
        <Button type="submit" variant="outlined">Shorten</Button>
      </FormGroup>
      <Grid>
        <Typography variant="h6">
          Your link now looks like this:
        </Typography>
        <Typography>
          <a href="/" target="_blank"></a>
        </Typography>
      </Grid>
    </>
  );
};

export default Home;

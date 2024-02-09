import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button, Grid, Typography } from '@mui/material';
import axiosApi from '../../axiosApi';
import ModalWin from '../../components/UI/Modal/ModalWin';

const Home = () => {
  const [originalUrl, setOriginalUrl] = useState({
    originalUrl: ''
  });
  const [showModal, setShowModal] = useState(false);
  const [redirect, setRedirect] = useState(false);
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
  const stoppedRedirect = () => {
    setRedirect(false);
    setShowModal(false);

  };
  const redirected = () => {
    setShowModal(false);
    setRedirect(true);
  };

  return (
    <div>
      <ModalWin show={showModal} onClose={redirected} onStopRedirect={stoppedRedirect}/>
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
          <Button type="submit" variant="outlined" sx={{width: '90px', margin: '10px auto'}}
                  onClick={() => setShowModal(true)}
          >Shorten</Button>
        </form>
        {shortUrl ? (<Grid>
          <Typography sx={{mt: 5}}>
            Ваша ссылка теперь выглядит так:
          </Typography>
          <Typography variant="h4">
            {redirect ?
              (<a href={shortUrl} target="_blank">{shortUrl}</a>) :
              (<>
                <p>{shortUrl}</p>
                <Button variant="outlined" sx={{mt: '10px'}} onClick={redirected}>Желаю перейти</Button>
              </>)
            }
          </Typography>
        </Grid>) : null}
      </Grid>
    </div>
  );
};

export default Home;

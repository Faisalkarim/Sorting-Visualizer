import React, { useState } from 'react';
import { Grid, Button, Typography, Paper } from '@mui/material';

function TextChanger() {
  const [guess, setGuess] = useState(50);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const [isFound, setIsFound] = useState(false);
  const [showDescription, setShowDescription] = useState(true);

  const handleHigher = () => {
    setMin(guess + 1);
    setGuess(Math.floor((guess + 1 + max) / 2));
  };

  const handleLower = () => {
    setMax(guess);
    setGuess(Math.floor((min + guess) / 2));
  };

  const handleEqual = () => {
    setIsFound(true);
  };

  const handleRestart = () => {
    setGuess(50);
    setMin(0);
    setMax(100);
    setIsFound(false);
    setShowDescription(true);
  };

  const blocks = [];
  for (let i = 0; i < 100; i++) {
    blocks.push(
      <Grid item key={i}>
        <Paper
          style={{
            width: '30px',
            height: '30px',
            margin: '2 5px',
            backgroundColor:
              i >= min && i <= max ? 'blue' : 'gray',
          }}
        >
          <Typography variant="subtitle2" align="center">
            <b>{i}</b>
          </Typography>
        </Paper>
      </Grid>
    );
  }

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={{
        backgroundImage: `url("https://htmlcolorcodes.com/assets/images/colors/off-white-color-solid-background-1920x1080.png")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '94vh',
        opacity: 0.9,
        padding: '20px',
      }}
    >
      <Typography variant="h2" gutterBottom>
        Binary Search
      </Typography>
      {showDescription && (
        <div>
          <Typography variant="h4" gutterBottom style={{ color: 'Blue' }}>
            Binary search is a fast search algorithm with run-time complexity of O(log n).
          </Typography>
          <Typography variant="h4" gutterBottom style={{ color: 'Blue' }}>
            It works on a sorted array, where you split the array in half and check if the middle element is greater or lesser than the target.
          </Typography>
          <Typography variant="h4" gutterBottom style={{ color: 'Blue' }}>
            This way, you can narrow down the search to half of the array with each step.
          </Typography>
          <Button variant="contained" color="primary" size="large" onClick={() => setShowDescription(false)}>
            Start
          </Button>
        </div>
      )}
      {!isFound && !showDescription && (
        <div>
          <Typography variant="h4" gutterBottom style={{ color: 'Green' }}>
            Is your number {guess}?
          </Typography>
          <Grid container justify="center" spacing={1}>
            {blocks.slice(min, max + 1)}
          </Grid>
          <Button variant="contained" color="success" size="large" onClick={handleHigher}>
            Higher
          </Button>
          <Button variant="contained" color="error" size="large" onClick={handleLower}>
            Lower
          </Button>
          <Button variant="contained" color="primary" size="large" onClick={handleEqual}>
            Yes, that's my number!
          </Button>
        </div>
      )}
      {isFound && (
        <div>
          <h3>Number found!</h3>
          <Button variant="contained" color="success" onClick={handleRestart}>
            Restart
          </Button>
        

        </div>
      )}
    </Grid>
  );
}

export default TextChanger;

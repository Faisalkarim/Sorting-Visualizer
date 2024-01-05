import React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';

function GridExample() {
  const cardImages = [
    "https://soshace.com/wp-content/uploads/2019/05/sorting-algorithms-overview-thumbnail.png",
    "https://happycoding.io/tutorials/libgdx/images/pathfinding-6.png",
    "https://matrixread.com/wp-content/uploads/2020/10/Binary-Search-Algorithm.png",
    "https://c1.wallpaperflare.com/preview/249/57/159/board-game-challenge-chess-chess-board.jpg"
    
  ];

  const cardTexts = [
    "This is the first card",
    "This is the second card",
    "This is the third card",
    "This is the fourth card"
   
  ];

  const cardTitles = [
    "Sorting",
    "Sieve of eratosthenes",
    "Binary search",
    "Title 4"
    
  ];

  const imageStyle = {
    width: "100%",
    height: "250px",
    objectFit: "cover"
  };

  const cardStyle = {
    width: "500px",
    height: "400px"
  };

  return (
    <Grid container spacing={4}>
      {cardImages.map((src, idx) => (
        <Grid item key={idx} xs={12} md={4}>
          <Card >
            <CardMedia component="img" image={src} style={imageStyle} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {cardTitles[idx]}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {cardTexts[idx]}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default GridExample;

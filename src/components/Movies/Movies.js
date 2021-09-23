import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import "./movies.css"
const Movies = ({data}) => {
  return (
      <Box  display="flex"
      justifyContent="center"
      alignItems="center"
      className="cardMovie">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="No image"
        image={data.Poster}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.Title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.Plot}
        </Typography>
      </CardContent>
      <Typography variant="body2" color="text.secondary">
          {data.Genre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.Released}
        </Typography>
    </Card>
    </Box>
  );
}

export default Movies;
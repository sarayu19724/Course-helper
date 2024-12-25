import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';


const MyCard = ({name,Description,Code,Credits, image }) => {
  return (
    <Card sx={{ maxWidth:370 , marginLeft:15 ,marginTop: 3}}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={image}
          height="140"
          
        />
        <CardContent> 
            <Typography gutterBottom variant="h5" component="div"> 
                {name} 
            </Typography> 
            <Typography variant="body2" color="text.tertiary"> 
                {Code} 
            </Typography> 
            <Typography variant="body2" color="text.secondary"> 
                {Credits} 
            </Typography> 
            <Typography variant="body2" color="text.secondary"> 
                {Description} 
            </Typography> 
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MyCard;

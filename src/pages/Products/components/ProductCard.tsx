import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Product } from '../../../models/product';



export default function ProductCard(prop: Product) {
  return (
    <Card sx={{ width: '100px', height:250 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={prop.url}
        title={prop.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {prop.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price $ {prop.price}
        </Typography>
      </CardContent>
    </Card>
  );
}
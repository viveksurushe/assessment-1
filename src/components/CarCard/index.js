import React from 'react'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ListItem from '../listItem/index'

function CarCard(props) {

    return (
        <Card sx={{ maxWidth: 393 }} style={{ boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" }}>
          <CardMedia
            component="img"
            height="221"
            image={props.src}
            alt={props.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.name}
            </Typography>
            <Typography style={{marginBottom: '10px'}} variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
            {props.properties && props.properties.map(e => Object.keys(e).map(function(key) {
                return <ListItem label={key.toUpperCase()} value={e[key]}/>
            }))}
          </CardContent>
          <CardActions>
            <Button size="small">Check on road price</Button>
            <Button size="small">Share</Button>
          </CardActions>
        </Card>
      );
}

export default CarCard;
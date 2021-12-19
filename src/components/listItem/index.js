import React from 'react'
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import Typography from "@mui/material/Typography";

const useStyles = makeStyles({
    label: {
        width: '50%'
    }, 
    value: {
        width: '50%'
    }
});

function ListItem(props) {
    const classes = useStyles();
    return (
        <Grid container direction="row" justifyContent="space-between">
            <Typography className={classes.label} variant="body2" color="text.secondary">{props.label}</Typography>
            <span className={classes.value}>{props.value}</span>
        </Grid>
    )
}

export default ListItem

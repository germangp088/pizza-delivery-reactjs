import React from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    listItem: {
      padding: theme.spacing(1, 0),
    },
    total: {
      fontWeight: 700,
    },
    title: {
      marginTop: theme.spacing(2),
    },
}));

const Item = (props) => {
    const classes = useStyles();

    return (
            <ListItem className={classes.listItem}>
                <ListItemText primary={props.primary} secondary={props.secondary} />
                <List>
                    <ListItem>
                        <Typography variant={props.variant} className={props.className}>
                            {props.price}
                        </Typography>
                    </ListItem>
                    <ListItem>
                        {props.children}
                    </ListItem>
                </List>
            </ListItem>
    );
}

export default Item;
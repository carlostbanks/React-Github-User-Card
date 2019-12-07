import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        margin: "0 auto",
        border: "2px solid black",
        borderRadius: "20px",
        backgroundColor: "#F5F5F5",
        boxShadow: "10px 10px 6px -1px rgba(219,219,219,0.72)"

    },
    cardimg: {
        margin: "0 auto",
        borderRadius: "50px"    ,
    }
  });

const UserCard = ({ name, img, bio, followers }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
                <CardMedia className={classes.cardimg}
                component="img"
                alt="User Pic"
                image={img}
                title="User Pic"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        <strong>{name}</strong>
                    </Typography>
                    <Divider />
                    <br></br>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {bio}
                    </Typography>

                    <Typography variant="body2" color="textSecondary" component="p">
                        Number of Followers: {followers}
                    </Typography>
                </CardContent>
        </Card>
    )
}
export default UserCard; 

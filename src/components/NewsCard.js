import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({ data }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={data.urlToImage}
          title={data.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {data.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {data.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Published At : {data.publishedAt}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Source : {data.source.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href={data.url}>
        <Button size="small" color="primary" >
          Read More
        </Button>
        </a>
      </CardActions>
    </Card>
  );
}

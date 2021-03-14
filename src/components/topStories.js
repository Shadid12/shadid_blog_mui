import React from 'react';
import { useStyles } from '../styles/topstories';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Link } from "gatsby-theme-material-ui";
import { navigate } from "gatsby"


export default function TopStory({story}) {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    
    const nagigateToLink = () => {
        navigate('/about')
    }
    return (
      <div className={classes.topstories}>
        <div className={classes.txtwrap}>
            <Link to={'/about'}>
                <Typography variant={matches ? "subtitle2" : "h6"} gutterBottom >
                    {story.title}
                </Typography>
            </Link>
            <Typography variant="body2" gutterBottom >
                {!matches ? story.summary : story.summary.substring(0, 100)}
            </Typography>
            <Typography variant="span" gutterBottom>
                {story.date}
            </Typography>
        </div>
        <img 
            onClick={nagigateToLink}
            className={classes.img} 
            src={story.img} 
        />
      </div>
    )
}
  
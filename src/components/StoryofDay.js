import React from 'react';
import { useStyles } from '../styles/mainstory';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Link } from "gatsby-theme-material-ui";

const mainStory = {
    img: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
    slug: 'how-to-architect-a-nodejs-project-from-ground-up',
    title: 'How to Architect a Node.Js Project from Ground Up?',
    summary: 'In this article, we will discuss how to architect a Node.js application properly, and why it is important. Also, we’ll look at what design decisions can lead us to in creating a successful digital product.',
    date: '8 Sept, 2020'
}


export default function MainStory() {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    return (
      <div className={classes.mainstory}>
        <Link to={`/${mainStory.slug}`}>
            <div className={classes.imgWrapper}>
                <img className={classes.img} 
                    src={mainStory.img} />
            </div>
            <div>
                {matches ? (
                    <Typography variant="h4" gutterBottom>
                        {mainStory.title}
                    </Typography>
                ) : 
                    <Typography variant="h6" gutterBottom>
                        {mainStory.title}
                    </Typography>
                }
            </div>
        </Link>
        <Typography variant="body2" gutterBottom>
            {mainStory.summary}
        </Typography>
        <Typography variant="span" gutterBottom>
            {mainStory.date}
        </Typography>
      </div>
    )
}
  
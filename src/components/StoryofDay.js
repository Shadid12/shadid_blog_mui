import React from 'react';
import { useStyles } from '../styles/mainstory';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Link } from "gatsby-theme-material-ui";


export default function MainStory() {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    return (
      <div className={classes.mainstory}>
        <Link to="/about">
            <div className={classes.imgWrapper}>
                <img className={classes.img} 
                    src={'https://images.unsplash.com/photo-1508624217470-5ef0f947d8be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80'} />
            </div>
            <div>
                {matches ? (
                    <Typography variant="h4" gutterBottom>
                        How to learn reactive programing in JavaScript? 
                    </Typography>
                ) : 
                    <Typography variant="h6" gutterBottom>
                        How to learn reactive programing in JavaScript? 
                    </Typography>
                }
            </div>
        </Link>
        <Typography variant="body2" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="span" gutterBottom>
            12 Jan, 2020 
        </Typography>
      </div>
    )
}
  
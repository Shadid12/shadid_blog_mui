import React from 'react';
import { useStyles } from '../styles/container';
import TopStory from './topStories';

export default function SimpleContainer({ firstChild, stories }) {
    const classes = useStyles();
    return (
        <div className={classes.mainWrap}>
            <div className={classes.first}>
                {firstChild}
            </div>
            <div className={classes.second}>
                <TopStory story={stories[0]}/>
            </div>
            <div className={classes.third}>
                <TopStory story={stories[1]}/>
            </div>
            <div className={classes.forth}>
                <TopStory story={stories[2]}/>
            </div>
            <div className={classes.fifth}>
                <TopStory story={stories[3]}/>
            </div>
        </div >
    );
}
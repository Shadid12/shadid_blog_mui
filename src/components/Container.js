import React from 'react';
import { useStyles } from '../styles/container';

export default function SimpleContainer({ firstChild }) {
    const classes = useStyles();
    return (
        <div className={classes.mainWrap}>
            <div className={classes.first}>
                {firstChild}
            </div>
            <div className={classes.second}>
                Second
            </div>
            <div className={classes.third}>
                Third
            </div>
            <div className={classes.forth}>
                Fourth
            </div>
            <div className={classes.fifth}>
                Fifth
            </div>
        </div >
    );
}
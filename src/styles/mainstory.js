import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    mainstory: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '600px',
        padding: theme.spacing(1),
        textDecoration: 'none',
        '&:hover':  {
            textDecoration: 'none'
        }
    },
    img: {
        height: '350px',
        width: '100%',
        [theme.breakpoints.down('md')]: {
            height: '250px'
        }
    },
    imgWrapper: {
    }
}));

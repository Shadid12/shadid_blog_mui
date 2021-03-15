import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    topstories: {
        padding: '8px',
        display: 'flex',
        flexDirection: 'column-reverse',
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row'
        },
    },
    img: {
        height: '250px',
        cursor: 'pointer',
        [theme.breakpoints.up('sm')]: {
            height: '120px'
        }
    },
    txtwrap: {
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
            marginLeft: '8px',
        },
    }
}));

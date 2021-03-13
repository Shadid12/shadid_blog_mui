import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    appbar: {
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
    //   flexGrow: 1,
        cursor: 'pointer', 
        marginRight: theme.spacing(2)
    },
    link: {
        color: 'white',
        '&:hover':  {
            textDecoration: 'none'
        }
    }
}));

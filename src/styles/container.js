import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    mainWrap: {
        padding: '20px 24px',
        display: 'grid',
        gridTemplateColumns: 'auto auto auto auto',
        gridTemplateRows: 'auto',
        gridTemplateAreas: `
            "first first first first"
            "second second second second"
            "third third third third"
            "fourth fourth fourth fourth"
            "fifth fifth fifth fifth"
        `,

        [theme.breakpoints.up('sm')]: {
            gridTemplateAreas: `
                "first first second second"
                "first first third third"
                "first first fourth fourth"
                "first first fifth fifth"
            `,
        }
    },
    first: {
        gridArea: 'first'
    },
    second: {
        gridArea: 'second'
    },
    third: {
        gridArea: 'third'
    },
    forth: {
        gridArea: 'fourth'
    },
    fifth: {
        gridArea: 'fifth'
    }
}));

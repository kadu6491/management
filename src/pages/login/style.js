import { makeStyles } from '@material-ui/core/styles';

import { LIGHT } from '../../components/color/LightMode';
import { DARK } from '../../components/color/DarkMode';
import img from '../../components/images/login.jpg'

const useStyles = makeStyles((theme, dark) => ({
    lRoot: {
        backgroundColor: LIGHT.white,
    },
    dRoot: {
        backgroundColor: DARK.bgColor,
        height: "100%",
        position: 'absolute',
        width: "100%"
    },
    lBox: {
        backgroundColor: LIGHT.boxColor,
    },
    dBox: {
        backgroundColor: DARK.boxColor,
    },
    rootBox: {
        position: 'absolute',
        width: "100%",
        height: "100%",
        [theme.breakpoints.down('sm')]: {
            position: 'relative'
        }
    },
    mBox: {
        width: "900px",
        height: "700px",
        borderRadius: 20,
        [theme.breakpoints.down('sm')]: {
            height: "90%",
            width: "100%",
        }
    },
    leftBox: {
        width: "55%",
        borderRadius: 20,
        backgroundImage: `url(${img})`,
        backgroundSize: "cover"
    },
    rightBox: {
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
        alignItems: "center",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
        }
    },
    switch: {
        fontSize: 20,
    },

    formBox: {
        width: "60%",
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('xs')]: {
            padding: 5,
            width: "90%",
            marginTop: 10,
        }
    },

    formContronl: {
        marginTop: "20px",
    },
    labelText: {
        padding: '3px 7px',
        letterSpacing: "1.5px",
        fontSize: "16px",
        fontWeight: "400",
        fontFamily: ['Roboto', 'sans-serif']
    }, 

    paper: {
        height: "40px",
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #5C5B66',
        borderRadius: 10,
        // backgroundColor: "#5C5B66"
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    }
}))

export default useStyles
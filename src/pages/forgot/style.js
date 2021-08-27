import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    container: {
        // backgroundColor: "red",
        position: 'absolute',
        width: "100%",
        height: "100%",
        [theme.breakpoints.up('sm')]:{
            padding: theme.spacing(8),
        }
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
    //   backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      height: "50px",
      // backgroundColor: "#8c67bb",
      // color: "white",
      // '&:hover': {
      //   backgroundColor: "#8c67bb",
      //   opacity: '0.8'
      // }
    },
    input: {
        color: "white",
    },
    title: {
        letterSpacing: "1.4px",
        paddingLeft: "15px",
    },
    action: {
      [theme.breakpoints.down('xs')]: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }
    },
    actionBTN: {
      '&:hover': {
        opacity: 0.5,
        backgroundColor: 'inherit',
      }
    }
  }));

export default useStyles
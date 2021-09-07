import { makeStyles } from '@material-ui/core/styles';

import { LIGHT } from '../../components/color/LightMode';
import { DARK } from '../../components/color/DarkMode';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    sidePaper: {
      backgroundColor: LIGHT.navColor,
      width: "250px",
      height: "100%",
      position: 'absolute'
    },
    sidePaperD: {
      backgroundColor: "#1a1a1a",
      width: drawerWidth,
    },
    closeBox: {
      display: "flex",
      justifyContent: "flex-end",
      paddingRight: "10px",
      fontWeight: "600"
    },
    hide: {
      display: 'none',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: LIGHT.navColor,
    },
    small: {
      width: theme.spacing(6),
      height: theme.spacing(6),
      marginTop: theme.spacing(1),
    },
    text: {
      paddingTop: 14,
      fontWeight: "600",
      letterSpacing: "1px",
      fontSize: 14,
      fontFamily: 'sans-serif',
    },
    btn: {
      fontSize: "8px"
    },
    iconBtn: {
      '&:hover': {
        backgroundColor: "#000"
      }
    }
  }));

export default useStyles
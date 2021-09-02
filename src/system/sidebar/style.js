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
      backgroundColor: DARK.navColor,
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
  }));

export default useStyles
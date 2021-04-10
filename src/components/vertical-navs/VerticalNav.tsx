import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import Avatar from "@material-ui/core/Avatar";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import MenuIcon from "@material-ui/icons/Menu";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AppsIcon from "@material-ui/icons/Apps";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  menuButton: {
    display: "none",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      display: "inline-flex"
    }
  },
  linkBrand: {
    flexGrow: 1,
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  linkBrandSmall: {
    display: "none",
    flexGrow: 1,
    [theme.breakpoints.down("xs")]: {
      display: "inline-block"
    }
  },
  drawer: {
    width: 256,
    flexShrink: 0,
    [theme.breakpoints.down("md")]: {
      display: "none"
    }
  },
  drawerContainer: {
    width: 256,
    overflow: "auto"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

export default function Navigation(props) {
  const classes = useStyles();

  const content = {
    brand: { image: "mui-assets/img/logo-pied-piper-white.png", width: 120 },
    "brand-small": {
      image: "mui-assets/img/logo-pied-piper-white-icon.png",
      width: 32
    },
    link1: "Features",
    link2: "Enterprise",
    link3: "Support",
    link4: "ICO",
    avatar:
      "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    ...props.content
  };

  let brand = content["brand"].text || "";
  let brandSmall = content["brand-small"].text || "";

  if (content["brand"].image) {
    brand = (
      <img src={content["brand"].image} alt="" width={content["brand"].width} />
    );
  }

  if (content["brand-small"].image) {
    brandSmall = (
      <img
        src={content["brand-small"].image}
        alt=""
        width={content["brand-small"].width}
      />
    );
  }

  const buckets = {
    main: Array.isArray(props.bucketMain) ? props.bucketMain : []
  };

  const [state, setState] = React.useState({ open: false });

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, open });
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Link
            href="#"
            variant="h5"
            color="inherit"
            underline="none"
            className={classes.linkBrand}
          >
            {brand}
          </Link>
          <Link
            href="#"
            variant="h5"
            color="inherit"
            underline="none"
            className={classes.linkBrandSmall}
          >
            {brandSmall}
          </Link>
          <IconButton color="inherit">
            <MailIcon />
          </IconButton>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton color="inherit">
            <Avatar alt="" src={content["avatar"]} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer className={classes.drawer} variant="permanent">
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button key={content["link1"]}>
              <ListItemIcon>
                <AppsIcon />
              </ListItemIcon>
              <ListItemText primary={content["link1"]} />
            </ListItem>
            <ListItem button key={content["link2"]}>
              <ListItemIcon>
                <BusinessCenterIcon />
              </ListItemIcon>
              <ListItemText primary={content["link2"]} />
            </ListItem>
            <ListItem button key={content["link3"]}>
              <ListItemIcon>
                <LiveHelpIcon />
              </ListItemIcon>
              <ListItemText primary={content["link3"]} />
            </ListItem>
            <ListItem button key={content["link4"]}>
              <ListItemIcon>
                <AttachMoneyIcon />
              </ListItemIcon>
              <ListItemText primary={content["link4"]} />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <Drawer anchor="left" open={state.open} onClose={toggleDrawer(false)}>
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button key={content["link1"]}>
              <ListItemIcon>
                <AppsIcon />
              </ListItemIcon>
              <ListItemText primary={content["link1"]} />
            </ListItem>
            <ListItem button key={content["link2"]}>
              <ListItemIcon>
                <BusinessCenterIcon />
              </ListItemIcon>
              <ListItemText primary={content["link2"]} />
            </ListItem>
            <ListItem button key={content["link3"]}>
              <ListItemIcon>
                <LiveHelpIcon />
              </ListItemIcon>
              <ListItemText primary={content["link3"]} />
            </ListItem>
            <ListItem button key={content["link4"]}>
              <ListItemIcon>
                <AttachMoneyIcon />
              </ListItemIcon>
              <ListItemText primary={content["link4"]} />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <div>
          {buckets["main"].map((component) => (
            <React.Fragment>{component}</React.Fragment>
          ))}
        </div>
      </main>
    </div>
  );
}

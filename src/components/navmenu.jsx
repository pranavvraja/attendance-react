import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  Person,
  Home,
  Settings,
  Subject,
  TableChart,
  Menu,
  Close,
} from "@mui/icons-material";

export default function NavMenu() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* <List>
        {["Home", "Attendance", "Subjects", "Timetable", "Settings"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List> */}
      <List>
        <ListItem disablePadding>
          <Close className="m-4" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="/">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="/attendance">
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Attendance" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="subjects">
            <ListItemIcon>
              <Subject />
            </ListItemIcon>
            <ListItemText primary="Subjects" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="timetable">
            <ListItemIcon>
              <TableChart />
            </ListItemIcon>
            <ListItemText primary="Timetable" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="settings">
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <Menu className="m-4" />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

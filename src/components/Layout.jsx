import {Drawer, List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {makeStyles} from "@mui/material";
import {AddCircleOutlined, SubjectOutlined} from "@mui/icons-material";
import {useLocation, useNavigate} from "react-router-dom";

const drawerWidth = 480;

// const useStyles = makeStyles({
//     page: {
//         background: '#f9f9f9',
//         width: '100%',
//         },
//     drawStyle: {
//         width: drawerWidth,
//     },
//     drawerPaper: {
//         width: drawerWidth,
//     },
//     root: {
//         display: 'flex',
//     }
// });

const menuItems = [
    {
        text: 'My notes',
        icon: <SubjectOutlined color="secondary"/>,
        path: '/',
    },
    {
        text: 'Create note',
        icon: <AddCircleOutlined color="secondary"/>,
        path: '/create',
    }
]

export default function Layout({ children }) {

    const navigate = useNavigate();
    const location = useLocation();

    const styles = {
        background: '#f9f9f9',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '20px',
        marginLeft: '130px'
    }

    const activeStyle = {
        background: '#f4f4f4',
    }


    return (
        <div
           style={styles}
        >
         {/* app bar */}

         {/* side drawer */}
         <Drawer
             style={{
                 width: 240,
             }}
             variant="permanent"
             anchor="left"
         >
             <div>
                 <Typography variant="h5">
                    My notes
                 </Typography>
             </div>

             <List>
                 {menuItems.map(item => (
                     <ListItem
                         button
                         onClick={() => {
                             navigate(item.path)
                         }}
                         key={item.text}
                         style={location.pathname === item.path ? activeStyle : null}
                     >
                         <ListItemIcon>{item.icon}</ListItemIcon>
                         <ListItemText primary={item.text}/>
                     </ListItem>
                 ))}
             </List>

         </Drawer>

         <div style={styles}>
             {children}
         </div>

     </div>
    );
}

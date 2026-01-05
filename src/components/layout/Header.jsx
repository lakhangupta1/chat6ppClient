import React, { Suspense,lazy } from "react";
import { AppBar, Box, IconButton, Toolbar, Tooltip, Typography , Backdrop} from "@mui/material";
import { Add as AddIcon, Menu as MenuIcon, Search as SearchIcon, } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
const LayoutLoader = lazy(() => import("./Loaders"));

const SearchDialog = React.lazy(() => import("../specific/Search"));
const NotificationDialog = React.lazy(() => import("../specific/NotificationDialog"));
const NewGroupDialog = React.lazy(() => import("../shared/NewGroup"));

function Header() {
    const navigate = useNavigate();
    const [ismobile, setIsMobile] = React.useState(false);
    const [isSearch, setIsSearch] = React.useState(false);
    const [ isNewGroup, setIsNewGroup] = React.useState(false);
    const [ isNotifications, setIsNotifications ] = React.useState(false);

    const handleMobile = () => {
        console.log("Mobile Menu Clicked");
        setIsMobile(!ismobile);
    };
    const openSearchDiolog = () => {
        console.log("Search Clicked openSearchDiolog");
        setIsSearch(prev => !prev );
    }

    const openNotifications = () => {
        console.log("Notifications Clicked openNotifications");
        setIsNotifications(!isNotifications);
    }
    const openNewGroup = () => {
        console.log("New Group Clicked openNewGroup");
        setIsNewGroup(!isNewGroup);
    }
    const logoutHandler = () => {
        console.log(" logoutHandler ");
        // user = false;
        navigate('/login')
    }
    const navigateToGroup = () =>{
        console.log(" navigateToGroup ");
        setIsNewGroup(!isNewGroup);
        navigate('/groups')
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>

                    {/* Mobile Menu Icon */}
                    <Box>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleMobile}
                            sx={{ display: { xs: "block", sm: "none" } }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>

                    {/* Title (Hidden on Mobile) */}
                    <Typography
                        variant="h6"
                        sx={{ display: { xs: "none", sm: "block" } }}
                    >
                        Chat Application
                    </Typography>


                    <Box sx={{ flexGrow: 1 }} />

                    <IconBtn title="search" icon={<SearchIcon />} onClick={openSearchDiolog} />
                    <IconBtn title="New Group" icon={<AddIcon />} onClick={openNewGroup} />
                    <IconBtn title="Manage group" icon={<GroupAddIcon />} onClick={navigateToGroup} />
                    <IconBtn title="Notifications" icon={<NotificationsIcon />} onClick={openNotifications} />
                    <IconBtn title="Logout" icon={<LogoutIcon />} onClick={logoutHandler} />
                </Toolbar>
            </AppBar>
        </Box>

        {
            isSearch && (
                <Suspense fallback={<Backdrop open />}>
                    <SearchDialog/>
                </Suspense>
            )
        }
        {
            isNotifications && (
                <Suspense fallback={<Backdrop open />}>
                    <NotificationDialog/>
                </Suspense>
            )
        }
        {
            isNewGroup && (
                <Suspense fallback={<Backdrop open />}>
                    <NewGroupDialog/>
                </Suspense>
            )
        }
        </>
        
    );
}



const IconBtn  = ({ title, icon, onClick  }) => {
    return (
        <Tooltip title={title}>
            <IconButton color="inherit" size="large" onClick={onClick}>
                {icon}
            </IconButton>
        </Tooltip>
    );
}
export default Header;

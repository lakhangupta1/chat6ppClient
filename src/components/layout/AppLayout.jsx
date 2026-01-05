import React from "react";
import Header from "./Header";
import Title from "../shared/Title";
import { Grid } from "@mui/material";
// import Chat from "../../pages/Chat";
import ChatList from "../specific/ChatList";
import { sampleChats } from "../../constants/sampleData";
import { useParams } from "react-router-dom";
import Profile from "../specific/Profile";

const AppLayout = (WrappedComponent) => {
    const handleDeleteChat = ( e , _id , groupChat )=>{
        console.log(" hello handleDeleteChat ", e, _id, groupChat );
    }
  return function LayoutComponent(props) {
    const params = useParams();
    const chatId = params.chatId;


    return (
      <>
        <Title />
        <Header />

        <Grid container height="calc(100vh - 4rem)">

          {/* LEFT */}
          <Grid
            item
            sx={{
              width: { xs: "0%", sm: "20%" },
              display: { xs: "none", sm: "block" },
            }}
          >
            <ChatList chats={sampleChats} chatId={chatId}
            handleDeleteChat={handleDeleteChat}
              // newMessagesAlert={[{
              //   chatId,
              //   count : 4
              // }]}
              // onlineUsers={[1, 2, 3]}
            />
          </Grid>


          {/* CENTER */}
          <Grid
            item
            sx={{
              width: { xs: "100%", sm: "60%" },
            }}
          >
            <WrappedComponent {...props} />
          </Grid>

          {/* RIGHT */}
          <Grid
            item
            sx={{
              width: { xs: "0%", sm: "20%" },
              display: { xs: "none", sm: "block" },
              bgcolor: "rgba(179, 236, 47, 0.85)",
            }}
          >
            <Profile />
          </Grid>

        </Grid>
      </>
    );
  };
};

export default AppLayout;

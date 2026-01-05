import React, { memo } from "react";
import { Stack, Typography, Box } from "@mui/material";
import { Link } from "../styles/StyledComponents";
import AvatarCard from "./AvatarCard";

const ChatItem = ({
  avatar = [],
  name = "",
  lastMessage = "",
  _id,
  groupChat = false,
  sameSender,
  isOnline,
  newMessageAlert,
  index = 0,
  handleDeleteChatOpen,
}) => {
  return (
    <Link 
      sx={{
        padding : "0",

      }}
      to={`chat/${_id}`} 
      onContextMenu={(e) => handleDeleteChatOpen(e, _id, groupChat)}>
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          alignItems: "center",
          padding: "1rem",
          backgroundColor: sameSender ? "black" : "unset",
          color: sameSender ? "white" : "unset",
          position: "relative",
        }}
      >

        {/* Avatar Item  */}
        <AvatarCard avatar={avatar}/>

        <Stack>
          <Typography>{name}</Typography>
          {newMessageAlert && (
            <Typography>{newMessageAlert.count} New Message</Typography>
          )}
        </Stack>

        {isOnline && (
          <Box
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: "green",
              position: "absolute",
              top: 10,
              right: 10,
            }}
          />
        )}
      </div>
    </Link>
  );
};

export default memo(ChatItem);

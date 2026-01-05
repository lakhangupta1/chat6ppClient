import { Add as AddIcon } from "@mui/icons-material";
import { Avatar, Typography, ListItem, Stack, IconButton } from "@mui/material";
import React, { memo } from "react";

const UserItem = ({ user, handler, handlerIsLoading }) => {
  const { name, _id, avatar } = user;

  return (
    <ListItem >
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        width="100%"
        
      >
        <Avatar src={avatar} />

        <Typography
          variant="body1"
          sx={{
            flexGrow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow : "ellipsis",
            width : "100%"
          }}
        >
          {name}
        </Typography>

        <IconButton
          size="small"
          onClick={() => handler(_id)}
          disabled={handlerIsLoading}
          sx={{
            bgcolor: "primary.main",
            color: "white",
            "&:hover": {
              bgcolor: "primary.dark",
            },
          }}
        >
          <AddIcon />
        </IconButton>
      </Stack>
    </ListItem>
  );
};

export default memo(UserItem);

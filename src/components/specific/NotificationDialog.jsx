import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import React, { memo } from "react";
import { sampleNotifications } from "../../constants/sampleData";

function NotificationDialog({ open = true, onClose }) {
  const friendRequestHandler = ({ _id, accept }) => {
    console.log("Friend request:", _id, accept);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <Stack p="1.5rem" width="25rem">
        <DialogTitle textAlign="center">Notifications</DialogTitle>

        {sampleNotifications.length ? (
          <List>
            {sampleNotifications.map(({ sender, _id }) => (
              <NotificationItem
                key={_id}
                sender={sender}
                _id={_id}
                handler={friendRequestHandler}
              />
            ))}
          </List>
        ) : (
          <Typography textAlign="center">No notifications</Typography>
        )}
      </Stack>
    </Dialog>
  );
}

const NotificationItem = memo(({ sender, _id, handler }) => {
  if (!sender) return null;

  const { name, avatar } = sender;

  return (
    <ListItem>
      <Stack direction="row" alignItems="center" spacing={1} width="100%">
        <Avatar src={avatar} />

        <Typography
          variant="body1"
          sx={{
            flexGrow: 1,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {name} sent you a friend request
        </Typography>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
          <Button
            variant="contained"
            size="small"
            onClick={() => handler({ _id, accept: true })}
          >
            Accept
          </Button>

          <Button
            variant="outlined"
            color="error"
            size="small"
            onClick={() => handler({ _id, accept: false })}
          >
            Reject
          </Button>
        </Stack>
      </Stack>
    </ListItem>
  );
});

export default NotificationDialog;

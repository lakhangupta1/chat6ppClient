import React from 'react'

function NewGroup() {
  return <Dialog open={open} onClose={onClose}>
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
}

export default NewGroup
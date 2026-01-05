import {
  Face as FaceIcon,
  AlternateEmail as UserNameIcon,
  CalendarMonth as CalendarIcon,
} from "@mui/icons-material";
import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import moment from "moment";

function Profile() {
  return (
    <Stack spacing={2} alignItems="center">
      <Avatar
        sx={{
          width: 100,
          height: 100,
          objectFit: "cover",
          border: "4px solid white",
        }}
      />

      <ProfileCard text="sadas dashboard sad" heading="Bio" />

      <ProfileCard
        text="inapkrwq wr fk"
        heading="Username"
        Icon={<FaceIcon />}
      />

      <ProfileCard
        text="dslgkmdsg a pona"
        heading="Name"
        Icon={<UserNameIcon />}
      />

      <ProfileCard
        text={moment().fromNow()}
        heading="Joined"
        Icon={<CalendarIcon />}
      />
    </Stack>
  );
}

const ProfileCard = ({ text, Icon, heading }) => (
  <Stack direction="row" spacing={1.5} alignItems="center">
    {Icon && Icon}

    <Stack>
      <Typography variant="body1">{text}</Typography>
      <Typography variant="caption" color="text.secondary">
        {heading}
      </Typography>
    </Stack>
  </Stack>
);

export default Profile;

import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  InputAdornment,
  List,
  Stack,
  TextField,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useInputValidation } from "6pp";
import UserItem from "../shared/UserItem";
import { sampleUsers } from "../../constants/sampleData";

function Search() {
  const [open, setOpen] = useState(true);
  const search = useInputValidation("");

  const [users, setUsers] = useState(sampleUsers);
  const isLoadingSendFriendRequest = false;

  const handleClose = () => setOpen(false);

  const addFriendHandler = (_id) => {
    console.log("Add friend:", _id);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <Stack p="2rem" direction="column" width="25rem">
        <DialogTitle textAlign="center">Find people</DialogTitle>

        <TextField
          fullWidth
          value={search.value}
          onChange={search.changeHandler}
          variant="outlined"
          size="small"
          placeholder="Search..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <List>
          {users.map((user) => (
            <UserItem
              key={user._id}
              user={user}
              handler={addFriendHandler}
              handlerIsLoading={isLoadingSendFriendRequest}
            />
          ))}
        </List>
      </Stack>
    </Dialog>
  );
}

export default Search;

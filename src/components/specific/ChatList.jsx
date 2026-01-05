import { Stack } from '@mui/material';
import React from 'react'
import ChatItem from '../shared/ChatItem';


function ChatList({ 
    w = "100%" , 
    chats=[], chatId='1', 
    onlineUsers=[], 
    newMessagesAlert=[
        { chatId : 1, count : 0  }
    ],
    handleDeleteChat,
}) {
  return (
    <Stack width={w} direction={"column"} spacing={2}>
        {
            chats?.map((data, index) => {
                const { avatar , name , _id , groupChat, members } = data; 
                const newMessageAlert = newMessagesAlert.find(({chatId}) => chatId === _id )
                const isOnline = members.some((members) => onlineUsers.includes(_id));
                return (
                  // <>hello</>
                  <ChatItem  
                    index = { index }
                    newMessageAlert={newMessageAlert} 
                    isOnline ={ isOnline }
                    avatar = {avatar}
                    name = { name }
                    _id = { _id }
                    key = { _id }
                    groupChat = { groupChat }
                    sameSender = { chatId === _id }
                    handleDeleteChat = { handleDeleteChat }
                  />
                );
            })
        } 
        
    </Stack>
  )
}


export default ChatList;
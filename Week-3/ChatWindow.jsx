import React from 'react'
import MessageBubble from './MessageBubble'

const ChatWindow = () => {
  return (
    <>
    <h3>Contact Selected</h3>
    <MessageBubble
  text="Hello, how are you?"
  isSent={true}
/>

<MessageBubble
  text="Hii, I am good. How are you?"
  isSent={false}
/>
    </>
  )
}

export default ChatWindow

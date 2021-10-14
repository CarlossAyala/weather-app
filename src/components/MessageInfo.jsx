import React from 'react';
import '../styles/MessageInfo.css';

const MessageInfo = () => {
  return (
    <>
      <div className='message-info'>Search your city to see the weather!</div>
      <div className='message-info'>Make sure you write your city correctly, please</div>
      <div className='message-info'>You can check the weather 5 times, attempts are reset in 1 hour</div>
    </>
  );
};
export default MessageInfo;

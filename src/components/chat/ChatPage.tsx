import * as React from 'react';
import MessagesListContainer from '../../containers/MessagesListContainer';
import MessageInputContainer from '../../containers/MessageInputContainer';
import MessageInput  from './MessageInput';

export const ChatPage = () => (
  <div className='container'>
    <MessagesListContainer />
    <MessageInputContainer />
  </div>
);

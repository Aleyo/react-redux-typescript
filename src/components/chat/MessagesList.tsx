import * as React from 'react';

import { Message } from '../../models/Message';

interface MessagesProp {
  refreshMessages: () => void;
  messages: Message[];
}

export class MessagesList extends React.Component<MessagesProp, any> {

  componentDidMount = () => {
    let { refreshMessages } = this.props;
    console.error('hej mam to');
    refreshMessages();
  }

  componentWillUnmount = () => {
    console.warn('kdyz mizim');
  }

  render() {

    let { messages, refreshMessages } = this.props;
    
    return (
      <div>
        <button onClick={refreshMessages}>Refresh</button>
        {
          messages && messages.map((message: Message) => //to je takový dobrý hack, že to počká až se načte stránka. Kdyby toho bylo moc
            <div key={message.id}>
              <h2>{message.from}</h2>
              <p>{message.message}</p>
            </div>
          ) 
        }
      </div>
    );
  }
}
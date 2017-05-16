import * as React from 'react';
import { sendedMessage } from '../../models/Photos';

interface MessageInputProps extends sendedMessage {
       sendMessage : (message, from) => void,
    messageResult? : any,
     sendedMessage : string,
}

class MessageInput extends React.Component<MessageInputProps, any> {

   constructor() {
        super();
        this.state = {
            inputVal : '',
            inputAuthor : ''
        }
    }

  render() {
    const onSubmitClick = () => {
        this.props.sendMessage(this.state.inputVal, this.state.inputAuthor);
        this.setState({
            inputVal : ''
        });
        //tímhle si mažu ten textarea formulář - teď už zase ne :)
        // location.reload(); 
    }
    const onInputChange = (element : any) => {
        this.setState(
            {
                inputVal: element.target.value
            }
        )
    }

    const onAuthorChange = (element : any) => {
        this.setState(
            {
                inputAuthor: element.target.value
            }
        )
    }



    
    return (
      <div>
          {/*<h2>{this.props.messageResult.from}</h2>
          <div>{this.props.messageResult.message}</div>*/}
          <hr/>
          Od: <input name="author" value={this.state.inputAuthor}  onChange={onAuthorChange} /><br/>
          Zpráva: <textarea name="message" value={this.state.inputVal} onChange={onInputChange} /><br/>
          <button type="submit" onClick={onSubmitClick} name="messageSendButton">Odešli</button>
          {/*<div>{this.props.response}</div>*/}

      </div>
    );
  }
}

export default MessageInput;
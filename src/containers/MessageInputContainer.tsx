import { connect } from 'react-redux';
import { sendMessage} from '../actions';
import MessageInput from '../components/chat/MessageInput';

 const mapStateToProps = (state: any) => {
   return {

   };
 };

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    sendMessage: (message, from)  => {
      dispatch(sendMessage(message, from) )
    }
  };
};

const MessageInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageInput as any);

export default MessageInputContainer;

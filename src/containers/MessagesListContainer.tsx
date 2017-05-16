import { connect } from 'react-redux';
import { showMessages } from '../actions';
import { MessagesList } from '../components/chat/MessagesList';

 const mapStateToProps = (state: any) => {
   return {
     messages: state.showMessages.data
   };
 };

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    refreshMessages: () => {
      dispatch(showMessages(ownProps.id));
    }
  };
};

const MessagesListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagesList as any);

export default MessagesListContainer;

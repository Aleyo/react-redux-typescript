import { connect } from 'react-redux';
import { sortTodos } from '../actions';
import { SortButton } from '../components/todo/sortButton';


const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    onClick: () => {
      dispatch(sortTodos(ownProps.order));
    }
  };
};

const SortLink = connect(
  null,
  mapDispatchToProps
)(SortButton as any);

export default SortLink;

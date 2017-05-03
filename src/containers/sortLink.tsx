import { connect } from 'react-redux';
import { sortTodos } from '../actions';
import { SortButton } from '../components/todo/sortButton';
import { getVisibleTodos } from './VisibleTodoList';

// const mapStateToProps = (state: any) => {
//   return {
//     todos: getVisibleTodos(state.todos, state.visibilityFilter)
//   };
// };

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

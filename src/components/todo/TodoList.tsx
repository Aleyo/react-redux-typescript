import * as React from 'react';
import { TodoRow } from './TodoRow';
import { Todo } from '../../models/Todo';

interface TodoListProp {
  todos: Todo[];
  onTodoClick: Function;
  onToDoDelete: Function;
  onSetPriority: Function;
}

export class TodoList extends React.Component<TodoListProp, any> {

  render() {

    let { todos, onTodoClick, onToDoDelete, onSetPriority } = this.props;

    return (
      <div>
        {todos.map((todo: any) =>
          <TodoRow
            key={todo.id}
            {...todo}
            onClick={() => onTodoClick(todo.id) }
            deleteToDo={() => onToDoDelete(todo.id) }
            setPriority={(priority) => onSetPriority(todo.id, priority)}
            />
        ) }
      </div>
    );
  }
}

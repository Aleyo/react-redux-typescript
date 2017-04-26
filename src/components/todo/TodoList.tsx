import * as React from 'react';
import { TodoRow } from './TodoRow';
import { Todo } from '../../models/Todo';

interface TodoListProp {
  todos: Todo[];
  onTodoClick: Function;
  onToDoDelete: Function;
}

export class TodoList extends React.Component<TodoListProp, any> {

  render() {

    let { todos, onTodoClick, onToDoDelete } = this.props;

    return (
      <div>
        {todos.map((todo: any) =>
          <TodoRow
            key={todo.id}
            {...todo}
            onClick={() => onTodoClick(todo.id) }
            deleteToDo={() => onToDoDelete(todo.id) }
            />
        ) }
      </div>
    );
  }
}

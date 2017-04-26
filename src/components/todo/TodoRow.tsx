import * as React from 'react';
import { Todo } from '../../models/Todo';

interface TodoProp extends Todo {
  onClick: ()=>void;
  deleteToDo: ()=>void;
}

export class TodoRow extends React.Component<TodoProp, any> {
  render() {

    let { onClick, completed, text, deleteToDo } = this.props;
    let checkIcon = completed ? 'glyphicon glyphicon-check' : 'glyphicon glyphicon-unchecked';

    return (
        <div>
        <span onClick={onClick} className="={completed ? 'todo completed' : 'todo'}">
        <span className={checkIcon}></span>
        <span className='todo-text'>{text} </span></span>
        <button onClick={deleteToDo} className='todo-delete'>delete</button>
        </div>
    );
  }
}

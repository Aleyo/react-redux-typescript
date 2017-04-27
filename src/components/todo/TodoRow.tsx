import * as React from 'react';
import { Todo } from '../../models/Todo';

interface TodoProp extends Todo {
  onClick: ()=>void;
  deleteToDo: ()=>void;
  setPriority: (priority: number)=>void;
}

export class TodoRow extends React.Component<TodoProp, any> {
  render() {

    let { onClick, completed, text, deleteToDo, setPriority, priority } = this.props;
    let checkIcon = completed ? 'glyphicon glyphicon-check' : 'glyphicon glyphicon-unchecked';
    const handlePriorityChange = (element: any): void =>{
      const newPriority = element.target.value;
      setPriority(newPriority);
    };

    return (
        <div>
        <span onClick={onClick} className="={completed ? 'todo completed' : 'todo'}">
          <span className={checkIcon}></span>
          <span className='todo-text'>{text} </span></span>
        <button onClick={deleteToDo} className='todo-delete'>delete</button>
        <span> Priority: {priority} </span>
        <select onChange={handlePriorityChange} className='todo-set-priorityr'>
          <option hidden>Select priority</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        </div>
    );
  }
}

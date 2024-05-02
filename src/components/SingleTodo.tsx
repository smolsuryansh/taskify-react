import React from 'react';
import { Todo } from '../model';
import { MdModeEdit, MdDelete, MdCheck } from 'react-icons/md';
import './styles.css';

interface Props {
    todo:Todo,
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ todo, todos, setTodos }:Props) => {
  return (
    <form className="todos_single">
        <span className="todos_single-text">{todo.todo}</span>

        <div>
            <span className="icon">
                <MdModeEdit/>
            </span>
            <span className="icon">
                <MdDelete />
            </span>
            <span className="icon">
                <MdCheck />
            </span>
        </div>

    </form>
  )
}

export default SingleTodo
import React from 'react';
import Todo from './Todo';
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

function TodoList(props) {
    return <ul>{props.items.map(item => <Todo item={item} key={item.id} completed={item.completed} finishItems={props.finishItems} />)}</ul>;
    
};

export default TodoList;
import React, { useState, useEffect } from "react";
import * as Styled from "./todoList.style"

import Item from './Item';

const List = ({ searchWord, list, setTodos }) => {
  const [keyWord, setKeyWord] = useState('');
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    setKeyWord(searchWord);
    setTodoList(list);
  }, [searchWord, list])

  const setList = (list) => {
    localStorage.setItem('todolist', JSON.stringify(list));
    setTodos(list);
  }

  return (
    <div>
      <Styled.List>
        {todoList.map((item, index) => item.todo.includes(keyWord) ? (
          <Item
            todo={item.todo}
            key={index}
            index={index}
            list={todoList}
            setList={setList}
            status={list[index] !== undefined ? list[index].status : false}
          >
            {item.todo}
          </Item>
        ) : null
        )}
      </Styled.List>

    </div>
  )
}

export default List;
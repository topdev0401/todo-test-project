import React, { useState, useEffect } from 'react'
import Icons from '../../assets/icons'

import { TOKEN } from '../../utils/constants'

import {
    Navbar,
    List,
    Styled
} from '../../components/todolist/'

import { useNavigate } from 'react-router-dom'

const TodoList = () => {
    const navigate = useNavigate();

    const [ keyWord, setKeyWord ] = useState('');
    const [ todoList, setTodoList ] = useState([]);

    useEffect(() => {
        const currentToken = localStorage.getItem('token');
        if(currentToken !== TOKEN) navigate('/');

        const list = JSON.parse(localStorage.getItem('todolist'));
        if(list === undefined || list === null) setTodoList([]);
        else setTodoList(list);
    }, [])

    const searchHandle = (e) => {
        const word = e.target.value;
        setKeyWord(word);
    }

    const newHandle = () => {
        setTodoList([{todo: 'New Todo', status: true}, ...todoList]);
    }

    return (
        <div>
            <Navbar />
            <Styled.Container>
                <Styled.H2> My To-Do List </Styled.H2>
                <Styled.Board>
                    <Styled.TodoBar>
                        <Styled.FieldWrapper>
                            <Styled.IconWrapper> {Icons.searchicon} </Styled.IconWrapper> 
                            <Styled.SearchInput onChange={searchHandle} placeholder='Search'/>
                        </Styled.FieldWrapper>
                        <Styled.NewButton onClick={newHandle}> New </Styled.NewButton>
                    </Styled.TodoBar>
                    <List 
                        searchWord={keyWord} 
                        list={todoList}
                        setTodos={setTodoList}
                    />
                </Styled.Board>
            </Styled.Container>
        </div>
    )
}

export default TodoList;
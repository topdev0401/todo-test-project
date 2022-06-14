import React, { useState, useEffect } from "react"
import * as Styled from './todoList.style'

import Icons from '../../assets/icons'

const Item = ({ todo, setList, index, list, status }) => {
    const [ flag, setFlag ] = useState(status);
    const [ currentValue, setValue ] = useState(todo);
    const [ busy, setBusy ] = useState(false);

    useEffect(() => {
        setFlag(status);
        setValue(todo);
    }, [list]);

    const handleEdit = () => {
        setFlag(true);
    }

    const handleDelete = () => {
        console.log(list);
        setList(list.filter((item, idx) => ( idx !== index )));
    }

    const handleSave = () => {
        setList(list.map((item, idx) => ({
            todo: (idx === index ? currentValue : item.todo),
            status: false
        })));
        setFlag(false);
    }

    const handleChange = (e) => {
        const val = e.target.value;
        if(!(val.length >= 1 && val.length <= 15)) {
            setBusy(true);
        } else {
            setBusy(false);
        }
        setValue(val);
    }

    const showMode = (
        <Styled.Item>
            {currentValue}
            <Styled.IconGroup>
                <Styled.IconButton onClick={handleEdit}> {Icons.pencilIcon} </Styled.IconButton>
                <Styled.IconButton onClick={handleDelete}> {Icons.trashIcon} </Styled.IconButton>
            </Styled.IconGroup>
        </Styled.Item>
    )

    const editMode = (
        <Styled.Item>
            <input value={currentValue} onChange={handleChange}/>
            <Styled.SaveButton onClick={handleSave} busy={busy}> Save </Styled.SaveButton>
        </Styled.Item>
    )

    return (
        (flag ? editMode : showMode)
    )
}

export default Item;
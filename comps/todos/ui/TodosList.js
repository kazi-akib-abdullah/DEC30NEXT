import { Button } from '@chakra-ui/button'
import { Checkbox } from '@chakra-ui/checkbox'
import { Input } from '@chakra-ui/input'
import { Flex, Heading } from '@chakra-ui/layout'
import { observer } from 'mobx-react-lite'
import React from 'react'
import todosStore from '../store/todosStore'

function TodoListItems() {
    return (
        <>
            {todosStore.todosList.map((todo) => (
                <Flex pt={2} key={todo.id}>
                    <Checkbox/>
                    <Input mx={2} onChange={(e) => DOMRectReadOnly} value={todo.text} />
                    <Button>Delete</Button>
                </Flex>
            ))}
        </>
    );
}

const TodoListObserver = observer(TodoListItems);

function TodoList() {
    return(
        <>
            <Heading>Todo List</Heading>
            <TodoListObserver />
        </>
    )
}

export default TodoList

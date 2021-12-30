import { Box } from '@chakra-ui/layout'
import React from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodosList'

function TodosCompIndex() {
    return (
        <>
            <Box maxWidth="8xl" margin="auto" p={5}>
                <AddTodo />
                <TodoList/>
            </Box>
        </>
    )
}

export default TodosCompIndex

import { Button } from '@chakra-ui/button'
import { Input } from '@chakra-ui/input'
import { Grid } from '@chakra-ui/layout'
import { observer } from 'mobx-react-lite'
import React from 'react'
import todosStore from '../store/todosStore'

function AddTodo() {
    return (
        <Grid pt={2} templateColumns= "5fr 1fr" columnGap={3}>
            <Input onChange={(e) => (todosStore.todo.text = e.target.value)} value={todosStore.todo.text} placeholder="New Todo" />
            <Button onClick={() => todosStore.addTodo()}>Add Todo</Button>
        </Grid>
    )
}

export default observer(AddTodo)

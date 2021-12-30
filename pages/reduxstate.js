import { Button } from '@chakra-ui/button'
import { Heading } from '@chakra-ui/layout'
import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, incrementByAmount } from '../comps/redux/counter'
import React from 'react'

function ReduxToolkit() {
    const { count } = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
        <div>
            <Heading>Count: {count}</Heading>
            <Button onClick={()=> dispatch(increment())} >Increment</Button>
            <Button onClick={()=> dispatch(decrement())}>Decrement</Button>
            <Button onClick={()=> dispatch(incrementByAmount(33))}>Increment by 33</Button>
        </div>
    )
}

export default ReduxToolkit

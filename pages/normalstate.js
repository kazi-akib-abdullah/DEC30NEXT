import { Button } from '@chakra-ui/button'
import { Heading } from '@chakra-ui/layout'
import React, { useState } from 'react'

function NormalState() {
    const [count, setcount] = useState(0);
    return (
        <div>
            <Heading>Count: {count}</Heading>
            <Button onClick={()=> setcount(count+1)} >Increment</Button>
            <Button onClick={()=> setcount(count-1)}>Decrement</Button>
        </div>
    )
}

export default NormalState

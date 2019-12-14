import React from 'react'
import { Button } from 'react-bootstrap'

 const FourOhFour = (props) => {
   const  goBack = (e) => {
        e.preventDefault()
        props.history.push('/')
    }



    return (
        <>
        <div>
        <Button 
        onClick={(e) => goBack(e)}
        style={{ width: '100%', color: 'black' }}
        size='lg'
         variant="outline-danger">
         Press here to go back , you are lost
        </Button>
        <iframe src="https://giphy.com/embed/yZgHsSVnzIjew" width="480" height="356" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        </div>
        </>
    )
}
export default FourOhFour
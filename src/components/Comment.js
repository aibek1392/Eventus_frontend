import React, { Component } from 'react'
import { FormControl, Form, InputGroup, Button } from 'react-bootstrap'
import './Event.css'
// import './Showdetail.scss'

export default class Comment extends Component {


    state = {
        commentBox: [],
        content: "",
        commentArray: this.props.singleEvent.event_comments
    }



    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };


    handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:3001/event_comments", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                content: this.state.content,
                user_id: this.props.userId,
                event_id: this.props.singleEvent.id
            })
        })
            .then(r => r.json())
            .then(r => {
                console.log(r)
                // const slicedData = r.sort((a, b) => b.id - a.id);
                this.setState({
                    commentArray: [...this.state.commentArray, r],
                    content: ""
                })
            })
    }



    //   componentDidMount(){
    //     // console.log("hello")
    //     fetch("http://localhost:3001/event_comments")
    //     .then(r => r.json())
    //     .then(res => {



    //       this.setState({
    //           commentBox: res
    //       })

    //     })
    //   }




    render() {
        const convertedArray = this.state.commentArray.sort((a,b) => b.id - a.id)
        console.log("fromComment", this.props)
        const eventComment = convertedArray.map(comment => { 
            
            return <div className="scroll-list">
                        <p>{comment.user.username}:</p>  <h5>{comment.content}</h5>
                      
                   </div>
        })
        // const convertedArray = eventComment.sort((a,b) => b.id - a.id)


        return (
            <div  >
                <Form onSubmit={e => this.handleSubmit(e)} >
                    <InputGroup  >
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-default"><span>💬</span></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            // value={this.state.categoryè}
                            // onChange={this.onChange}
                            // onChange={this.convertAddress}
                            name="content"
                            value={this.state.content}
                            placeholder="...Enter  comment"
                            aria-label="Default"
                            onChange={this.handleChange}
                            aria-describedby="inputGroup-sizing-default"
                        />
                        <Button
                            id="submit-button"
                            style={{
                                "font-family": "Special Elite"
                            }}
                            type="submit"
                        >
                            Submit Comment
            </Button>
                    </InputGroup>
                </Form>
                <div>

                    <div>
                        {eventComment}
                    </div>


                </div>
            </div>
        )
    }
}

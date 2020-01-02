import React, { Component } from 'react'
import {Button, FormControl, Form, InputGroup} from 'react-bootstrap'
import './Event.css'
import {  Comment,  Header } from 'semantic-ui-react'
// import './Showdetail.scss'

export default class CommentEvent extends Component {


    state = {
        commentBox: [],
        content: "",
        commentArray: this.props.singleEvent.event_comments
        // currentUser: {}
    }


   

    // componentDidMount() {
    //     fetch(`http://localhost:3001/users/${this.props.userID}`)
    //         .then(r => r.json())
    //         .then(resObj => {
    //             console.log(resObj)
    //             if(this.props.userID){
    //                 this.setState({
    //                     currentUser: resObj
    //                 })
    //             }
    //         })
    // }


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
        console.log("fromComment", this.state)
        const eventComment = convertedArray.map(comment => { 
            return <div >
                       
                      
                            <Comment>
                            <Comment.Avatar src={comment.user.image} />
                            <Comment.Content>
                            <Comment.Author  as='a'><strong>{comment.user.username} says: </strong>
        <Comment.Text>  {comment.content}</Comment.Text>

                            </Comment.Author>
                            <Comment.Metadata>
                                {/* <div>Today at 5:42PM</div> */}
                            </Comment.Metadata>
                            
                            </Comment.Content>
                            </Comment>
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

                    <div  class="comment-box">
                        {eventComment}
                    </div>


                </div>
            </div>
        )
    }
}

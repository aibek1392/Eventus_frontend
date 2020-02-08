import React, { Component } from 'react'
import { Button, FormControl, Form, InputGroup } from 'react-bootstrap'
import '../Styling/Event.css'
import { Comment } from 'semantic-ui-react'
import { withAlert } from "react-alert";
import { ActionCableConsumer } from "react-actioncable-provider";

class CommentEvent extends Component {

    state = {
        commentBox: [],
        content: "",
        commentArray: this.props.singleEvent.event_comments
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

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
    }

    postComment = eventComment => {
        this.setState({
            commentArray: [...this.state.commentArray, eventComment],
            content: ""
        })
        this.props.alert.show(<div style={{ color: 'white' }}>{eventComment.content}</div>);
    }

    render() {
        const convertedArray = this.state.commentArray.sort((a, b) => b.id - a.id)
        const eventComment = convertedArray.map(comment => {
            return <div key={comment.id}>
                <Comment>
                    <Comment.Avatar src={comment.user.image} />
                    {' '}
                    <Comment.Content>
                            <Comment.Author as='a'><strong>{comment.user.username} says: {' '}</strong>
                                <Comment.Text>  {comment.content}</Comment.Text>
                            </Comment.Author>
                            <Comment.Metadata>
                                <div style={{ color: "grey" }}>date:{comment.created_at.slice(0, 10)}</div>
                            </Comment.Metadata>
                    </Comment.Content>
                </Comment>
            </div>
        })
        return (
            <div>
                <ActionCableConsumer
                    channel={{ channel: "EventCommentsChannel" }}
                    onReceived={eventComment => {
                        this.postComment(eventComment);
                    }}
                />
                <Form onSubmit={e => this.handleSubmit(e)} >
                    <InputGroup  >
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-default"><span>💬</span></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
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
                            fontFamily: "Special Elite"
                            }}
                            type="submit"
                        >
                            Submit
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

export default withAlert()(CommentEvent);

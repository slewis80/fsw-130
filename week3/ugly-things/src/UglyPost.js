import React from "react";

class UglyPost extends React.Component {
    state = {
        postId: 0,
        newPostTitle: "",
        newPostDescription: "",
        newComment: {
            id: 200,
            text: ""
        },
        comments: []
    }

    // Post Editing
    deletePost = (e) => {
        console.log(e.target.id)
        let thisPost = document.getElementById(e.target.id)
        thisPost.remove()
    }

        // edit post button - onclick
    editPost = (e) => {
        let thisPost = e.target.parentNode.id;
        this.setState({postId: thisPost}, () => {
            console.log(this.state.postId)
        });

        let titleId = `postTitle${thisPost}`;
        let descriptionId = `postDescription${thisPost}`;
        let newTitleInputId = `editTitleInput${thisPost}`;
        let newDescriptionInputId = `editDescriptionInput${thisPost}`;
        let editButtonId = `editPostButton${thisPost}`;
        let updateButtonId = `updatePostButton${thisPost}`;

        document.getElementById(titleId).style.display = "none";
        document.getElementById(descriptionId).style.display = "none";
        document.getElementById(newTitleInputId).style.display = "block";
        document.getElementById(newDescriptionInputId).style.display = "block";
        document.getElementById(editButtonId).style.display = "none";
        document.getElementById(updateButtonId).style.display = "inline-block";

    }

        // onchange
    changePost = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value}, () => console.log(this.state));
    }

        // update post button - onclick
    updatePost = (e) => {
        let thisPost = e.target.parentNode.id;
        let titleId = `postTitle${thisPost}`;
        let descriptionId = `postDescription${thisPost}`;
        let newTitleInputId = `editTitleInput${thisPost}`;
        let newDescriptionInputId = `editDescriptionInput${thisPost}`;
        let editButtonId = `editPostButton${thisPost}`;
        let updateButtonId = `updatePostButton${thisPost}`;

        document.getElementById(titleId).style.display = "block";

        document.getElementById(descriptionId).style.display = "block";

        document.getElementById(newTitleInputId).style.display = "none";
        document.getElementById(newDescriptionInputId).style.display = "none";
        document.getElementById(editButtonId).style.display = "inline-block";
        document.getElementById(updateButtonId).style.display = "none";

        this.props.updatePostValue(this.state.postId, this.state.newPostTitle, this.state.newPostDescription);
    }

    // Comment Editing
        // onchange
    changeCommentText = (e) => {
        const {value} = e.target;
        this.setState({newComment: {id: this.state.newComment.id, text: value}
        }, () => console.log(this.state.newComment)
    )}
    
        // comment button - onclick
    addComment = (e) => {
        let thisPost = e.target.parentNode.id;
        let commentBoxId = `commentBox${thisPost}`;
        let updateCommentId = `addCommentButton${thisPost}`;

        document.getElementById(commentBoxId).style.display = "block";
        document.getElementById(updateCommentId).style.display = "block";
    }

        // add comment button - onclick
    postComment = (e) => {
        e.preventDefault();

        let thisPost = e.target.parentNode.id;
        let commentBoxId = `commentBox${thisPost}`;
        let updateCommentId = `addCommentButton${thisPost}`;

        document.getElementById(commentBoxId).style.display = "none";
        document.getElementById(updateCommentId).style.display = "none";

        this.setState((prevState) => ({newComment: {
            id: prevState.newComment.id + thisPost + 1,
            text: this.state.newComment.text
            }
        }), () => this.setState({
            comments: this.state.comments.concat(this.state.newComment)})
        )
    }


    render() {
        return(
            <div className="uglyPost" id={this.props.post.id}>
                <h2 className="postTitle" id={`postTitle${this.props.post.id}`}>{this.props.post.title}</h2>

                <input name="newPostTitle" className="editTitleInput" id={`editTitleInput${this.props.post.id}`} placeholder={this.props.post.title} onChange={this.changePost}></input>

                <h4 className="postDescription" id={`postDescription${this.props.post.id}`}>{this.props.post.description}</h4>

                <input name="newPostDescription" className="editDescriptionInput" id={`editDescriptionInput${this.props.post.id}`} placeholder={this.props.post.description} value={this.state.newPostDescription} onChange={this.changePost}></input>

                <br/>

                <img className="postImage" src={this.props.post.imgUrl} alt="ugly thing"/>

                <br/>

                <span className="deletePostButton" id={this.props.post.id} onClick={this.deletePost}>Delete</span>

                <span className="editPostButton" id={`editPostButton${this.props.post.id}`} onClick={this.editPost}>Edit</span>

                <span className="updatePostButton" id={`updatePostButton${this.props.post.id}`} onClick={this.updatePost}>Update</span>

                <span className="commentButton" id={`commentButton${this.props.post.id}`} onClick={this.addComment}>Comment</span>

                <br/>

                <textarea name="text" className="commentBox" id={`commentBox${this.props.post.id}`} onChange={this.changeCommentText}/>

                <span className="addCommentButton" id={`addCommentButton${this.props.post.id}`} onClick={this.postComment}>Add Comment</span>

                <ul className="commentsContainer" id={`comments${this.props.post.id}`}>
                    {this.state.comments.map(comment => (
                        <div id={comment.id}>
                            <span className="commentDeleteButton" id={comment.id} onClick={this.deletePost}>X</span>
                            <li className="comment" id={comment.id} key={comment.id}>{comment.text}</li>
                            <hr/>
                        </div>
                        ))
                    }
                </ul>
        </div>

        )
    }
}

export default UglyPost;
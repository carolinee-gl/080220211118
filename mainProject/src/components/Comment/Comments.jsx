import React from 'react';
import AddNewComment from './NewComment'

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.sendClick = this.sendClick.bind(this);
    this.state = {
      comments: props.comments,
    }
  }
  sendClick(text) {
    const date = new Date();
    let options = {
      year: "numeric",
      month: "long",
      day: "numeric"
    }
    const user = {
      name: 'Вы',
      date: `${date.toLocaleDateString('ru-RU', options)}`,
      text: text
    };
    const arr = this.state.comments;
    arr.push(user);
    this.setState({
      comments: arr
    })
  }

  render() 
  {
    return (
    <div>
      <div className="wrapper reviews">{
      this.state.comments.map((comment, c) => {

        return (
          <div className="reviewsRefer" key={c}>
            <div className="commentName">{comment.name}
              <span className="commentData">{comment.date}</span>
            </div>
            <div className="commentText">{comment.text}
            </div>
          </div>
        )

      })}
    </div>
      <AddNewComment handler={this.sendClick} />
    </div>
    )
  }
}




export default Comments;
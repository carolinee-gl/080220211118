import React from 'react';

class AddNewComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: ''
    }
  }
  componentDidMount() {
  document.addEventListener('keydown', (e) => {if (e.ctrlKey && e.keyCode === 13) { this.addNewComment(); }})
  }
  eventHandler(e) {
    this.setState({
      val: e.target.value
    })
  }
  addNewComment() {
    if (this.state.val) {
      this.props.handler(this.state.val);
      this.setState({
        val: ''
      });
    }
  }
  render() {
    return (
      <div className="addReviews">
        <textarea
          className="addReviewsText"
          title="Напишите отзыв"
          value={this.state.val}
          onChange={this.eventHandler.bind(this)} />
        <button
          className="addReviewsButton"
          onClick={this.addNewComment.bind(this)}>
          Написать консультанту
        </button>
      </div>
    )
  }
}

export default AddNewComment;

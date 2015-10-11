Vote = React.createClass({
  render() {
    return (
      <div>
        <h1>Vote now!</h1>
        <p>Poll ID is {this.props.pollId}. This is here for debugging purpose only.</p>
        <p>Choices go here.</p>
      </div>
    );
  }
});

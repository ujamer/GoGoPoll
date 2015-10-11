Vote = React.createClass({
  render() {
    return (
      <div>
        <h1>Vote now!</h1>
        <p>Poll ID is <strong>{this.props.pollId}</strong>. This is here for debugging purpose only.</p>
        <p>Choices go here.</p>
      </div>
    );
  }
});

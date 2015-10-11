Results = React.createClass({
  getInitialState() {
    return { poll: {} };
  },
  componentDidMount() {
    var self = this;
    Meteor.call('getPoll', this.props.resultId, function(error, poll) {
      if (error) {
        alert('There was an error getting a poll.');
      } else {
        self.setState({ poll });
      }
    });
  },
  render() {
    return (
      <div>
        <h1>Poll Results</h1>
        <p>The poll URL is {this.state.poll.url}. Give this URL to your participants.</p>
        <p>The results poll ID is {this.props.resultId}. This is here for debugging purpose only.</p>
      </div>
    );
  }
});

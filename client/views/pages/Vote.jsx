Vote = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    var handle = Meteor.subscribe('pollFromPollId', this.props.pollId);

    return {
      loading: !handle.ready(),
      poll: Polls.findOne({ url: this.props.pollId })
    };
  },

  render() {
    if (this.data.loading) {
      return <div></div>
    }

    return (
      <div>
        <h1>Vote now!</h1>
        <p>Poll ID is <strong>{this.data.poll.url}</strong>. This is here for debugging purpose only.</p>
        <p>Choices go here.</p>
      </div>
    );
  }
});

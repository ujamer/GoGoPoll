Results = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    var handle = Meteor.subscribe('pollFromResultId', this.props.resultId);

    return {
      loading: !handle.ready(),
      poll: Polls.findOne({ resulturl: this.props.resultId })
    };
  },

  render() {
    if (this.data.loading) {
      return <div></div>;
    }

    return (
      <div>
        <h1>Poll Results</h1>
        <p>The poll URL is <strong>{this.data.poll.url}</strong>. Give this URL to your participants.</p>
        <p>The results poll ID is <strong>{this.props.resultId}</strong>. This is here for debugging purpose only.</p>
      </div>
    );
  }
});

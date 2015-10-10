Create = React.createClass({
  onSubmitClicked() {
    FlowRouter.go('/result/dummyPollId');
  },
  render() {
    return (
      <div>

        <h1>Create a New Poll</h1>

        <div className="input-field">
          <input id="poll_title" type="text" className="validate" />
          <label htmlFor="poll_title">Poll Title</label>
        </div>

        <a className="waves-effect waves-light btn-large" onClick={this.onSubmitClicked} role="button">Submit</a>
      </div>
    );
  }
});

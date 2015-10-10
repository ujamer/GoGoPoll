Home = React.createClass({
  onCreateNewClicked() {
    FlowRouter.go('/new');
  },

  render() {
    return (
      <div>
        <h1>Welcome to GoGoPoll</h1>
        <a className="waves-effect waves-light btn-large" onClick={this.onCreateNewClicked} role="button">Create New</a>
      </div>
    );
  }
});

Create = React.createClass({
  onFormSubmit(event) {
    event.preventDefault();

    var form = new ParseForm(event.target);
    var pollContext = Polls.simpleSchema().namedContext();

    pollContext.validate({
      title: form.title,
      url: form.url
    });

    if (pollContext.isValid()) {
      FlowRouter.go('/result/dummyPollId');
    } else {
      alert('Field validation failed. Please correct any errors.');
    }
  },
  render() {
    return (
      <div>

        <h1>Create a New Poll</h1>

        <div className="row">

          <form className="col s12" onSubmit={this.onFormSubmit}>

            <div className="row">

              <div className="input-field col s6">
                <TextField id="title" name="title" labelText="Poll Title"/>
              </div>

              <div className="input-field col s6">
                <TextField id="url" name="url" labelText="Poll URL"/>
              </div>

            </div>

            <input className="waves-effect waves-light btn-large right" type="submit" value="Submit" />

          </form>

        </div>

      </div>
    );
  }
});

New = React.createClass({
  onFormSubmit(event) {
    event.preventDefault();

    var pollContext = Polls.simpleSchema().namedContext();
    var form = new ParseForm(event.target);
    var formData = {
      title: form.title,
      url: form.url
    };

    pollContext.validate(formData);

    if (pollContext.isValid()) {
      Meteor.call('createPoll', formData, function(error, newPollId) {
        if (error) {
            throw error;
        } else {
            FlowRouter.go(`/results/${newPollId}`);
        }
      });
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
                <TextField name="title" labelText="Poll Title"/>
              </div>

              <div className="input-field col s6">
                <TextField name="url" labelText="Poll URL"/>
              </div>

            </div>

            <input className="waves-effect waves-light btn-large right" type="submit" value="Submit" />

          </form>

        </div>

      </div>
    );
  }
});

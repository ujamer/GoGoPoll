New = React.createClass({
  onFormSubmit(event) {
    event.preventDefault();

    var form = new ParseForm(event.target);
    var formData = {
      title: form.title,
      url: form.url
    };

    Meteor.call('createPoll', formData, function(error, newPollId) {
      if (error) {
        alert('Field validation failed. Please correct any errors.');
        throw error;
      } else {
        FlowRouter.go(`/results/${newPollId}`);
      }
    });
  },
  render() {
    return (
      <div>

        <h1>Create a New Poll</h1>

        <div className="row">

          <form className="col s12" onSubmit={this.onFormSubmit}>

            <div className="row">

              <div className="input-field col s6">
                <FormField type="text" name="title" labelText="Poll Title" />
              </div>

              <div className="input-field col s6">
                <FormField type="text" name="url" labelText="Poll URL" />
              </div>

            </div>

            <input className="waves-effect waves-light btn-large right" type="submit" value="Submit" />

          </form>

        </div>

      </div>
    );
  }
});

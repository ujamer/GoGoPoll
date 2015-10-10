New = React.createClass({
  onFormSubmit(event) {
    event.preventDefault();

    var form = new ParseForm(event.target);
    var formData = {
      question: form.question,
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

        <div className="row">

          <form className="col s12" onSubmit={this.onFormSubmit}>

            <div className="row">
              <div className="input-field col s12">
                <QuestionField placeholder="What is your favourite colour?" name="question" labelText="Ask A Question." />
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
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

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

  componentWillMount() {
    LocalChoices = new Mongo.Collection(null);

    var choices = [
      { text: 'Yes', count: 0 },
      { text: 'No', count: 0 },
    ];

    for (var i = 0; i < choices.length; i++) {
      LocalChoices.insert(choices[i]);
    }
  },

  render() {
    return (
      <div>

        <div className="row">
          <form className="col s12" onSubmit={this.onFormSubmit}>
            <div className="row">
              <div className="input-field col s12 question-field">
                <FormField type="text" placeholder="Do you like Pizza?" name="question" labelText="Ask A Question." />
              </div>
            </div>

            <ChoiceList />

            <div className="divider" />

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

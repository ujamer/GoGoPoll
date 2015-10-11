ChoiceList = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      localChoiceList: LocalChoices.find({}).fetch()
    };
  },

  changeHandler(e) {
    LocalChoices.update(e.key, {
      $set: {text: e.value}
    });
  },

  onAddPollChoice() {
    event.preventDefault();
    LocalChoices.insert({text:"",count:0});
  },

  renderChoices() {
    return this.data.localChoiceList.map((choice) => {
      return <ChoiceItem key={choice._id} choice={choice} onChange={this.changeHandler}/>;
    });
  },

  render() {
    return (
      <div className="row">
        <div className="col s12">

          <ul className="collection with-header">
            <li className="collection-header"><h5>Participants can select from these options:</h5></li>
            {this.renderChoices()}
          </ul>
        </div>

        <div className="col s12">
          <button className="btn waves-effect waves-light blue" onClick={this.onAddPollChoice} name="action">Add New Choice
            <i className="zmdi zmdi-plus blue left"></i>
          </button>
        </div>
      </div>
    );
  }
});

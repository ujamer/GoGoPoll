QuestionField = React.createClass({
  render() {
    var id = Random.id();

    return (
      <div>
        <input id={id} placeholder={this.props.placeholder} type="text" className="validate" name={this.props.name} />
        <label htmlFor={id} className="active">{this.props.labelText}</label>
      </div>
    );
  }
});

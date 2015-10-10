TextField = React.createClass({
  render() {
    var id = Random.id();

    return (
      <div>
        <input id={id} type="text" className="validate" name={this.props.name} />
        <label htmlFor={id}>{this.props.labelText}</label>
      </div>
    );
  }
});

TextField = React.createClass({
  render() {
    return (
      <div>
        <input id={this.props.id} type="text" className="validate" name={this.props.name} />
        <label htmlFor={this.props.id}>{this.props.labelText}</label>
      </div>
    );
  }
});

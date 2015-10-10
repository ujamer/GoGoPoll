FormField = React.createClass({
  render() {
    var id = Random.id();

    switch (this.props.type) {
      case "text":
      case "url":
        return (
          <div>
            <input id={id} type={this.props.type} className="validate" name={this.props.name} />
            <label htmlFor={id}>{this.props.labelText}</label>
          </div>
        );
      default:
        throw new Error('This type is not supported.');
    }
  }
});

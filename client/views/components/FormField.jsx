FormField = React.createClass({
  getDefaultProps: function() {
    return {
      active: false,
      placeholder: ""
    };
  },
  render() {
    var id = Random.id();

    switch (this.props.type) {
      case "text":
      case "url":
        return (
          <div>
            <input id={id} placeholder={this.props.placeholder} type={this.props.type} className="validate" name={this.props.name} />
            <label className={this.props.active ? "active" : "" } htmlFor={id}>{this.props.labelText}</label>
          </div>
        );
      default:
        throw new Error('This type is not supported.');
    }
  }
});

FormField = React.createClass({
  propTypes: {
    value:      React.PropTypes.string,
    onChange:   React.PropTypes.func
  },

  changeHandler: function(e) {
    if (typeof this.props.onChange === 'function') {
      this.props.onChange({
        key:e.target.id,
        value:e.target.value
      });
    }
  },

  render() {
    var id = _.isUndefined(this.props.id) ? Random.id() : this.props.id;

    switch (this.props.type) {
      case "text":
      case "url":
        return (
          <div>
            <input id={id} value={this.props.value}  onChange={this.changeHandler} placeholder={this.props.placeholder} type={this.props.type} className="validate" name={this.props.name} />
            <label className={_.isUndefined(this.props.placeholder) ? "" : 'active'} htmlFor={id}>{this.props.labelText}</label>
          </div>
        );
      default:
        throw new Error('This type is not supported.');
    }
  }
});

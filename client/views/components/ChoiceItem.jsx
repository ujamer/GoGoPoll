ChoiceItem = React.createClass({
  propTypes: {
    choice: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func
  },

  changeHandler: function(e) {
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(e);
    }
  },

  render() {
    return (
      <li className="collection-item dismissable">

          <div className="row">

            <div className="input-field col s11">
              <FormField id={this.props.choice._id} value={this.props.choice.text} onChange={this.changeHandler} type="text" name="choice" />
            </div>

            <div className="col s1">
              <a className="secondary-content btn-floating btn waves-effect waves-light red">
                <i className="zmdi zmdi-delete zmdi-hc-2x"></i>
              </a>
            </div>
          </div>
      </li>
    );
  }
});

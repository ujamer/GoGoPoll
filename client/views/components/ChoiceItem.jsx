ChoiceItem = React.createClass({
  render() {
    var id = Random.id();
    var divStyle = {
      width: '90%'
    };
    return (
      <li className="collection-item dismissable">

          <div className="row">

            <div className="input-field col s11">
              <FormField type="text" name="choice" />
            </div>

            <a className="secondary-content btn-floating btn waves-effect waves-light red">
              <i className="zmdi zmdi-delete zmdi-hc-2x"></i>
            </a>

          </div>

      </li>
    );
  }
});

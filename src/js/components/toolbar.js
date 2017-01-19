import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

export default class ToolbarPanel extends React.Component {
  render() {
    return (
      <Toolbar>
        <ToolbarTitle text="Your todo App" />
          <RaisedButton label="Add new" primary={true} className="toolbar__btn" onClick={this.props.addAction}/>
      </Toolbar>
    );
  }
};

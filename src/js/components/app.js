import React from 'react';
import Sidebar from './sidebar';
import ToolbarPanel from './toolbar';
import Reducer from '../reducers'
import * as Actions from '../actions';
import { combineReducers, bindActionCreators, createStore, compose } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';

const store = createStore(Reducer);

store.dispatch(Actions.addTodo('Test todo', "Details"));

injectTapEventPlugin();

export default class App extends React.Component {
    render() {
        const actions = bindActionCreators(Actions, store.dispatch);
        return (
          <MuiThemeProvider>
            <div className="app">
                <Provider store={store}>
                    <ToolbarPanel addAction={actions.addTodo}/>
                </Provider>
                <Provider store={store}>
                    <Sidebar actions={actions}/>
                </Provider>
            </div>
          </MuiThemeProvider>
        );
    }
}

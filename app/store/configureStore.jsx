var redux = require('redux');
var { searchTextReducer, showCompleteReducer, todosReducer } = require('reducers');

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showComleted: showCompleteReducer,
    todos: todosReducer
  });
  var store = redux.createStore(reducer, initialState, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};

import * as React from 'react';
import {Provider} from 'mobx-react';
import {configure} from 'mobx';
import * as stores from './stores';
import Main from './views/Main';

configure({strict: 'always'});

class App extends React.Component {
  render() {
    return (
      <Provider {...stores}>
        <Main />
      </Provider>
    );
  }
}

export default App;

import * as React from 'react';
import {StatusBar} from 'react-native';
import Routers from '../routers';
import {ApplicationProvider} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

class Main extends React.Component {
  render() {
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <StatusBar backgroundColor="#0d83e0" />
        <Routers />
      </ApplicationProvider>
    );
  }
}

export default Main;

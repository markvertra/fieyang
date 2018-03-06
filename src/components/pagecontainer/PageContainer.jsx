import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Loading from '../loading';
import React from 'react';
import STYLES from './PageContainer.module.scss';
import { Switch, Route } from 'react-router-dom';

const c = className => STYLES[className] || 'UNKNOWN';

function PageContainer() {
  return (
    <section className={c('PageContainer')}>
      <MuiThemeProvider>
        <h1> Faiyang </h1>
        {/* <Switch>
          <Route path='/quiz' component={WelcomePage} />
          <Route path='/questions/:number' render={QuestionPage} />
          <Route path='/results' component={ResultsPage} />
          <Route path='/' component={WelcomePage} />
          <Route path='/:id' component={WelcomePage} />
        </Switch> */}
      </MuiThemeProvider>
    </section>
  );
}

export default PageContainer;
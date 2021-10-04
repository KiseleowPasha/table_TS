import { Redirect, Route, Switch } from 'react-router';
import { Pagination } from './pagination/pagination';
import { Table } from './table/table';

export const App = () => {
  return (
    <Switch>
      <Route path='/:number'>
        <>
          <Pagination />
          <Table />
        </>
      </Route>
      <Redirect from='/' to='/1'></Redirect>
    </Switch>
  );
};

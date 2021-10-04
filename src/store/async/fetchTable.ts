import { createActionLoadTable } from '../reducerTable';

const url = 'https://jsonplaceholder.typicode.com/comments';
export const fetchTable = () => (dispatch: any) =>
  fetch(url)
    .then((response) => response.json())
    .then((comments) => dispatch(createActionLoadTable(comments)));

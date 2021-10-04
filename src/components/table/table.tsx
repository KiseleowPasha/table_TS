import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { RootState } from '../../store';
import { fetchTable } from '../../store/async/fetchTable';
import './table.css';

export const Table = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state: RootState) => state.table.comments);
  const loaded = useSelector((state: RootState) => state.table.loaded);
  const currentNumber = Number(useParams<{ number?: string }>().number);

  const initCurrentComments = () => {
    const dipslayComments = [];
    for (let i = (currentNumber - 1) * 10; i < currentNumber * 10; i++) {
      dipslayComments.push(comments[i]);
    }
    return dipslayComments;
  };

  const currentComments = initCurrentComments();

  useEffect(() => {
    dispatch(fetchTable());
  }, []);
  
  return loaded ? (
    <table>
      <thead>
        <tr>
          <td className='name'>Name</td>
          <td className='email'>Email</td>
          <td className='text'>Text</td>
          <td className='id'>Id</td>
        </tr>
      </thead>
      <tbody>
        {currentComments.map((comment) => (
          <tr key={comment.id}>
            <td className='name'>{comment.name}</td>
            <td className='email'>{comment.email}</td>
            <td className='text'>{comment.body}</td>
            <td className='id'>{comment.id}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <h1>Загрузка...</h1>
  );
};

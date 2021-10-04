import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { RootState } from '../../store';
import './pagination.css';

export const Pagination = () => {
  const currentNumber = Number(useParams<{ number?: string }>().number);

  const comments = useSelector((state: RootState) => state.table.comments);
  const maxNumber = Math.floor(comments.length / 10);
  
  const changeCurrentNumberHandle = (number: number) => {
    if (number > 0 && number <= maxNumber) return number;
    else return currentNumber;
  };

  const initDisplayNumbers = () => {
    let displayNumbers = [];
    if (currentNumber >= 1 && currentNumber <= 5) {
      for (let i = 1; i <= 10; i++) {
        displayNumbers.push(i);
      }
      return displayNumbers;
    } else if (currentNumber <= maxNumber && currentNumber >= maxNumber - 4) {
      for (let i = maxNumber - 9; i <= maxNumber; i++) {
        displayNumbers.push(i);
      }
      return displayNumbers;
    } else {
      for (let i = currentNumber - 4; i < currentNumber + 6; i++) {
        displayNumbers.push(i);
      }
      return displayNumbers;
    }
  };

  const displayNumbers = initDisplayNumbers();

  return (
    <div className='pagination'>
      <Link to={`/${changeCurrentNumberHandle(currentNumber - 1)}`}>{`<`}</Link>
      {displayNumbers.map((number) => (
        <Link
          key={number}
          to={`/${number}`}
          className={number === currentNumber ? 'current' : ''}
        >
          {number}
        </Link>
      ))}
      <Link to={`/${changeCurrentNumberHandle(currentNumber + 1)}`}>{`>`}</Link>
    </div>
  );
};

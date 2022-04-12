import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createCommentData, getCommentsData } from '../../redux/actions/auctionAction';

function Comments() {
  const id = useParams();
  const dispatch = useDispatch();
  const [input, setInputs] = useState('');

  useEffect(() => {
    dispatch(getCommentsData(id));
  }, []);

  const handleChange = (e) => {
    setInputs(e.target.value);
  };

  const handleCreate = (e) => {
    e.preventDefault();
    const payload = { text: input };
    dispatch(createCommentData(id, payload));
    setInputs('');
  };

  return (
    <div className="col md-3 mb-4">
      <div className="col-sm-9 text-secondary">
        <input onChange={handleChange} value={input} type="text" name="text" className="form-control" placeholder="Введите наименование" required />
      </div>
      <div>
        <button type="submit" className="btn btn-warning" onClick={handleCreate}>Добавить коментарий</button>
      </div>
    </div>
  );
}

export default Comments;

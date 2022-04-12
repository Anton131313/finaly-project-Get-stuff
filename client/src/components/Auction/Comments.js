import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createCommentData, getCommentsData } from '../../redux/actions/auctionAction';
import Comment from './Comment';

function Comments() {
  const id = useParams();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const commentsData = useSelector((store) => store.comments);
  const [input, setInputs] = useState('');
  const [comment, setComent] = useState(false);

  useEffect(() => {
    dispatch(getCommentsData(id));
    console.log(comment, '****');
  }, [comment]);

  const handleChange = (e) => {
    setInputs(e.target.value);
  };

  const handleCreate = (e) => {
    e.preventDefault();
    const payload = { text: input };
    dispatch(createCommentData(id, payload));
    setComent((prev) => !prev);
    setInputs('');
  };
  // console.log(comment, '&&&');
  return (
    <div className="col md-3 mb-4">
      {user
        ? (
          <div>
            <div className="col-sm-9 text-secondary">
              <input onChange={handleChange} value={input} type="text" name="text" className="form-control" placeholder="Введите наименование" required />
            </div>
            <div>
              <button type="submit" className="btn btn-warning" onClick={handleCreate}>Добавить коментарий</button>
            </div>
          </div>
        ) : (<p />)}
      <div>
        {commentsData
          .filter((el) => Number(el.product_id) === Number(id.id))
          .map((el) => (
            <Comment
              key={el.id}
              name={el.name}
              data={el.updatedAt}
              text={el.text}
            />
          ))}
      </div>
    </div>
  );
}

export default Comments;

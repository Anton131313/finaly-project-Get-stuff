import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { createCommentData, getCommentsData } from '../../redux/actions/auctionAction';
import Comment from './Comment';

function Comments() {
  const id = useParams();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const commentsData = useSelector((store) => store.comments);
  const [input, setInputs] = useState('');
  const [comment, setComent] = useState(false);

  // console.log(moment(commentsData.updatedAt).format('DD-MM-YYYY HH-mm'));

  useEffect(() => {
    dispatch(getCommentsData(id));
    // console.log(comment, '****');
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
    <div className="container mt-3 mb-5">
      <div className="row height d-flex justify-content-start align-items-center">
        <div className="col-md-12">
          <div className="p-3">
            <h5>Комментарии</h5>
          </div>
          {user
            ? (
              <div>
                <div className="col-sm-9 text-secondary">
                  <input onChange={handleChange} value={input} type="textarea" name="text" className="form-control" placeholder="Введите комментарий" required />
                </div>
                <div>
                  <button type="submit" className="btn btn-outline-primary mt-3" onClick={handleCreate}>Добавить коментарий</button>
                </div>
              </div>
            ) : (<p />)}
          <div>
            {commentsData && commentsData
              .filter((el) => Number(el.product_id) === Number(id.id))
              .map((el) => (
                <Comment
                  key={el.id}
                  name={el.name}
                  data={moment(el.updatedAt).format('DD-MM-YYYY HH-mm')}
                  text={el.text}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;

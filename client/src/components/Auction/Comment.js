import React from 'react';

function Comment({ name, data, text }) {
  return (
    <div className="col md-3 mb-4">
      <div className="col-sm-9 text-secondary">
        <p>{name}</p>
      </div>
      <div>
        <p>{data}</p>
      </div>
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Comment;

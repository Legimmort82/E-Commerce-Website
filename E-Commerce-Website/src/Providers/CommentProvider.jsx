import React, { createContext, useState } from "react";

const commentContext = createContext("");

const CommentProvider = ({ children }) => {
  const [comments, setComments] = useState([]);

  const values = {
    comments,
    setComments,
  };
  return (
    <div>
      <commentContext.Provider value={values}>
        {children}
      </commentContext.Provider>
    </div>
  );
};

export { commentContext, CommentProvider };

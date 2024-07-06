import BlogFetch from "../axios/config";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./NewPost.css";

const NewPost = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !body) return;

    const post = { title, body, id: 1 };

    BlogFetch.post("/posts", {
      body: post,
    });

    navigate("/");
  };

  return (
    <div className="new-post">
      <h2>Inserir novo Post:</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-control">
          <label>
            <span>Título:</span>
            <input
              type="text"
              id="title"
              placeholder="Digite o título"
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
        </div>
        <div className="form-control">
          <label>
            <span>Conteúdo:</span>
            <textarea
              id="body"
              placeholder="Digite o conteúdo"
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </label>
        </div>
        <input type="submit" value="Criar Post" className="btn" />
      </form>
    </div>
  );
};

export default NewPost;

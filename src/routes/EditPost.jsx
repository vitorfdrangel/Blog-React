import BlogFetch from "../axios/config";

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditPost = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const getPosts = async () => {
    try {
      const response = await BlogFetch.get(`/posts/${id}`);

      const data = response.data;

      setTitle(data.title);
      setBody(data.body);
    } catch (error) {
      console.log(error);
    }
  };

  const editPost = async (e) => {
    e.preventDefault();

    const post = { title, body, userId: 1 };

    await BlogFetch.put(`/posts/${id}`, {
      body: post,
    });

    navigate("/");
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="new-post">
      <h2>Editando: {title}</h2>
      <form onSubmit={(e) => editPost(e)}>
        <div className="form-control">
          <label>
            <span>Título:</span>
            <input
              type="text"
              id="title"
              placeholder="Digite o título"
              onChange={(e) => setTitle(e.target.value)}
              value={title || ""}
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
              value={body || ""}
            ></textarea>
          </label>
        </div>
        <input type="submit" value="Editar Post" className="btn" />
      </form>
    </div>
  );
};

export default EditPost;

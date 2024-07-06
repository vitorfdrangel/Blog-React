import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import BlogFetch from "../axios/config";

import "./Post.css";

const Post = () => {
  const [post, setPost] = useState({});

  const { id } = useParams();

  const getPost = async () => {
    try {
      const response = await BlogFetch.get(`/posts/${id}`);

      const data = response.data;

      setPost(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="post-container">
      {!post ? (
        <p>Carregando...</p>
      ) : (
        <div className="post">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default Post;

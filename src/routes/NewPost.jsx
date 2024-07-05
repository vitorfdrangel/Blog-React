import "./NewPost.css";

const NewPost = () => {
  return (
    <div className="new-post">
      <h2>Inserir novo Post:</h2>
      <form>
        <div className="form-control">
          <label>
            <span>Título:</span>
            <input type="text" id="title" placeholder="Digite o título" />
          </label>
        </div>
        <div className="form-control">
          <label>
            <span>Conteúdo:</span>
            <textarea id="body" placeholder="Digite o conteúdo"></textarea>
          </label>
        </div>
        <input type="submit" value="Criar Post" className="btn" />
      </form>
    </div>
  );
};

export default NewPost;

// CSS
import styles from "./Home.module.css";

// hooks
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import PostDetail from "../../components/PostDetail";


const Home = () => {
    const [query, setQuery] = useState("");
    const { documents: posts, loading, error } = useFetchDocuments("posts");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (query) {
            return navigate(`/search?q=${query}`);
        }
    }

    return (
        <div className={styles.home}>
            <h1>Veja os nossos Posts mais recentes</h1>
            <form onSubmit={handleSubmit} className={styles.searchForm}>
                <input
                    type="text"
                    placeholder="Ou busque por tags..."
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className="btn btn-dark">Pesquisar</button>
            </form>
            {loading && <p>Carregando Posts...</p>}
            <div>
                {posts && posts.map((post) => (
                    <PostDetail key={post.id} post={post}></PostDetail>
                ))}
                {posts && posts.length === 0 && (
                    <div className={styles.noPosts}>
                        <p>Não foram encotrados Posts</p>
                        <Link to='/posts/create' className="btn">
                            Criar primeiro Post
                        </Link>
                    </div>
                )}
            </div>
            {error && <p className='error'>O correu algum erro, tente mais tarde</p>}
        </div>
    )
}

export default Home

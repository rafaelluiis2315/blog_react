import styles from './Search.module.css';

// components
import PostDetail from '../../components/PostDetail';
import { Link } from 'react-router-dom';

//Hooks
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { useQuery } from '../../hooks/useQuery';


const Search = () => {
    const query = useQuery();
    const search = query.get("q");

    const { documents: posts, loading, error } = useFetchDocuments("posts", search);

    return (
        <div className={styles.searchContainer}>
            <h1>Search</h1>
            {loading && <p>Carregando...</p>}
            {posts && posts.length === 0 && (
                <div className={styles.noPosts}>
                    <p className={styles.noPosts}>Não foram encotrados Posts com a tag <span>{search}</span></p>
                    <p></p>
                    <Link to='/posts/create' className="btn">
                        Seja o primeiro a cria um Post com essa tag
                    </Link>
                </div>
            )}
            {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
            {error && <p className='error'>O correu algum erro, tente mais tarde</p>}
        </div>
    )
}

export default Search;
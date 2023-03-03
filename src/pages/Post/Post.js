import styles from './Post.module.css';

// Hooks
import { useParams } from 'react-router-dom';
import { useFetchDocument } from '../../hooks/useFetchDocument';

const Post = () => {
    const { id } = useParams();

    const { document: post, loading, error } = useFetchDocument("posts", id)

    return (
        <div className={styles.postContainer}>
            {loading && <p>Carregando Post...</p>}
            {post && (
                <>
                    <h1>{post.title}</h1>

                    <p className={styles.createdBy}> Escrito por <span>{post.createdBy}</span></p>

                    <img src={post.image} alt={`Imagem do Post ${post.title}`} />

                    <p className={styles.body}>{post.body}</p>

                    <h4>Esse Post fala sobre:</h4>

                    <div className={styles.tags}>
                        {post.tags.map((tag) => (
                            <p key={tag}><span>#</span>{tag}</p>
                        ))}
                    </div>
                </>
            )}
            {error && <p className='error'>O correu algum erro, tente mais tarde</p>}
        </div>
    )
}

export default Post;
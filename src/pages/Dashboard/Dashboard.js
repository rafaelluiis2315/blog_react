import styles from './Dashboard.module.css';
import { Link } from 'react-router-dom';

// Hooks
import { useAuthValue } from '../../context/AuthContext';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { useDeleteDocument } from '../../hooks/useDeleteDocument';

const Dashboard = () => {
    const { user } = useAuthValue();
    const uid = user.uid;

    const { deleteDocument } = useDeleteDocument("posts");
    
    const { documents: posts, } = useFetchDocuments("posts", null, uid);

    return (
        <div className={styles.dashboard}>
            <h1>Dashboard</h1>
            <p>Gerencie os seus Posts</p>
            {posts && posts.length === 0 ? (
                <div className={styles.noPost}>
                    <h2>Você não tem Posts</h2>
                    <Link to='/posts/create' className='btn'>Criar Primeiro Post</Link>
                </div>
            ) : (
                <div className={styles.post_header}>
                    <span>Título</span>
                    <span>Ações</span>
                </div>
            )}
            {posts && posts.map((post) => (
                <div className={styles.post_row} key={post.id}>
                    <p>{post.title}</p>
                    <div className={styles.actions}>
                        <Link to={`/posts/${post.id}`} className="btn btn-outline">
                            Ver
                        </Link>
                        <Link to={`/posts/edit/${post.id}`} className="btn btn-outline">
                            Editar
                        </Link>
                        <button
                            onClick={() => deleteDocument(post.id)}
                            className="btn btn-outline btn-danger"
                        >
                            Excluir
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Dashboard;
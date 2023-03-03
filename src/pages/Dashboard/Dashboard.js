import styles from './Dashboard.module.css';
import { Link } from 'react-router-dom';

// Hooks
import { useAuthValue } from '../../context/AuthContext';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';

const Dashboard = () => {
    const { user } = useAuthValue();
    const uid = user.uid;

    const deleteDocument = (id) => {

    }

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
                <>
                    <table>
                        <thead className={styles.post_head}>
                            <tr>
                                <td>Titulo</td>
                                <td>Ação</td>
                            </tr>
                        </thead>
                        <tbody>
                            {posts && posts.map((post) => (
                                <tr key={post.id} className={styles.post_row}>
                                    <td className={styles.post_title}>{post.title}</td>
                                    <td>
                                        <Link to={`/posts/${post.id}`} className='btn btn-outline'>Ver</Link>
                                        <Link to={`/posts/edit/${post.id}`} className='btn btn-outline'>Editar</Link>
                                        <button onClick={() => deleteDocument(post.id)} className='btn btn-outline btn-danger'>
                                            Excluir
                                        </button>
                                    </td>
                                </tr>

                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    )
}

export default Dashboard;
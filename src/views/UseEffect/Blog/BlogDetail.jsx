import { useParams, useNavigate  } from 'react-router-dom';
import useFetch from '../../../customize/fetch';
const DetailBlog = () => {
    let { id } = useParams();
    let history = useNavigate ();

    const handleBackData = () => {
        history("/blog");
    }
    const {data: dataBlogDetail, isLoading, isError} = 
    useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false) //fix mềm
    return (
        <>

            <div className="container">
                <div className="blog-detail">
                    {dataBlogDetail && 
                        <>
                            <h1>{dataBlogDetail.id}</h1>
                            <h2>{dataBlogDetail.title}</h2>
                            <h3>{dataBlogDetail.body}</h3>
                        </>
                    }
                </div>
                
                {isLoading === true && <div >
                        <span className='text-center'>Loading data...</span>
                    </div>
                }
                {isError === true && <div >
                        <span style={{ 'textAlign': 'center' }}>  Something wrong... </span>
                    </div>
                }   
                <div> <button onClick={handleBackData}>&lt;-- Back </button></div>
            </div>
        </>
    )
}

export default DetailBlog;
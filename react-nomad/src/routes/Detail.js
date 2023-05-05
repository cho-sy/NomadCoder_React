import { useState, useEffect } from "react";

import {useParams, Link} from "react-router-dom"; 

function Detail(){
  const {id} = useParams();
  const [loading, setLoading] = useState(true);
  const [m_detail, setM_details] = useState([]);
  const getMovie = async () => {
    const json = await(
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setLoading(false);
    setM_details(json.data.movie);
  }
  useEffect(()=>{
    getMovie();
  }, []);
  return (<div>
    {loading? (
    <h1>Detail Loading...</h1>
    ) : (
      <div>
        <h1>{m_detail.title}</h1>
        <p>평점: {m_detail.rating}</p>
        <p>개봉 연도: {m_detail.year}</p>
        <Link to={m_detail.url}>외부 주소</Link>
        
      </div>
    )}
  </div>
      );

}

export default Detail;
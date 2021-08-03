import React from 'react'
import { Carousel, Button, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import './SliderMovies.sass'; 
import Loading from '../Loading'


const SliderMovies = props => {
    console.log(props);
    const { newMovies } = props

    if(newMovies.loading || !newMovies.result){
        return <Loading />
    }
    
    const { results } = newMovies.result
    console.log(results);

    return (
        <Carousel outoplay className= "slider-movies">
            {results.map(movie => (
                <Movie key={movie.id} movie={movie} />
            ))}
        </Carousel>
    );
};


const Movie = props => {
    const {movie:{
        id,
        backdrop_path,
        title,
        overview
        }
    } = props

    const backDropPath = `https://image.tmdb.org/t/p/original${backdrop_path}`

    return (
        <div className="slider-movies__movie"
        style={{backgroundImage: `url('${backDropPath}')`}}
        >
            {/* <Row justify="space-around" align="bottom" className="slider-movies__movie-info">
                  <Col span={12}>
                    <h2>{title}</h2>
                     <p>{overview}</p>
                     <Link to={`/movie/${id}`}>
                        <Button type="primary">Ver más</Button>
                     </Link>
                  </Col>
                </Row> */}
            <div className="slider-movies__movie-info">
                <Col xs={{ span: 18 }} sm={{ span: 18 }} md={{ span: 12 }} lg={{ span: 8 }} className= "card">
                    <h2>{title}</h2>
                    <p>{overview}</p>
                    <Link to={`/movie/${id}`}>
                        <Button type="primary">Ver más</Button>
                    </Link>
                </Col>
            </div>
        </div>
    ) 
}
export default SliderMovies;
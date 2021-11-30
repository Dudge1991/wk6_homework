import { useEffect, useState } from "react";
import FilmButtonList from "../components/FilmButtonList";

const FilmsContainer = () => {

    const[films, setFilms] = useState({});
    const[selectedFilm, setSelectedFilm] = useState(false);
    const[loaded, setLoaded] = useState(false);
    const[filmInfo, setFilmInfo] =useState({});
    

    useEffect( () => {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(response => response.json())
        .then(data => setFilms(data))
        .then(() => setLoaded(true))
    }, []);

    useEffect( () => {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(response => response.json())
        .then(data => setFilmInfo(data[3]))
        .then(() => setLoaded(true))
    }, [selectedFilm]);



    return(
        <>
        <h1>Studio Ghibli Films</h1>
        <FilmButtonList films={films} loaded={loaded} selectedFilm={selectedFilm} filmInfo={filmInfo} />
        </>
    );
}

export default FilmsContainer;
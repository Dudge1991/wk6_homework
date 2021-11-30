import FilmDescription from "./FilmDescription"
const FilmButtonList = ({films, loaded, selectedFilm, filmInfo}) => {

    if (!loaded){
        return(
            <p>Loading...</p>
        )
    }

   const button = films.map((film) => {
       return (
           <>
                <button key={film.id} >{film.title}</button>
                <FilmDescription filmInfo={filmInfo} loaded={loaded}/>
            </>
       )
   })

    return(
        <>
            {button}
            
        </>
    );

}

export default FilmButtonList;
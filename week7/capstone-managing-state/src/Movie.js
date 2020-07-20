import React, {useState} from 'react'

function Movie(props) {

    const currentMovie = {
        title: props.title,
        genre: props.genre,
        nowShowing: props.nowShowing,
        releaseYear: props.releaseYear,
        mainStars: props.mainStars,
        img: props.img,
        _id: props._id
    }


    const [toggleForm, setToggleForm] = useState(false)


    const [inputs, setInputs] = useState(currentMovie)

    function handleFormChange(e) {
        const {name, value} = e.target
        console.log(value)
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }


    const handleDelete = (e) => {
        props.deleteMovie(props._id)
        props.getMovies()
    }

    function handleEditSubmit(e) {
        e.preventDefault()
        props.editMovie(inputs, props._id)
        setInputs(currentMovie)
        setToggleForm(!toggleForm)
        props.getMovies()
    }

    
 
    return (
        <>
        {!toggleForm ?
            <div className="movieContainer">
            <div className="movieImg">
                <img style={{"width": "140px", "height": "209px"}} src={props.img} />
            </div>
            <div className="movieDetails">
                <span className="titleAndYear">{props.title}</span>
                <span className="titleAndYear">({props.releaseYear})</span><br/>
                <span className="genreAndStars">Genre: </span><span> {props.genre}</span><br/>
                <span className="genreAndStars">Stars: </span><span> {props.mainStars}</span>
            </div>
            <button className="editMovie" onClick={() => setToggleForm(!toggleForm)}>Edit</button>
            <button className="deleteMovie" onClick={handleDelete}>X</button>
            </div>


        :

        <>
            <form name="addMovieForm" className="movieContainer" onSubmit={props.submit}>

            <div className="movieImg">
                <textarea name="img" style={{"width": "140px", "height": "209px"}} 
                    type="text" value={inputs.img} 
                    className="inputEditor"
                    onChange={handleFormChange}/>
            </div>

            <div className="movieDetails">
                <textarea style={{"width": "140px", "height": "35px"}} 
                    placeholder="Movie Title"
                    onChange={handleFormChange}
                    type="text" 
                    name="title" 
                    value={inputs.title} 
                    className="inputEditor" />

                <br/>

                <input style={{"width": "25%"}}
                    placeholder={new Date().getFullYear()}
                    onChange={handleFormChange} 
                    type="number" 
                    name="releaseYear" 
                    value={inputs.releaseYear} 
                    className="inputEditor" />

                <br/>

                <span className="genreAndStars">Genre: </span>

                <select onChange={handleFormChange}>
                    <option name="" value={inputs.genre}>Genre:</option>
                    <option name="action" value="action">Action</option>
                    <option name="comedy" value="comedy">Comedy</option>
                    <option name="family" value="family">Family</option>
                    <option name="fantasy" value="fantasy">Fantasy</option>
                </select>

                <br/>

                <span className="genreAndStars">Stars: </span>

                <br/>

                <input onChange={handleFormChange} 
                    placeholder="actor" name="mainStars" 
                    value={inputs.mainStars[0]}>
                </input>
                <br/>
                <input onChange={handleFormChange} 
                    placeholder="actor" name="mainStars" 
                    value={inputs.mainStars[1]}>
                </input>
                <br/>
                <input onChange={handleFormChange} 
                    placeholder="actor" name="mainStars" 
                    value={inputs.mainStars[2]}>
                </input>
                <br/>
                <input onChange={handleFormChange} 
                    placeholder="actor" name="mainStars" 
                    value={inputs.mainStars[3]}>
                </input>

            </div>

            <button className="editMovie" onClick={handleEditSubmit}>Submit Edit</button>
            <button className="closeEditor" onClick={() => setToggleForm(!toggleForm)}>Close</button>

        </form>

            </>
        }   
        </>

    )
}

export default Movie
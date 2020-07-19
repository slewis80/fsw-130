import React, {useState} from 'react'
import AddMovie from './AddMovie'

function AddMovieForm(props) {

    const initialFormValues = {
        title: "",
        genre: "",
        nowShowing: "",
        releaseYear: "",
        mainStars: [],
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzfNy-L2sR3Xq1JnBy3MWgHVj8ypcjiaqcpg&usqp=CAU"
    }


    const [inputs, setInputs] = useState(initialFormValues)

    function handleFormChange(e) {
        const {name, value} = e.target
        console.log(value)
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }



    function capitalize(name) {  
        var names = name.split(' ');  
        var capitalizedNames = [];  
        names.forEach(name => {  
            capitalizedNames.push(name[0].toUpperCase() + name.slice(1, name.length));  
        });  
        return capitalizedNames.join(' ');  
    }  

    


    return (
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

                <input style={{"width": "30%"}}
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

                <textarea style={{"width": "140px", "height": "50px"}} 
                    placeholder="Actors"
                    onChange={handleFormChange}
                    type="text" 
                    name="mainStars" 
                    value={inputs.mainStars} 
                    className="inputEditor" />

            </div>

            <button className="addMovie" onClick={AddMovie}>Add Movie</button>

        </form>
    )
}

export default AddMovieForm

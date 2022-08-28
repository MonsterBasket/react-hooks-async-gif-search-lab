import { useEffect, useState } from "react";
import GifList from "./GifList";

function GifListContainer({searchTerm}){
    const [images, setImages] = useState("")

    useEffect(_=>{
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=8w7BpEqwoUpDjO7nF1idQeHF3zGbOlLm`)
        .then(res => res.json())
        .then(json => {
            const newArray = [];
            for (let i = 0; i < 3; i++) {
                newArray.push(json.data[i]);
            }
            setImages([...newArray]);
            console.log({searchTerm})
        })
    }, [searchTerm])


    return <GifList images={images}/>
}
export default GifListContainer;
function GifList({images}){
    return <ul style={{listStyle: "none"}}>
        {console.log(images)}
        {[...images].map(image => <li key={image.id}><img alt={image.title} title={image.title} src={image.images.original.url}></img></li>)}
    </ul>
}
export default GifList;
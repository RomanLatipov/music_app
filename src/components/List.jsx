export default function List({id, name, handlePostToPlaylist, index}) {

    return(<>
        <button style={{width: "160px"}} onClick={()=> {
            handlePostToPlaylist(id, index);
        }}>{name}</button>
    </>)
}
import { useSelector } from "react-redux";

const FavoritesPage = () => {
    const {items} = useSelector(state => state?.favorites  || [])
    const {data} = useSelector(state => state?.playlists  || [])

    // let playlistArr = Object.values(data);
    let playlistArr =  items?.map((playlist:any)=> {
        return data[playlist]
    })
    console.log("playlistArr fab", playlistArr);
    
return(<>FavoritesPage</>)
}

export default FavoritesPage;
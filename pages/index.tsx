import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavoritePlaylist } from "redux/features/favorites";
import Sidebar from "../components/layout/Sidebar";

export default function Home() {
  // const dispatch = useDispatch();
  // const {items} = useSelector(state => state?.favorites  || [])
  // const state = useSelector(state => state  || [])
  // console.log("fav items", items, state);
  
  // useEffect(() => {
  //   dispatch(addFavoritePlaylist("PLyrs5AgsUPcWRdsE_E6BuSOb09YVsKSL8"))
  // }, [])
  return (
    <>
      <Sidebar />
    </>
  );
}

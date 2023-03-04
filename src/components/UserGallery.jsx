import React, { useEffect } from "react";
import UserBox from "./UserBox";
import demoData from "./../data/demo-data";
import { fetchGame } from "../Redux/userActions";
import { useDispatch, useSelector } from "react-redux";

const UserGallery = () => {
  const dispatch = useDispatch()
  const userData = useSelector(state => state.userData)
  useEffect(() => {
    dispatch(fetchGame())
  }, [dispatch])

  return (
    <>
      <div className="row mx-auto">
        {userData.map((item) => {
          return <UserBox key={item.id} item={item} />;
        })
        }
      </div>
    </>
  );
};

export default UserGallery;

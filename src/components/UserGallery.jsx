import React, { useEffect } from "react";
import UserBox from "./UserBox";
import { ThreeDots } from "react-loader-spinner";
import { fetchGame } from "../Redux/userActions";
import { useDispatch, useSelector } from "react-redux";

const UserGallery = () => {
  const dispatch = useDispatch()
  const userData = useSelector(state => state.userData)
  const loading = useSelector(state => state.loading)
  useEffect(() => {
    dispatch(fetchGame())
  }, [dispatch])

  return (
    <>
      <div className="row mx-auto">
        {
          loading || userData.length === 0 ?
            <div className="d-flex justify-content-center">
              <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#000000"
                ariaLabel="three-dots-loading"
                visible={true}
              />
            </div>

            :
            userData.map((item) => {
              return <UserBox key={item.id} item={item} />;
            })
        }
      </div>
    </>
  );
};

export default UserGallery;

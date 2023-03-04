import React, { useEffect } from "react";
import UserBox from "./UserBox";
import demoData from "./../data/demo-data";

const UserGallery = () => {


  return (
    <>
      <div className="row mx-auto">
        {demoData.map((item) => {
          return <UserBox key={item.id} item={item} />;
        })
        }
      </div>
    </>
  );
};

export default UserGallery;

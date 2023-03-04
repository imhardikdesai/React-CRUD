import React from "react";
import UserBox from "./UserBox";
import demoData from "./../data/demo-data";

const UserGallery = () => {
  return (
    <>
      {/* <div className="d-flex flex-wrap justify-content-center gap-4 m-3">
        {demoData.map((item) => {
          return <UserBox key={item.id} {...item} />;
        })}
      </div> */}
      <div className="row mx-auto">
        {demoData.map((item) => {
          return <UserBox key={item.id} item={item} />;
        })}
      </div>
    </>
  );
};

export default UserGallery;

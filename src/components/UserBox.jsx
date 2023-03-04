import React, { useState } from "react";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { IoEarthOutline } from "react-icons/io5";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiFillEdit,
  AiFillDelete,
} from "react-icons/ai";
import EditModal from "./EditModal";

const UserBox = (props) => {
  const { name, email, website, phone, username } = props.item;
  const [modalShow, setModalShow] = useState(false);
  const [isLike, setIsLike] = useState(false);
  return (
    <>
      <EditModal
        item={props.item}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <div className="col-12 col-xl-3 col-md-4 col-sm-12 ">
        <div className="user-box">
          <div className="user-box--avatar">
            <img
              className="avatar"
              src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`}
              alt="avatar"
            />
          </div>
          <div className="user-box--info">
            <h3>{name}</h3>
            <div className="user-box_details">
              <div className="user-box_details--mail">
                <FiMail />
                <p>{email}</p>
              </div>
              <div className="user-box_details--phone">
                <FiPhoneCall />
                <p>{phone}</p>
              </div>
              <div className="user-box_details--website">
                <IoEarthOutline />
                <p>{website}</p>
              </div>
            </div>
          </div>
          <div className="user-box--action">
            <button
              onClick={() => setIsLike((prevState) => !prevState)}
              className="like"
            >
              {isLike ? <AiFillHeart /> : <AiOutlineHeart />}
            </button>
            <button className="edit" onClick={() => setModalShow(true)}>
              <AiFillEdit />
            </button>
            <button className="delete">
              <AiFillDelete />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserBox;

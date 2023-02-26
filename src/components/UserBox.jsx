import React, { useState } from 'react'
import { FiMail, FiPhoneCall } from 'react-icons/fi';
import { IoEarthOutline } from 'react-icons/io5';
import LikeButton from './LikeButton';

const UserBox = ({ name, email, website, phone, username }) => {
    const [Liked, SetLiked] = useState(true);

    return (
        <>
            <div className="user-box">
                <div className="user-box--avatar">
                    <img className='avatar' src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`} alt="avatar" />
                </div>
                <div className="user-box--info">
                    <h5>{name}</h5>
                    <div className="user-box_details">
                        <div className="user-box_details--mail">
                            <FiMail />{email}
                        </div>
                        <div className="user-box_details--phone">
                            <FiPhoneCall />{phone}
                        </div>
                        <div className="user-box_details--website">
                            <IoEarthOutline />{website}
                        </div>
                    </div>
                </div>
                <div className="user-box--action">
                    <div className="like">
                        <LikeButton Liked={Liked} onPress={() => SetLiked(!Liked)} />
                    </div>
                    <div className="edit">

                    </div>
                    <div className="delete">

                    </div>
                </div>
            </div>
        </>
    )
}

export default UserBox

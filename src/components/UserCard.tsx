import React, { FC, memo } from 'react'
import user from '../Interface/users'
import { HeartOutlined, EditOutlined, DeleteFilled, MailOutlined, PhoneOutlined, GlobalOutlined, HeartFilled } from '@ant-design/icons';
import { Divider } from 'antd';


interface userCardProps {
    userData: user,
    buttonClick: (user: user, type: 'like' | 'delete' | 'edit') => void,
}
  

const UserCard: FC<userCardProps> = (props) => {
    return (
        <div className='user-card'>
            <div className="image-container h-center"><img src={`https://avatars.dicebear.com/v2/avataaars/${props.userData.name}.svg?options[mood][]=happy`} alt={props.userData.name} /></div>
            <div className="user-details">
                <div className="name">{props.userData.name}</div>
                <div className="other-details"><MailOutlined /><span id='email-sp' className='t-font'>{props.userData.email}</span></div>
                <div className="other-details"><PhoneOutlined /><span id='phone-sp' className='t-font'>{props.userData.phone}</span></div>
                <div className="other-details"><GlobalOutlined /><span id='web-sp' className='t-font'>{props.userData.website}</span></div>
            </div>
            <Divider className='divider' />
            <div className="action-container v-center">
                <div id='like' className='a-button circle-center' onClick={()=>props.buttonClick(props.userData,'like')}>{props.userData.like ? <HeartFilled className='like-icon' /> : <HeartOutlined className='like-icon' />}</div>
                <Divider className='h-divider' />
                <div id='edit' className='a-button circle-center' onClick={()=>props.buttonClick(props.userData,'edit')}><EditOutlined /></div>
                <Divider className='h-divider' />
                <div id='delete' className='a-button circle-center' onClick={()=>props.buttonClick(props.userData,'delete')}><DeleteFilled /></div>
            </div>
        </div>
    )
}

export default memo(UserCard);
import React, { FC, memo, useState } from 'react';
import users from '../Interface/users'

interface modalProps {
    userData: users | null,
    onOk: (user: users | null, type: 'update') => void,
    onCancel: () => void,
}

const Modal: FC<modalProps> = (props) => {
    const [mobile, setMobile] = useState<string>('')
    const [email, setEmail] = useState<string>('')

    const saveData = () => {
        var userData = Object.assign({}, props.userData);
        if (mobile) userData.phone = mobile;
        if (email) userData.email = email;
        props.onOk(userData, 'update');

    }

    return (
        <div className="modal">
            <section className="modal-main">
                <div className='modal-title'>Update User Details</div>
                <div className='input-container'>
                    <div className='input-title' >Phone</div><input name='Phone' value={mobile} onChange={(e) => setMobile(e.target.value)} />
                    <div className='input-title' >Email</div><input name='Email' value={email} type='email' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='button-container'>
                    <button id='save' type="button" onClick={saveData}>
                        SAVE
                    </button>
                    <button id='close' type="button" onClick={props.onCancel}>
                        Close
                    </button>
                </div>

            </section>
        </div>
    )
}

export default memo(Modal);
import React from 'react'
import "./css/HeaderOption.css"
import Avatar from '@material-ui/core/Avatar'

function HeaderOption({avatar, Icon, title, onClick}) {
    return (
        <div onClick={onClick} className="HeaderOption">
            {Icon && <Icon className="HeaderOptionIcon"/>}
            {avatar && <Avatar className="HeaderOptionIcon" src={avatar}/>}
            <h3 className="HeaderOptionTitle">{title}</h3>
        </div>
    )
}

export default HeaderOption

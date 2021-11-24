import React from 'react'
import "./HeaderOption.css"

function HeaderOption({Icon, title}) {
    return (
        <div className="HeaderOption">
            {Icon && <Icon className="HeaderOptionIcon"/>}
            <h3 className="HeaderOptionTitle">{title}</h3>
        </div>
    )
}

export default HeaderOption

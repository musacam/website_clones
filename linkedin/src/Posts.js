import React from 'react'
import "./css/Posts.css"
import { Avatar } from '@material-ui/core'
import InputOption from './InputOption'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

function Posts({name,description,message,photo}) {
    return (
        <div className="Posts">
            <div className="PostsHeader">
                <Avatar/>
                <div className="PostsHeaderInfo">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="PostsBody">
                <p>{message}</p>
            </div>

            <div className="PostsButtons">
                <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like"/>
                <InputOption Icon={ChatOutlinedIcon} title="Comment"/>
                <InputOption Icon={ShareOutlinedIcon} title="Share"/>
                <InputOption Icon={SendOutlinedIcon} title="Send"/>
            </div>
        </div>
    )
}

export default Posts

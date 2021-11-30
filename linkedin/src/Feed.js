import React, {useState, useEffect} from 'react'
import "./css/Feed.css"
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Posts from './Posts';
import {db} from './firebase';
import firebase from 'firebase';

function Feed() {

    const [input, setInput] = useState("");
    const[posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => 
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        );
    }, [])

    const sendPost = (post) => {
        post.preventDefault();
        db.collection("posts").add({
            name: "Name Surname",
            description: "Description",
            message: input,
            photo: "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        //Clear the post input
        setInput("");
    };



    return (
        <div className="Feed">
            <div className="FeedInputs">
                <div className="FeedInput">
                    <CreateIcon/>
                    <form>
                        <input value={input} onChange={e=>setInput(e.target.value)} type="text"/>
                        <button onClick={sendPost} type="submit">Submit</button>
                    </form>
                </div>
                <div className="FeedInputOptions">
                    <InputOption Icon={ImageIcon} title="Photo"/>
                    <InputOption Icon={SubscriptionIcon} title="Video"/>
                    <InputOption Icon={EventNoteIcon} title="Event"/>
                    <InputOption Icon={CalendarViewDayIcon} title="Write Article"/>
                </div>
            </div>

            {posts.map(({id, data: { name, description, message, photo}}) => (
                <Posts
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photo={photo}
                />
            ))}

        </div>
    )
}

export default Feed

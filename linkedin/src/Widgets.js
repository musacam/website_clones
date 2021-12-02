import React from 'react'
import "./css/Widgets.css"
import InfoIcon from "@material-ui/icons/Info"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle=(heading, subtitle) => (
        <div className="WidgetsArticle">
            <div className="WidgetsArticleLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className="WidgetsArticleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );
    return (
        <div className="Widgets">
            <div className="WidgetsHeader">
                <h2>Linkedin News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Heading 1", "Subtitle 1")}
            {newsArticle("Heading 2", "Subtitle 2")}
            {newsArticle("Heading 3", "Subtitle 3")}
        </div>
    )
}

export default Widgets

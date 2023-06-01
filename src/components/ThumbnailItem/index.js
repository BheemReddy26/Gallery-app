import {Component} from "react";

import "./index.css"

class ThumbnailItem extends Component {

    render() {
        const {details, active, activeHandler} = this.props 
        const {thumbnailUrl, thumbnailAltText,id} = details

        console.log(id)
        console.log(active)

        const buttonHandler = () => {
            activeHandler(id)
        }

        const imageClass = active ? "image-css active" : "image-css";
        return (<li className="list-items">
            <button className="button-css" onClick ={buttonHandler}>
                <img src={thumbnailUrl} alt={thumbnailAltText}  className={imageClass}/>
            </button>
        </li>)
    }
}

export default ThumbnailItem
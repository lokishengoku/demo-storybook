import React, {Component} from 'react';
import './card.css';

class Card extends Component {

    render(){
        const {src, mainContent, description} = this.props;
        return (
            <div className="card">
                <img alt='nothing' src={src}></img>
                <h2>{mainContent}</h2>
                <p>{description}</p>
            </div>
        );
    }
}

export default Card;
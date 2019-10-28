import React from 'react';


const ChampionCard = (props) => {

    return (
        <div key={props.key}>
            <p>test</p>
            <h3>{props.name}</h3>
            <h4>`"${props.title}"`</h4>
            <img src={props.image} alt={props.name} />
            <p>{props.blurb}</p>
        </div>
    )
};

export default ChampionCard
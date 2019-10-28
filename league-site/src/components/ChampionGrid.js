import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ChampionCard from './ChampionCard';


const ChampionGrid = () => {

    const [champion, setChampion] = useState([]);

    useEffect(() => {
        axios
            .get("http://ddragon.leagueoflegends.com/cdn/9.21.1/data/en_US/champion.json")
            .then(response => {
                console.log(response.data.data)
                setChampion(response.data.data.Aatrox)
            })
    }, [])

    console.log(champion)

    return (
        <div>
            {Array.from(champion).map((champ) => {
                
                return (
                    <ChampionCard
                        key={champ.key}
                        name={champ.name}
                        title={champ.title}
                        blurb={champ.blurb}
                        image={champ.image.full}
                    />
                )
            })}
        </div>
    )
};

export default ChampionGrid
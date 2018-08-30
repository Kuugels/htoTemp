import React, { Component } from 'react';
import Post from './Post/Post';
import './Posts.css';

class Posts extends Component {
    state = {

    }

    render() {
        let posts = [];
        let i;

        const article = ["Helsingin Tekniikan Opiskelijat etsii ICT- ja viestintätiimiin kahta henkilöä.",
            "Tulevassa yhdistyksen kevätkokouksessa valitaan yhdityksen hallitukseen kaksi jäsentä lisää kaudelle 2018. Haku alkaa 28.3.2018 ja päättyy yhdistyksen kevätkokoukseen 12.4.2018. Paikkoja on yksi ICT-tiimissä ja yksi viestintätiimissä.",
            "Hallituksessa pääset mukaan tekemään HTO:sta entistä parempaa opiskelijayhdistystä, tutustumaan uusiin ihmisiin ja hankkimaan työelämässä arvostettua kokemusta vaikutus- ja edunvalvontatoiminnasta. Edellytyksenä on HTO:n jäsenyys, halu sitoutua toimintaan ja ennakkoluuloton mieli!",
            "ICT-tiimissä tehtäviisi kuuluu mm. HTO:n kotisivujen päivittäminen ja jäsenrekisterin hallinta. HTML-osaaminen on suuri plussa.",
            "Viestintätiimissä vastuualueita on somekanavien hallinta ja päivittäminen, tapahtumien markkinointi sekä kommunikointi muiden opiskelijayhdistysten ja toimijoiden kanssa.",
            "Aiempaa kokemusta järjestötoiminnasta ei tarvitse, mutta siitä voi olla hyötyä. Hakemukset tulee olla lähetettynä osoitteeseen hallitus@htory.fi 12.4.2018 mennessä. Uudet jäsenet valitaan yhdistyksen kevätkokouksessa, joten on toivottavaa että hakijat saapuvat kokoukseen.",
            "P.S. Vastaamme kysymyksiin pesteistä tai mistä tahansa muusta mielellämme, tulkaa vetämään hihasta jos askarruttaa!"
        ]

        for (i = 0; i < 10; i++) {
            posts[i] = <Post imgSrc="https://www.htory.fi/images/julkaisumateriaali/hto_logo_green.png"
                imgAlt={"Kuve" + i}
                header={"HTO:n hallituksen täydennyshaku " + i}
                article={article}
                addedBy="Smuul"
            />
        }
        return(
            <div className="Posts">
                {posts}
            </div>
        );
    }
}

export default Posts;

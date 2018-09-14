import React from 'react';

import InfoPage from '../InfoPage/InfoPage';
import CoverImage from '../UI/CoverImage/CoverImage';
import coverImg from '../../assets/tursajaiset1.jpg';

import tursImg1 from '../../assets/tursajaiset3.jpg';
import tursImg2 from '../../assets/tursajaiset4.jpg';
import tursImg3 from '../../assets/tursajaiset5.jpg';


const tursajaiset = (props) => {
    return (
        <div>
            <CoverImage cover={coverImg}>
                <header >
                    <h1>Tursajaiset</h1>
                    <h3>Juu</h3>
                </header>
            </CoverImage>
            <div className="Content">
                <InfoPage>
                    <h1>Tursajaiset</h1>
                    <p>
                        Tursajaiset järjestetään perinteikkäästi kaksi kertaa vuodessa. 
                        Se on suunnattu juuri aloittaneille tekniikan alan opiskelijoille, 
                        eli tursaille, mutta vuosittain sinne eksyy myös muidenkin alojen edustajia.
                        Tapahtuman järjestäjänä on aina toiminut HTO ry ja tapahtumalle onkin kertynyt useamman vuoden perinteet taakse. 
                        Tapahtumaan osallistuu vuosittain satoja opiskelijoita.
                    </p>
                    <h4>Tätä tapahtumaa ei kannata missata!</h4>

                    <div className="tursImages">
                        <img className="tursImg" src={tursImg1}/>
                        <img className="tursImg" src={tursImg2}/>
                    </div>

                    <p>
                        Tapahtuman ideana on etsiä vihjeiden perusteella 2-4 hengen ryhmissä baareja ja suorittaa niissä rastitehtäviä. 
                        Nämä baarit sijaitsevat Helsingin keskustassa, 
                        pääasiassa Bulevardin toimipisteen ja Kampin välisellä alueella. 
                        Jokaisen rastin sijainnista on tehty vihjekuori, 
                        jonka päältä löytyy vihje paikan sijainnista sekä kuoren sisällä paikan tarkka osoite. 
                        Ryhmä saa miinuspisteitä mikäli he vievät rastipaikalle avatun kuoren.
                    </p>
                    <p>
                        Rastipaikalle saavuttaessa on jokaisen ryhmän jäsenen haettava jokin juoma kyseisen baarin tiskiltä. 
                        Juomaksi kelpaa niin alkoholillinen, kuin alkoholitonkin juoma.
                    </p>
                    <h4>Tursajaiset voi myös suorittaa alkoholittomana!</h4>
                    <p>
                        Rastien aiheet vaihtelevat vuosittain ja liittyvät yleensä jotenkin rastivahtien omaan koulutusohjelmaan. 
                        Rastin suoritus arvostellaan asteikolla 0 - 100 ja huomioon otetaan monia seikkoja, 
                        joista yksi on esimerkiksi ryhmähenki.
                    </p>
                    <p>
                        Rastikierros päättyy loppurastille, missä on vielä mahdollisuus vaikuttaa ryhmän lopulliseen pistemäärään. 
                        Pisteitä loppurastilta saa näyttävästi sisääntulosta sekä muilla keinoin. 
                        Moni ryhmä tuokin muun muossa tuliaisia rastikierrokselta. 
                        Eniten pisteitä kerännyt ryhmä tottakai palkitaan jatkobileiden yhteydessä.
                    </p>

                    <div className="tursImages">
                        <img className="tursImg" src={tursImg3}/>
                    </div>

                    <h1>Onko pakko jos ei tahdo</h1>
                    <p>on</p>
                </InfoPage>
            </div>
        </div>
    );
}

export default tursajaiset;
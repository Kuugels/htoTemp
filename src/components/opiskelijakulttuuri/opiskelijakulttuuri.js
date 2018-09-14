import React from 'react';

import CoverImage from '../UI/CoverImage/CoverImage';
import InfoPage from '../InfoPage/InfoPage';
import coverImg from '../../assets/kulttuuri.jpg';

const opiskelijakulttuuri = (props) => {
    return (
        <div>
            <CoverImage cover={coverImg}>
                <header >
                    <h1>opiskelijakulttuuri</h1>
                    <h3>ASDASDASDASDASDASDASD</h3>
                </header>
            </CoverImage>
            <div className="Content">
                <InfoPage>
                    <h1>opiskelijakulttuuri</h1>
                    <p>
                        Byrokratialla ja politikoinnilla voidaan vaikuttaa tärkeisiin asioihin, 
                        mutta usein HTO ry:n toiminta näkyy selkeimmin erilaisten tapahtumien kautta.
                    </p>
                    <h4>Biletapahtumat</h4>
                    <p>
                        HTO:n ehdottomasti perinteikkäin tapahtuma on keväisin ja syksyisin järjestettävät Tursajaiset. 
                        Tapahtuma on suunnattu juuri alottaneille tekniikan opiskelijoille, 
                        eli tursaille, mutta vuosittain sinne eksyy myös muidenkin alojen edustajia.
                    </p>
                    <p>
                        Jalansijaa HTO:n tapahtumakentällä on haalinut myös Valurauta (entinen Hevibileet). 
                        Tämä onkin tainnut tulla jäädäkseen, 
                        sillä nämä heavykarkelot ovat nähneet yön pimeyttä jo vuodesta 2008 lähtien.
                    </p>
                    <p>
                        Luonnollisesti HTO ry ojentaa lihaksikkaan käsivartensa myös muiden yhdistysten organisoidessa omia tapahtumiaan. 
                        Edellä mainittujen lisäksi perinteikäs insinööriopiskelijoiden 
                        Wappu on takuulla kokemisen arvoinen tapaus niin vanhoille kuin uusillekin opiskelijoille.
                    </p>
                    <h4>Liikunta, kerhotoiminta sekä excursiot</h4>
                    <p>
                        HTO ry järjestää myös biletapahtumien lisäksi erinäisiä liikuntatapahtumia. 
                        Viime vuosina olemme järjestäneet muun muassa laskettelureissuja Himokselle.
                    </p>
                </InfoPage>
            </div>
        </div>
    );
}

export default opiskelijakulttuuri;
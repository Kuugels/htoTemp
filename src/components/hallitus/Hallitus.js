import React from 'react';

import Jasen from './Jasen';
import CoverImage from '../UI/CoverImage/CoverImage';
import kuve from '../../assets/seteli.jpg';
import coverImg from '../../assets/hallitus.jpg';
import './Hallitus.css';

const hallitus = (props) => {

    const jasenArr = [
        {
            img: kuve,
            nimi: "Nimi Sukunimi",
            vastuualue: "Hallitus jutskelit",
            esittely: "Hei minä olen hassu hallituslainen ja minulla on hauskaa haha eikö ollut hauska juttu no ei niin heippa moikka nyt minä menen. Täs on muute niiku täytetekstiä koska täyteteksti on tosi hauskaa eikö niin haha naurahdin taas kun on niin hauskaa ja ei hajota oispa kahvia se vosi tehä iha hyvää ny ku on niin hausaaa aksodjpajgfapägijhaeäpighäaepig"
        },
        {
            img: kuve,
            nimi: "Nimi Sukunimi",
            vastuualue: "Hallitus jutskelit",
            esittely: "Hei minä olen hassu hallituslainen ja minulla on hauskaa haha eikö ollut hauska juttu no ei niin heippa moikka nyt minä menen. Täs on muute niiku täytetekstiä koska täyteteksti on tosi hauskaa eikö niin haha naurahdin taas kun on niin hauskaa ja ei hajota oispa kahvia se vosi tehä iha hyvää ny ku on niin hausaaa aksodjpajgfapägijhaeäpighäaepig"
        },
        {
            img: kuve,
            nimi: "Nimi Sukunimi",
            vastuualue: "Hallitus jutskelit",
            esittely: "Hei minä olen hassu hallituslainen ja minulla on hauskaa haha eikö ollut hauska juttu no ei niin heippa moikka nyt minä menen. Täs on muute niiku täytetekstiä koska täyteteksti on tosi hauskaa eikö niin haha naurahdin taas kun on niin hauskaa ja ei hajota oispa kahvia se vosi tehä iha hyvää ny ku on niin hausaaa aksodjpajgfapägijhaeäpighäaepig"
        },
        {
            img: kuve,
            nimi: "Nimi Sukunimi",
            vastuualue: "Hallitus jutskelit",
            esittely: "Hei minä olen hassu hallituslainen ja minulla on hauskaa haha eikö ollut hauska juttu no ei niin heippa moikka nyt minä menen. Täs on muute niiku täytetekstiä koska täyteteksti on tosi hauskaa eikö niin haha naurahdin taas kun on niin hauskaa ja ei hajota oispa kahvia se vosi tehä iha hyvää ny ku on niin hausaaa aksodjpajgfapägijhaeäpighäaepig"
        },
        {
            img: kuve,
            nimi: "Nimi Sukunimi",
            vastuualue: "Hallitus jutskelit",
            esittely: "Hei minä olen hassu hallituslainen ja minulla on hauskaa haha eikö ollut hauska juttu no ei niin heippa moikka nyt minä menen. Täs on muute niiku täytetekstiä koska täyteteksti on tosi hauskaa eikö niin haha naurahdin taas kun on niin hauskaa ja ei hajota oispa kahvia se vosi tehä iha hyvää ny ku on niin hausaaa aksodjpajgfapägijhaeäpighäaepig"
        },
        {
            img: kuve,
            nimi: "Nimi Sukunimi",
            vastuualue: "Hallitus jutskelit",
            esittely: "Hei minä olen hassu hallituslainen ja minulla on hauskaa haha eikö ollut hauska juttu no ei niin heippa moikka nyt minä menen. Täs on muute niiku täytetekstiä koska täyteteksti on tosi hauskaa eikö niin haha naurahdin taas kun on niin hauskaa ja ei hajota oispa kahvia se vosi tehä iha hyvää ny ku on niin hausaaa aksodjpajgfapägijhaeäpighäaepig"
        }
    ]

    const jasenet = jasenArr.map(jasen => (
        <Jasen jasenImg={jasen.img} nimi={jasen.nimi} vastuualue={jasen.vastuualue} esittely={jasen.esittely} />
    ));

    return (
        <div>
            <CoverImage cover={coverImg}>
                <header >
                    <h1>Yhdistys</h1>
                    <h3>Lorem Ipsum laa laa laa</h3>
                </header>
            </CoverImage>
            <div className="Content">
                <div className="Hallitus">
                
                    <h1>HTO Hallitus 2018</h1>
                    <h2>Yhteystiedot</h2>
                    <p>Helsingin Tekniikan Opiskelijat - HTO ry<br />
                        Bulevardi 31, 00180 HELSINKI<br />
                        PL 4000 00079 METROPOLIA<br />
                        Huone U105b</p>
                    <p>
                        Juu eli hallitus on hallitus ja hallitus leikkii hallitusta aina vuoden kerrallaa.
                        Sit ain sillo tällö valitaa hallitus uuestaa ja sit on uusi hallituslaisii tai jotai semmost.
                        Juu ja sit hallitus tekee hallitus asioit ja juttui(joskus myös hommeleita).
                        LAA LAA LAA LAA LAA LAA LAAA TEKSTIA LÖALALAÖFSLAÖ LAA LALFÖAFKLAÖKGTAÖÄ ÄÄÄÄ APIUVA APVUAPVUAPAPVUAPVUPA
                        APUVA ÄÄÄÄÄ TEKSTIA ÄÄÄÄÄ.
                    </p>
                    <table className="HallitusTable">
                        <thead>
                            <tr>
                                <th colSpan="2">Kyllikki Kyy eli tos ois noi nykyset hallitus heebot</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jasenet}
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
        
    );
}

export default hallitus;
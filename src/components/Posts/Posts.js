import React, { Component } from 'react';
import Post from './Post/Post';
import CoverImage from '../UI/CoverImage/CoverImage';
import './Posts.css';
import kuve from '../../assets/esileikki.jpg';
import coverImg from '../../assets/hto1.jpg';
import toinenKuve from '../../assets/valurauta.jpg';

class Posts extends Component {

    render() {
        let posts = [];
        const artikkeli = (
            <Post imgSrc={kuve}>
                <div>
                    <h1>Esileikki S18</h1>
                    <p>Esileikki on täällä taas! Tapahtuman teeman voitte päätellä upeasta mainosmateriaalistamme, 
                    mutta mikäli jäät pähkäilemään mitä pukea suosittelemme seuraavaa: Mausta asusi pikkutuhmasti, 
                    lisää halutessasi yhtälöön haalarit taikka tule ihan omana itsenäsi 
                    sillä näihin bileisiin kaikki ovat tervetulleita! 
                    Huomaathan, että palkitsemme illan parhaan asun ja 
                    järjestämme muuta iltaan sopivia/sopimattomia kilpailuita.
                    Oletteko valmiita? Me ollaan!</p>
                    <h4>Mitä: Esileikki Bileet<br/>
                    Missä: Club Capital<br/>
                    Milloin: 30.8.2018 kello 21.00 →<br/>
                    Miksi: Koska me voimme!<br/>
                    Miten: Pikkutuhmasti, haalareissa taikka ihan miten vain!<br/>
                    Mitä maksaa: 2€ | Ovelta 5€ (narikka ei sisälly lipun hintaan)</h4>
                </div>
            </Post>
            
        );

        const artikkeli1 = (
            <Post>
                <div>
                    <h1>Sivujen uudistus</h1>
                    <p>Juu elikkäs sivut uudistuu ja tää on tämmöne aika hassu testi artikkeli. 
                    Testaan täl artikkelil sitä et jos ei oo laittanu kuvaa postauksen kans nii "kansikuvan" tilal
                    pitäs olla hto logo kuva jutskeli. Ei kait sit muut.</p>
                    <h4>Heippa</h4>
                    <h5>:)</h5>
                </div>
            </Post>
            
        );

        const artikkeli2 = (
            <Post imgSrc={toinenKuve}>
                <h1>Valurauta 2018</h1>
                <p>
                Valurauta palaa suurempana kuin koskaan! 
                Valurauta on jälleen tulossa 14.3.2018 taistelemaan kaamosmasennusta vastaan 
                rautaisin ottein ja kutsumme juuri teidät mukaan taistelujoukkoihimme!
                Illan aikana nousee kolme bändiä lavalle, joilla meno ei lopu kesken. Nappaa siis 
                kaverisi mukaan ja tulkaa nauttimaan kanssamme mahtavasta live-musiikista! Tätä et halua missata!<br/>
                </p>
                <h4>
                Lavalla nähdään:<br/>
                Edge of Haze [Metal / Progressive / Alternative / Indie]<br/>
                Astralion [Melodic Power Metal]<br/>
                Everfrost [Symphonic Power Metal, Melodic Metal]<br/>
                </h4>
            </Post>
        );

        return(
            <div>
                <CoverImage cover={coverImg}>
                    <header >
                        <h1>Helsingin Tekniikan Opiskelijat - HTO ry</h1>
                        <h3>Opiskelijan asialla, ihmistä vastaan - jo vuodesta 1975</h3>
                    </header>
                </CoverImage>
                <div className="Content">
                    <div className="Posts">
                        {artikkeli}
                        {artikkeli1}
                        {artikkeli2}
                        {artikkeli1}
                        {artikkeli1}
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Posts;

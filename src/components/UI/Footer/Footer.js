import React from 'react';
import './Footer.css';

const footer = (props) => {

    const links = [
        {nimi: "Sodexo ruokalistat", linkki: "https://www.sodexo.fi/metropolia-opiskelijaravintolat"},
        {nimi: "Oma", linkki: "https://oma.metropolia.fi/"},
        {nimi: "Lukkarikone", linkki: "https://lukkarit.metropolia.fi/"},
        {nimi: "Metropolia", linkki: "https://www.metropolia.fi/"}
    ];

    const opyt = [
        {nimi: "METKA", linkki: "http://metkaweb.fi/"},
        {nimi: "UIO", linkki: "http://www.uio.fi/"},
        {nimi: "TXO", linkki: "https://www.facebook.com/tukholmankatu10"},
        {nimi: "Soffa", linkki: "http://soffa.edu.metropolia.fi/"},
        {nimi: "Demoni", linkki: "https://demoniry.fi/"},
        {nimi: "MeMo", linkki: "https://www.facebook.com/myyrmaenopiskelijat/"},
        {nimi: "ESN-Metropolia", linkki: "http://esn.metropolia.fi/"},
        {nimi: "AGU", linkki: "https://www.facebook.com/agricolankadunopiskelijat/"},
        {nimi: "HIV", linkki: "https://www.facebook.com/hivopy/"},
        {nimi: "MURU", linkki: "https://www.facebook.com/MURU-ry-133723319305/"},
        {nimi: "LEPO", linkki: "https://www.facebook.com/Lepory/"},
        {nimi: "Tilde", linkki: "https://tilde.fi/"},
        {nimi: "Trombi", linkki: "https://www.trombiry.com/"}
    ];

    const linkList = links.map(link => (
        <a href={link.linkki}><li>{link.nimi}</li></a>
    ));

    const opyList = opyt.map(opy => (
        <a href={opy.linkki}><li>{opy.nimi}</li></a>
    ));

    return (
        <div className="Footer">
            <div>
                <h3>Seuraa meitä Facebookissa!</h3>
                <p>Plaa Plaa jotain teksti ja linkki pitäs laittaa tähä kait tai jotai</p>
            </div>
            <ul>
                {linkList}
            </ul>
            <ul>
                {opyList}
            </ul>
        </div>
    )
}

export default footer;
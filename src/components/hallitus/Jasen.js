import React from 'react';

const jasen = (props) => {
    return (
        <tr className="Jasen">
            <td>
                <img src={props.jasenImg}/>
            </td>
            <td>
                <p><strong>{props.nimi}</strong></p>
                <p><em>{props.vastuualue}</em></p>
                <p>{props.esittely}</p>
            </td>
        </tr>
    );
}

export default jasen;
import React from 'react';

export const Submenu = ({title, names}) => (
    <ul className="ul-reset">
        <h3>{title}</h3>
        {names.map(name => (
            <li key={title+name}><a href='#'>{name}</a></li> 
        ))}
    </ul>
)

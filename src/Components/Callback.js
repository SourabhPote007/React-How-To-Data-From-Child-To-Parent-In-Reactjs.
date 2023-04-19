// How To Data From Child To Parent In Reactjs ?

import React, { useState } from 'react';
//Child-Component
export default function Callback({ getColor}) {
    const [activeColor, setActiveColor] = useState(null);

    const handleChange = (e) => {
        const { value } = e.target;
        setActiveColor(value);
        getColor(value);
    };

return (
    <div>
        <input type="text" id='input' aria-label="input" onChange={handleChange} value={activeColor} />
    </div>
);
}

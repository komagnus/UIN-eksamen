import React, { useState } from 'react';
import { getAbout } from '../utils/service';

const About = () => {
    const [data, setData] = useState([]); 

    const handleClick = async() =>{
      const events = await getAbout();
      setData(events);
    };
    return(
        <p>Dette er artikkelside</p>
    );
};
export default About;
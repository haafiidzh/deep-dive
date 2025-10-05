"use client";

import { useState } from "react";

const About = () => {
    const [count, setCount] = useState(0);  
    return (
        <div>
            Ini halaman About
            <button onClick={() => setCount(count + 1)}>Tambah</button>
            <h1>Count: {count}</h1>
        </div>
    )
}

export default About;
import React from 'react'
import { useState, useEffect } from "react";
import Sidebar from '../Sidebar/Sidebar';

const CursorHover = () => {
    const [position, setPosition] = useState({ x: 50, y: 0 });

    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", updatePosition);
        return () => window.removeEventListener("mousemove", updatePosition);
    }, []);

    return (
        <div>
            <div className="relative h-screen full-screen">
                <div
                    className="absolute w-100 h-100 bg-gradient-to-l from-purple-500 to-blue-900 rounded-full opacity-19 blur-2xl transition-all duration-75"
                    style={{
                        left: position.x - 170,
                        top: position.y - 190,
                    }}
                />
                <Sidebar />
            </div>
        </div>
    )
}

export default CursorHover
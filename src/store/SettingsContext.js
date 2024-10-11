import React, { createContext, useContext, useState } from 'react';

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
    const [settings, setSettings] = useState({
        "--background-color": "#fff",
        "--text-color": "#0A0A0A",
        "--font-size": "16px",
        "--animation-speed": "1s",
        "--primary-color": "rgb(33, 150, 243)"
    });

    return (
        <SettingsContext.Provider value={{ settings, setSettings }}>
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettings = () => useContext(SettingsContext);

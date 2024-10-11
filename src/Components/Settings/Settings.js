

import React from 'react';
import styled from 'styled-components';

const Container = styled.div
`
  padding: 20px;
`;

const ColorButton = styled.button
`
  margin: 5px;
  padding: 10px;
  border: none;
  cursor: pointer;
  color: white;
`;


const themes = [
  {
    name: 'Default',
    settings: {
      "--background-color": "#fff",
      "--primary-color": "rgb(185, 35, 53)",
      "--text-color": "#0A0A0A",
      "--text-light": "#575757",
    },
  },
  {
    name: 'Dark',
    settings: {
      "--background-color": "#333",
      "--primary-color": "#ff6347",
      "--text-color": "#fff",
      "--text-light": "#bbb",
    },
  },
  {
    name: 'Blue',
    settings: {
      "--background-color": "#f0f8ff",
      "--primary-color": "#4682b4",
      "--text-color": "#000",
      "--text-light": "#555",
    },
  },
];

const Settings = ({ settings, setSettings }) => {
  const handleThemeChange = (newSettings) => {
    setSettings(newSettings);
  };

  return (
    <Container>
      <h2>Theme Settings</h2>
      {themes.map((theme) => (
        <ColorButton
          key={theme.name}
          style={{ backgroundColor: theme.settings["--primary-color"] }}
          onClick={() => handleThemeChange(theme.settings)}
        >
          {theme.name}
        </ColorButton>
      ))}
    </Container>
  );
};

export default Settings;

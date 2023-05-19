import React from 'react';
import { useState } from 'react';
import colors from '@mui/joy/colors/colors.js';



export function ColorPicker() {
  const [color, setColor] = useState('#ffffff');

  function handleColorChange(event) {
    setColor(event.target.value);
  }

  const changeColor = (color) => {
    setColor(color);
  };

  return (
    <div style={{ backgroundColor: color }}>
      <input type="color" value={color} onChange={handleColorChange} />
      <h1>Paleta de colores</h1>
      <div>
        <button style={{ backgroundColor: color }} onClick={() => changeColor(colors.blue[700])}>
          Primario
        </button>
        <button style={{ backgroundColor: color }} onClick={() => changeColor(colors.purple[700])}>
          Secundario
        </button>
        <button style={{ backgroundColor: color }} onClick={() => changeColor(colors.grey[700])}>
          Neutro
        </button>
        <button style={{ backgroundColor: color }} onClick={() => changeColor(colors.yellow[700])}>
          Advertencia
        </button>
        <button style={{ backgroundColor: color }} onClick={() => changeColor(colors.red[700])}>
          Peligro
        </button>
        <button style={{ backgroundColor: color }} onClick={() => changeColor(colors.green[700])}>
          Éxito
        </button>
      </div>
      <p>
        Este es un ejemplo de cómo cambiar la paleta de colores de todos los elementos de la página utilizando la paleta de colores predefinida de Material-UI.
      </p>
    </div>
  );
}
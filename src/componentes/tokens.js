import React from 'react'
import Box from '@mui/joy/Box';
import Divider from '@mui/joy/Divider';
import { useState } from 'react';
import Add from '@mui/icons-material/Add';
import Button from '@mui/joy/Button';


export function App() {
    const [selectedFunction, setSelectedFunction] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
  
    const handleFunctionChange = (event) => {
      setSelectedFunction(event.target.value);
    };
  
    const handleColorChange = (event) => {
      setSelectedColor(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Aquí puedes hacer lo que necesites con los datos guardados
      console.log('Función:', selectedFunction);
      console.log('Color:', selectedColor);
    };
  
    return (
      <div>
        <Button startDecorator={<Add />} onClick={() => console.log('Botón de título "Ad Token" clicado')}>
          Ad Token
        </Button>
        <form onSubmit={handleSubmit}>
          <label>
            Función:
            <select value={selectedFunction} onChange={handleFunctionChange}>
              <option value="">Seleccionar</option>
              <option value="funcion1">Función 1</option>
              <option value="funcion2">Función 2</option>
              <option value="funcion3">Función 3</option>
            </select>
          </label>
          <br />
          <label>
            Valor:
            <input
              type="color"
              value={selectedColor}
              onChange={handleColorChange}
            />
          </label>
          <br />
          <Button type="submit">Guardar</Button>
        </form>
        <div>
          <h2>Título: {selectedFunction}</h2>
          <div
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: selectedColor,
            }}
          ></div>
          <p>Código de color: {selectedColor}</p>
        </div>
      </div>
    );
  }

export function Lostokens(){

    return (
      <div className='general' style={{ display: 'flex', flexDirection: 'row'}}>
       
       <div style={{display:'flex', flexDirection:'column'}} >
       
        <div style={{ display: 'flex', flexDirection: 'row'}}>
          <Box border={1} borderRadius={10} margin={1} alignItems={'center'}>
            <p>OutlinedColor</p>
            <p>outlinedBorder</p>
            <p>outlinedBg</p>
            <p>outlinedHoverBg</p>
            <p>outlinedActiveBg</p>
            <p>outlinedDisabledColor</p>
            <p>outlinedDisabledBg</p>
          </Box>
          <Box style={{display:'flex', flexDirection:'row'}}  border={1} borderRadius={10} margin={1}>
            <App/>
            <Divider orientation='vertical' style={{margin:5}}/>
            
          </Box>
   
          
          </div>
          </div>
       
          <div style={{display:'flex', flexDirection:'column'}} >
          <p>Size</p>
          
          <label >
            <select    >
              <option>Solid</option>
              <option>Soft</option>
              <option>Outlined</option>
              <option>Plain</option>
            </select>
          </label>
        
          </div>
      </div>
    );
  };


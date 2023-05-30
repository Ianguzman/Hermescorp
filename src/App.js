import * as React from 'react'; 
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import { useState } from 'react';
import Box from '@mui/joy/Box';
import Switch from '@mui/joy/Switch';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import  Grid  from '@mui/joy/Grid';
import {Botonnorm} from './componentes/botonnorm';
import {SwitchControlled} from './componentes/switch';
import {Checkboxitem} from './componentes/checkbox';
import {Inputnorm} from './componentes/inputnorm';
import {RadioButtons} from './componentes/radiobot';
import {ButtonIcons} from './componentes/botonicon';
import {InputDecorators} from './componentes/inputD';
import colors from '@mui/joy/colors/colors.js';
import { BorderAllOutlined } from '@mui/icons-material';
import { Button } from '@mui/joy';




//Modo obscuro | claro

function ModeSwitcher() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <Switch variant="outlined" defaultChecked label="Solid"
      color="primary"
      onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
    >
      {mode === 'dark' ? 'Claro' : 'Obscuro'}
      
      </Switch>
  );
}


//Red para ordenar
function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const jsx = `
<Grid container spacing={${spacing}}>
`;

  
}
const Network = () => {
  const handleSizeChange = (event) => {
    // Lógica para manejar el cambio de tamaño
    const size = event.target.value;
    console.log('Selected size:', size);
  };

  const handlePixelChange = (event) => {
    // Lógica para manejar el cambio de píxeles
    const pixels = event.target.value;
    console.log('Selected pixels:', pixels);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100vh' }}>
      <div style={{ flex: '35%' }}>
        <label>
          Size:
          <select onChange={handleSizeChange}>
            <option value="Sm">Sm</option>
            <option value="Md">Md</option>
            <option value="Lg">Lg</option>
          </select>
        </label>
      </div>
      <div style={{ flex: '50%' }}>
        <label>
          Left:
          <input type="number" onChange={handlePixelChange} />
        </label>
        <label>
          Top:
          <input type="number" onChange={handlePixelChange} />
        </label>
        <label>
          Right:
          <input type="number" onChange={handlePixelChange} />
        </label>
        <label>
          Bottom:
          <input type="number" onChange={handlePixelChange} />
        </label>
      </div>
      <div style={{ flex: '15%' }}>
        <label>
          Border:
          <input type="number" onChange={handlePixelChange} />
        </label>
      </div>
    </div>
  );
};
// const SizeInput = () => {
//   const [size, setSize] = useState('');

//   const handleSizeChange = (event) => {
//     setSize(event.target.value);
//   };

//   return (
//     <div sx={{margin:10}}>
//       <label>
//         <select value={size} onChange={handleSizeChange}>
//           <option value="small">Sm</option>
//           <option value="medium">Mm</option>
//           <option value="large">Lg</option>
//         </select>
//       </label>
//     </div>
//   );
// };


const Cuadrospalette = () => {
  const colors = {
    blue: ['#00153C','#072859','#02367D','#054DA7','#096BDE','#3990FF','#6FB6FF','#ADDBFF','#DDF1FF','#F4FAFF'],
    purple: ['#1D0A42','#301761','#452382','#5F35AE','#814DDE','#A374F9','#C69EFF','#E1CBFF','#F4EAFF','#FDF7FF'],
    grey: ['#131318','#25252D','#434356','#5A5A72','#73738C','#8F8FA3','#B9B9C6','#D8D8DF','#EBEBEF','#F7F7F8'],
    yellow: ['#3B2300','#4D2D00','#633C01','#7D4E00','#9A6700','#BF8700','#D4A72C','#EAC54F','#FAE17D','#FFF8C5'],
    red: ['#39000D','#580013','#77061B','#A10E25','#D3232F','#FA5255','#FF9192','#FFC7C5','#FFE9E8','#FFF8F6'],
    green: ['#001D09','#002F0F','#034318','#0F5D26','#1A7D36','#2CA24D','#4CC76E','#77EC95','#D7F5DD','#F3FEF5'],
  };


  

  const [color, setColor] = useState('blue');

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const changeColor = (newColor) => {
    setColor(newColor);
  };


  return (
    <div>
      <input type="color" value={colors[color][0]} onChange={handleColorChange} />
    
      <div>
        <button style={{ backgroundColor: colors, margin: 10, borderRadius: 7 }} onClick={() => changeColor('blue')}>
          Primary
        </button>
        <button style={{ backgroundColor: colors, margin: 10, borderRadius: 7 }} onClick={() => changeColor('purple')}>
          Secondary
        </button>
        <button style={{ backgroundColor: colors, margin: 10, borderRadius: 7 }} onClick={() => changeColor('grey')}>
          Neutral
        </button>
        <button style={{ backgroundColor: colors, margin: 10, borderRadius: 7 }} onClick={() => changeColor('green')}>
          Success
        </button>
        <button style={{ backgroundColor: colors, margin: 10, borderRadius: 7 }} onClick={() => changeColor('yellow')}>
          Alert
        </button>
        <button style={{ backgroundColor: colors, margin: 10, borderRadius: 7 }} onClick={() => changeColor('red')}>
          Danger
        </button>
        
      </div>
      <Box display="flex" flexWrap="wrap">
        {colors[color].map((colorCode, index) => (
          <Box
            key={index}
            width="120px"
            height="70px"
            backgroundColor={colorCode}
            borderRadius={10}
          />
        ))}
      </Box>
    
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
  {colors[color].map((colorCode, index) => (
    
    <div
      key={index}
      style={{
        backgroundColor: '#FFF', // Cambiar el fondo a negro o cualquier otro color deseado
        color: '#000',
        width: '120px',
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
      }}
    >
      {colorCode}
    </div>
    

        ))}
      </div>
    </div>
  );
};

export default function ColorPicker() {
  const [color, setColor] = useState('#ffffff');

  function handleColorChange(event) {
    setColor(event.target.value);
  }

  const changeColor = (color) => {
    setColor(color);
  };

  return (
  
    <div style={{ backgroundColor: color }}>
        <CssVarsProvider

>
  
  <Box
     id="mode-toggle"
    sx={{
      display: 'grid',
      justifyItems: 'center',
      alignItems: 'center',
      

    }}
  >
    
    <ModeSwitcher/>

      <Cuadrospalette/>
      <Grid item xs={12} border={1}>
  <Grid container justifyContent="center">
   
   {/* <SizeInput/> */}
   <Network/>
  </Grid>
</Grid>
      <Grid sx={{ flexGrow: 2 }} container>

            <Grid item xs={3.5}>
              <Grid container justifyContent="center">
                <List>
                  
                  <Botonnorm />
                </List>
                <List>
                  <SwitchControlled/>
                </List>
                <List>
                  <Checkboxitem/>
                </List>
              </Grid>
            </Grid>


<Divider orientation='vertical' style={{margin:20}}/>


            <Grid item xs={8}>
              <Grid container justifyContent="center">
                <List>
                  <Inputnorm/>
                </List>
                <List>
                  <RadioButtons/>
                </List>
                <List>
                  <ButtonIcons/>
                </List>

              </Grid>
            </Grid> 
    </Grid>


        <Divider style={{margin:20}}/>
            <InputDecorators/>
    
            <Grid border={1} container>




</Grid>
 
    

      
      </Box>
    </CssVarsProvider>
    
    </div>

    

        
  );
}

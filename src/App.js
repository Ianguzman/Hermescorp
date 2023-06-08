import * as React from 'react'; 
import './Style.css';
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
import { Network } from './componentes/tamaños';
import { Lostokens } from './componentes/tokens';




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



const Cuadrospalette = () => {
  const colors = {
    grey: {
      50: '#F7F7F8',
      100: '#EBEBEF',
      200: '#D8D8DF',
      300: '#B9B9C6',
      400: '#8F8FA3',
      500: '#73738C',
      600: '#5A5A72',
      700: '#434356',
      800: '#25252D',
      900: '#131318'
    },
    blue: {
      50: '#F4FAFF',
      100: '#DDF1FF',
      200: '#ADDBFF',
      300: '#6FB6FF',
      400: '#3990FF',
      500: '#096BDE',
      600: '#054DA7',
      700: '#02367D',
      800: '#072859',
      900: '#00153C'
    },
    yellow: {
      50: '#FFF8C5',
      100: '#FAE17D',
      200: '#EAC54F',
      300: '#D4A72C',
      400: '#BF8700',
      500: '#9A6700',
      600: '#7D4E00',
      700: '#633C01',
      800: '#4D2D00',
      900: '#3B2300'
    },
    red: {
      50: '#FFF8F6',
      100: '#FFE9E8',
      200: '#FFC7C5',
      300: '#FF9192',
      400: '#FA5255',
      500: '#D3232F',
      600: '#A10E25',
      700: '#77061B',
      800: '#580013',
      900: '#39000D'
    },
    green: {
      50: '#F3FEF5',
      100: '#D7F5DD',
      200: '#77EC95',
      300: '#4CC76E',
      400: '#2CA24D',
      500: '#1A7D36',
      600: '#0F5D26',
      700: '#034318',
      800: '#002F0F',
      900: '#001D09'
    },
    purple: {
      50: '#FDF7FF',
      100: '#F4EAFF',
      200: '#E1CBFF',
      300: '#C69EFF',
      400: '#A374F9',
      500: '#814DDE',
      600: '#5F35AE',
      700: '#452382',
      800: '#301761',
      900: '#1D0A42'
    }
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
        <Button variant="soft"  style={{  margin: 10, borderRadius: 7 }} onClick={() => changeColor('blue')}>
          Primary
        </Button>
        <Button variant="soft" color={color[900]} style={{ Color: colors, margin: 10, borderRadius: 7 }} onClick={() => changeColor('purple')}>
          Secondary
        </Button>
        <Button variant="soft" style={{ backgroundColor: colors, margin: 10, borderRadius: 7 }} onClick={() => changeColor('grey')}>
          Neutral
        </Button>
        <Button variant="soft" style={{ backgroundColor: colors, margin: 10, borderRadius: 7 }} onClick={() => changeColor('green')}>
          Success
        </Button>
        <Button variant="soft" style={{ backgroundColor: colors, margin: 10, borderRadius: 7 }} onClick={() => changeColor('yellow')}>
          Alert
        </Button>
        <Button variant="soft" style={{ backgroundColor: colors, margin: 10, borderRadius: 7 }} onClick={() => changeColor('red')}>
          Danger
        </Button>
        
      </div>
      <Box display="flex" flexWrap="wrap">
      if (Array.isArray(colors[color])) {
  colors[color].map(((colorCode, index)) => {
    // Your code logic here
 
       
          <Box
            key={index}
            width="120px"
            height="70px"
            backgroundColor={colorCode}
            borderRadius={10}
          />
  }
  else{
  <p>nada</p>
  })};
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
 
   <Network/>
    <Lostokens/>

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

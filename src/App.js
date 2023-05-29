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

const Cuadrospalette = () => {
  const colors = {
    blue: ['#005b96', '#0278ae', '#039fb8', '#04c4d9', '#0be2f0', '#0cf0ff'],
    purple: ['#400080', '#5100a8', '#6300d4', '#7500ff', '#9700ff', '#b900ff'],
    grey: ['#333333', '#4f4f4f', '#6b6b6b', '#878787', '#a3a3a3', '#bfbfbf'],
    yellow: ['#ffd700', '#ffdd00', '#ffe400', '#ffeb00', '#fff200', '#fff900'],
    red: ['#a80000', '#c40000', '#e10000', '#ff0000', '#ff1919', '#ff3333'],
    green: ['#008000', '#009900', '#00b200', '#00cc00', '#00e500', '#00ff00'],
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
      <h1>Paleta de colores</h1>
      <div>
        <button style={{ backgroundColor: colors.blue[700], margin: 10, borderRadius: 20 }} onClick={() => changeColor('blue')}>
          Primario
        </button>
        <button style={{ backgroundColor: colors.purple[700], margin: 10, borderRadius: 20 }} onClick={() => changeColor('purple')}>
          Secundario
        </button>
        <button style={{ backgroundColor: colors.grey[700], margin: 10, borderRadius: 20 }} onClick={() => changeColor('grey')}>
          Neutro
        </button>
        <button style={{ backgroundColor: colors.yellow[700], margin: 10, borderRadius: 20 }} onClick={() => changeColor('yellow')}>
          Advertencia
        </button>
        <button style={{ backgroundColor: colors.red[700], margin: 10, borderRadius: 20 }} onClick={() => changeColor('red')}>
          Peligro
        </button>
        <button style={{ backgroundColor: colors.green[700], margin: 10, borderRadius: 20 }} onClick={() => changeColor('green')}>
          Éxito
        </button>
      </div>
      <Box display="flex" flexWrap="wrap">
        {colors[color].map((colorCode, index) => (
          <Box
            key={index}
            width="100px"
            height="100px"
            backgroundColor={colorCode}
            margin="10px"
          />
        ))}
      </Box>
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
       
 
    

      
      </Box>
    </CssVarsProvider>
    
    </div>

    

        
  );
}

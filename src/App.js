import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import { useState } from 'react';
import Box from '@mui/joy/Box';
import Sheet from '@mui/joy/Sheet';
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
function Cambiocolor(){
  const{ mode, setMode}= useColorScheme();

}
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

    <ModeSwitcher />
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
      
      <Grid sx={{ flexGrow: 2 }} container>

            <Grid item xs={3.5}>
              <Grid container justifyContent="center">
                <List>
                  <Botonnorm/>
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

import * as React from 'react';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';

//funcion colores
// color=useTheme{{vars.palette.colores.mainchannel}}

export const Botonnorm = () => {
  return (
    <List>
    <Typography level="body2" justifySelf="flex-end">
            Button:
          </Typography>
          <ListItem><Button variant="solid" color="primary">
            Solid
          </Button> 
          <Divider orientation='vertical'style={{margin:10}}/>
          <Button variant="soft" color="primary">
            Soft
          </Button>
          <Divider orientation='vertical'style={{margin:10}}/>
          <Button variant="outlined" color="primary">
            Outlined
          </Button>
          <Divider orientation='vertical'style={{margin:10}}/>
          <Button variant="plain" color="primary">
            Plain
          </Button></ListItem>
          <ListItem><Button disabled variant="solid">
            Solid
          </Button>
          <Divider orientation='vertical'style={{margin:10}}/>
          <Button disabled variant="soft">
            Soft
          </Button>
          <Divider orientation='vertical'style={{margin:10}}/>
          <Button disabled variant="outlined">
            Outlined
          </Button>
          <Divider orientation='vertical'style={{margin:10}}/>
          <Button disabled variant="plain" >
            Plain
          </Button></ListItem>
              <Divider
            style={{margin:20}}
            />
            </List>
  )
}


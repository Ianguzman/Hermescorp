import * as React from 'react';
import Typography from '@mui/joy/Typography';
import Switch from '@mui/joy/Switch';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';

export function SwitchControlled() {
    const [checked, setChecked] = React.useState(false);
    return (
        <List>
        <Typography level="body2" justifySelf="flex-end">
          Switch
        </Typography>
        <ListItem>
          <Switch variant="solid" defaultChecked label="Solid"/>
          <Divider orientation='vertical'style={{margin:10}}/>
          <Switch variant="soft" defaultChecked label="Solid"/>
          <Divider orientation='vertical'style={{margin:10}}/>
          <Switch variant="outlined" defaultChecked label="Solid"/>
          <Divider orientation='vertical'style={{margin:10}}/>
          <Switch variant="plain" defaultChecked label="Solid"/>
        </ListItem>
        <ListItem>
          <Switch disabled variant="solid" defaultChecked label="Solid"/>
          <Divider orientation='vertical'style={{margin:10}}/>
          <Switch disabled variant="soft" defaultChecked label="Solid"/>
          <Divider orientation='vertical'style={{margin:10}}/>
          <Switch disabled variant="outlined" defaultChecked label="Solid"/>
          <Divider orientation='vertical'style={{margin:10}}/>
          <Switch disabled variant="plain" defaultChecked label="Solid"/>
        </ListItem>
      
          <Divider
          style={{margin:20}}
          />
          </List>
    );
    
  }
    
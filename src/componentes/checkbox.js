import * as React from 'react';
import Checkbox from '@mui/joy/Checkbox';
import Typography from '@mui/joy/Typography';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';



export const Checkboxitem = () => {
  return (
    <List>
    <Typography level="body2" justifySelf="flex-end">
    Checkbox:
    </Typography>
    <ListItem>
      <Checkbox variant="solid" defaultChecked label="Solid" />
      <Divider orientation='vertical'style={{margin:10}}/>
      <Checkbox variant="soft" defaultChecked label="Soft" />
      <Divider orientation='vertical'style={{margin:10}}/>
      <Checkbox variant="outlined" defaultChecked label="Outlined" />
      <Divider orientation='vertical'style={{margin:10}}/>
      <Checkbox variant="plain" defaultChecked label="Plain" />
    </ListItem>
    <ListItem>
      <Checkbox disabled variant="solid" defaultChecked label="Solid" />
      <Divider orientation='vertical'style={{margin:10}}/>
      <Checkbox disabled variant="soft" defaultChecked label="Soft" />
      <Divider orientation='vertical'style={{margin:10}}/>
      <Checkbox disabled variant="outlined" defaultChecked label="Outlined" />
      <Divider orientation='vertical'style={{margin:10}}/>
      <Checkbox disabled variant="plain" defaultChecked label="Plain" />     
    </ListItem>
  </List>
  )
}




import * as React from 'react';
import Typography from '@mui/joy/Typography';
import Input  from '@mui/joy/Input';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';


export const Inputnorm = () => {
  return (
<List aria-label="basic-list">
      <Typography level='body2'justifySelf="flex-end" margin={1}>
        Input
      </Typography>
        <ListItem>
          <Input placeholder="Solid" variant="solid" size='sm' color='primary'/>
          <Divider orientation='vertical'style={{margin:10}}/>
          <Input placeholder="Soft" variant="soft" size='sm' color='primary'/>
          <Divider orientation='vertical'style={{margin:10}}/>
          <Input placeholder="Outlined" variant="outlined" size='sm' color='primary'/>
          <Divider orientation='vertical'style={{margin:10}}/>
          <Input placeholder="Plain" variant="plain" size='sm' color='primary'/>
        </ListItem>
        <ListItem>
          <Input placeholder="Disabled Solid" disabled variant="solid" size='sm' color='primary'/>
          <Divider orientation='vertical'style={{margin:10}}/>
          <Input placeholder="Disabled Soft" disabled variant="soft" size='sm' color='primary'/>
          <Divider orientation='vertical'style={{margin:10}}/>
          <Input placeholder="Disabled Outlined" disabled variant="outlined" size='sm' color='primary'/>
          <Divider orientation='vertical'style={{margin:10}}/>
          <Input placeholder="Disabled Plain" disabled variant="plain" size='sm' sx={{mr:-15}} color='primary'/>
        </ListItem>
        <Divider style={{margin:20}}/>
    </List> 
  )
}




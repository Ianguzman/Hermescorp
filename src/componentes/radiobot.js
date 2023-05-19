import * as React from 'react';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Radio from '@mui/joy/Radio';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';



//RadioBUttons|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
export function RadioButtons() {
    const [selectedValue, setSelectedValue] = React.useState('a');
  
    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
  
    return (
      <Box sx={{ display: 'flex', gap: 2 }}>
        <List >
          <Typography level="body2" justifySelf="flex-end">
          Radio Buttons
          </Typography>
          <ListItem>
            <Radio variant="solid" defaultChecked label="Solid"></Radio>
            <Divider orientation='vertical'style={{margin:10}}/>
            <Radio variant="soft" defaultChecked label="Soft"></Radio>
            <Divider orientation='vertical'style={{margin:10}}/>
            <Radio variant="outlined" defaultChecked label="Outlined"></Radio>
            <Divider orientation='vertical'style={{margin:10}}/>
            <Radio variant="plain" defaultChecked label="Plain"></Radio>
          </ListItem>
          <ListItem>
            <Radio disabled variant="solid" defaultChecked label="Solid"></Radio>
            <Divider orientation='vertical'style={{margin:10}}/>
            <Radio disabled variant="soft" defaultChecked label="Soft"></Radio>
            <Divider orientation='vertical'style={{margin:10}}/>
            <Radio disabled variant="outlined" defaultChecked label="Outlined"></Radio>
            <Divider orientation='vertical'style={{margin:10}}/>
            <Radio disabled variant="plain" defaultChecked label="Plain"></Radio>
          </ListItem>
        </List>
      </Box>
    );
  }
  //||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
  
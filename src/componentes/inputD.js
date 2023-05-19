import React from 'react';
import Input from '@mui/joy/Input';
import Option from '@mui/joy/Option'; 
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import Select from '@mui/joy/Select';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';


export function InputDecorators() {
    const [currency, setCurrency] = React.useState('dollar');
    return(
      <List>
        <Typography level="body2" justifySelf="flex-end">
            Input extra:
          </Typography>
          <Input placeholder='Hola' style={{width:300, margin:10}}></Input>
          <Input
        placeholder="Amount"
        startDecorator={{ dollar: '$', baht: '฿', yen: '¥' }[currency]}
        endDecorator={
          <React.Fragment>
            <Divider orientation="vertical" />
            <Select
              variant="plain"
              value={currency}
              onChange={(_, value) => setCurrency(value)}
              sx={{ mr: -1.5, '&:hover': { bgcolor: 'transparent' } }}
            >
              <Option value="dollar">US dollar</Option>
              <Option value="baht">Thai baht</Option>
              <Option value="yen">Japanese yen</Option>
            </Select>
          </React.Fragment>
        }
        sx={{ width: 300 }}
        />
       <Input
          placeholder="Amount"
          startDecorator={{ dollar: '$', baht: '฿', yen: '¥' }[currency]}
          sx={{ width: 300 }}
        />
       
       <Input
        endDecorator={
          <React.Fragment>
            <Select
              variant="plain"
              value={currency}
              onChange={(_, value) => setCurrency(value)}
              sx={{ mr: -1.5, '&:hover': { bgcolor: 'transparent' } }}
            >
              <Option value="dollar">US dollar</Option>
              <Option value="baht">Thai baht</Option>
              <Option value="yen">Japanese yen</Option>
            </Select>
          </React.Fragment>
        }
        sx={{ width: 300 }}
      />
        </List>
     
       

);
  }








import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Add from '@mui/icons-material/Add';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import ThumbUp from '@mui/icons-material/ThumbUp';


//Boton extra
export function ButtonIcons() {
    return (
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <List>
        <Divider style={{margin:20}}/>
          <Typography level="body2" justifySelf="flex-end">
            Button extra
          </Typography>
          <ListItem>
            <Button variant="solid" color="primary">Button</Button>
          <Divider orientation='vertical'style={{margin:10}}/>
            <Button startDecorator={<Add />}>Add to cart</Button>
            <Divider orientation='vertical'style={{margin:10}}/>
            <Button variant="soft" endDecorator={<KeyboardArrowRight />} color="primary">
            Checkout:
            </Button>
            <Divider orientation='vertical'style={{margin:10}}/>
            <Button aria-label="Like" variant="outlined" color="primary">   
            <ThumbUp />
            </Button>
          </ListItem>
        </List>
      </Box>
    );
  }
  //
 
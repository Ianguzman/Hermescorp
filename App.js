import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Box from '@mui/joy/Box';
import Sheet from '@mui/joy/Sheet';
import Button from '@mui/joy/Button';
import Chip from '@mui/joy/Chip';
import Checkbox from '@mui/joy/Checkbox';
import Typography from '@mui/joy/Typography';
import Input from '@mui/joy/Input';
import Switch from '@mui/joy/Switch';
import Radio from '@mui/joy/Radio';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import RadioGroup from '@mui/joy/RadioGroup';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Add from '@mui/icons-material/Add';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import ThumbUp from '@mui/icons-material/ThumbUp';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import  Grid  from '@mui/joy/Grid';



const useEnhancedEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

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
      color="neutral"
      onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
    >
      {mode === 'dark' ? 'Claro' : 'Obscuro'}
      
      </Switch>
  );
}

function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const jsx = `
<Grid container spacing={${spacing}}>
`;

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
          {[0, 1].map((value) => (
            <Grid key={value}>
              <Sheet
                sx={{
                  height: 140,
                  width: 100,
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid xs={12}>
        <Sheet sx={{ p: 2 }}>
          <Grid container>
            <Grid>
              <FormControl>
                <FormLabel sx={{ mb: 1.5 }}>spacing</FormLabel>
                <RadioGroup
                  name="spacing"
                  aria-label="spacing"
                  value={spacing.toString()}
                  onChange={handleChange}
                  orientation="horizontal"
                  sx={{ flexWrap: 'wrap', gap: 2, '--RadioGroup-gap': '0px' }}
                >
                  {[0, 0.5, 1, 2, 3, 4, 8, 12].map((value) => (
                    <Radio
                      key={value}
                      value={value.toString()}
                      label={value.toString()}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Sheet>
      </Grid>
    </Grid>
  );
}

function InputDecorators() {
  const [currency, setCurrency] = React.useState('dollar');
  return (
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
  );
}

function InputDecorators2() {
  const [currency, setCurrency] = React.useState('dollar');
  return (
    <Input
      placeholder="Amount"
      startDecorator={{ dollar: '$', baht: '฿', yen: '¥' }[currency]}
      sx={{ width: 300 }}
    />
  );
}
function InputDecorators3() {
  const [currency, setCurrency] = React.useState('dollar');
  return (
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
  );
}

function ButtonIcons() {
  return (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      <Button startDecorator={<Add />}>Add to cart</Button>
      <Button aria-label="Like" variant="outlined" color="neutral">
        <ThumbUp />
      </Button>
      <Button variant="soft" endDecorator={<KeyboardArrowRight />} color="success">
        Checkout
      </Button>
    </Box>
  );
}

function MyApp() {
  return <Divider
  style={{margin:10}}
  />;
}

 function SwitchControlled() {
  const [checked, setChecked] = React.useState(false);
  return (
    <Switch
      checked={checked}
      onChange={(event) => setChecked(event.target.checked)}
    />
  );
}

function RadioButtons() {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Radio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-buttons"
        slotProps={{ input: { 'aria-label': 'A' } }}
      />
      <Radio
        checked={selectedValue === 'b'}
        onChange={handleChange}
        value="b"
        name="radio-buttons"
        slotProps={{ input: { 'aria-label': 'B' } }}
      />
    </Box>
  );
}
export default function ModeToggle() {
  // the `node` is used for attaching CSS variables to this demo,
  // you might not need it in your application.
  const [node, setNode] = React.useState(null);
  useEnhancedEffect(() => {
    setNode(document.getElementById('mode-toggle'));
  }, []);

  return (
    <CssVarsProvider
      // the props below are specific to this demo,
      // you might not need them in your app.
      //
      // the element to apply [data-joy-color-scheme] attribute.
      colorSchemeNode={node || null}
      //
      // the selector to apply the CSS theme variables stylesheet.
      colorSchemeSelector="#mode-toggle"
      //
      // the local storage key to use.
      modeStorageKey="mode-toggle-demo"
    >
      
      <Box
         id="mode-toggle"
        sx={{
          display: 'grid',
          bgcolor: 'background.body',
          justifyItems: 'center',
          alignItems: 'center',

        }}
      >
        <main
        style={{
          margin:10
        }}
        >
        <ModeSwitcher />
        <Grid sx={{ flexGrow: 2 }} container>

            <Grid item xs={3.5}>
              <Grid container justifyContent="center">
    

  
     <List aria-label="basic-list">
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
      <Button disabled variant="plain">
        Plain
      </Button></ListItem>
          <Divider
        style={{margin:20}}
        />
        
    </List> 

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
              </Grid>
            </Grid>


<Divider orientation='vertical' style={{margin:20}}/>


            <Grid item xs={8}>
              <Grid container justifyContent="center">

    <List aria-label="basic-list">
      <Typography level='body2'justifySelf="flex-end" margin={1}>
        Imput
      </Typography>
      <ListItem>
        <Input placeholder="Solid" variant="solid" size='sm'/>
        <Divider orientation='vertical'style={{margin:10}}/>
        <Input placeholder="Soft" variant="soft" size='sm' />
        <Divider orientation='vertical'style={{margin:10}}/>
        <Input placeholder="Outlined" variant="outlined" size='sm' />
        <Divider orientation='vertical'style={{margin:10}}/>
        <Input placeholder="Plain" variant="plain" size='sm' />
      </ListItem>
      <ListItem>
        <Input placeholder="Disabled Solid" disabled variant="solid" size='sm' />
        <Divider orientation='vertical'style={{margin:10}}/>
        <Input placeholder="Disabled Soft" disabled variant="soft" size='sm' />
        <Divider orientation='vertical'style={{margin:10}}/>
        <Input placeholder="Disabled Outlined" disabled variant="outlined" size='sm' />
        <Divider orientation='vertical'style={{margin:10}}/>
        <Input placeholder="Disabled Plain" disabled variant="plain" size='sm' sx={{mr:-15}} />
      </ListItem>
      <Divider style={{margin:20}}/>
    </List>

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
        <List>
        <Divider style={{margin:20}}/>
          <Typography level="body2" justifySelf="flex-end">
            Button extra
          </Typography>
          <ListItem>
            <Button variant="solid" color="neutral">Button</Button>
          <Divider orientation='vertical'style={{margin:10}}/>
            <Button startDecorator={<Add />}>Add to cart</Button>
            <Divider orientation='vertical'style={{margin:10}}/>
            <Button variant="soft" endDecorator={<KeyboardArrowRight />} color="success">
            Checkout:
            </Button>
            <Divider orientation='vertical'style={{margin:10}}/>
            <Button aria-label="Like" variant="outlined" color="neutral">   
            <ThumbUp />
            </Button>
          </ListItem>
        </List>

              </Grid>
            </Grid>
    </Grid>

        <Divider style={{margin:20}}/>
        <List>
        <Typography level="body2" justifySelf="flex-end">
            Input extra:
          </Typography>
          <Input placeholder='Hola' style={{width:300, margin:10}}></Input>
          <InputDecorators3 />
          <InputDecorators2/>
        <InputDecorators/>
       
        
        </List>

      </main>
      </Box>


      
    </CssVarsProvider>
  );
}
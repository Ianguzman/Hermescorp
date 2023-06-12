import React from 'react'
import Box from '@mui/joy/Box';
import Divider from '@mui/joy/Divider';

export const Network = () => {
  const handleSizeChange = (event) => {
    // Lógica para manejar el cambio de tamaño
    const size = event.target.value;
    console.log('Selected size:', size);
  };

  const handlePixelChange = (event) => {
    // Lógica para manejar el cambio de píxeles
    const pixels = event.target.value;
    console.log('Selected pixels:', pixels);
  };

  return (
    <div className='general' style={{ display: 'flex', flexDirection: 'row'}}>
      <div style={{display:'flex', flexDirection:'column'}} >
        <p>Size</p>
        <label>
          <select onChange={handleSizeChange}  style={{ height:30, width: 300, borderRadius:10}} >
            <option>Sm</option>
            <option>Md</option>
            <option>Lg</option>
          </select>
        </label>
      
        </div>
     <div style={{display:'flex', flexDirection:'column'}} >
      <p>Padding</p>
      <div style={{ display: 'flex', flexDirection: 'row'}}>
        <Box style={{display:'flex', flexDirection:'row'}} width={130} height={50}  border={1} borderRadius={10} margin={1} alignItems={'center'} justifyContent={'center'}>
          <p>left</p>
          <Divider orientation='vertical' style={{margin:5}}/>
          <label>
          <input type="number" onChange={handlePixelChange}  style={{ height:16, width: 50}}/>
        </label>
        </Box>
        <Box style={{display:'flex', flexDirection:'row'}} width={130} height={50}  border={1} borderRadius={10} margin={1} alignItems={'center'} justifyContent={'center'}>
          <p>Top</p>
          <Divider orientation='vertical' style={{margin:5}}/>
          <label>
          <input type="number" onChange={handlePixelChange} style={{ height:16, width: 50}} />
        </label>
        </Box>
        <Box style={{display:'flex', flexDirection:'row'}} width={130} height={50}  border={1} borderRadius={10} margin={1} alignItems={'center'} justifyContent={'center'}>
          <p>Right</p>
          <Divider orientation='vertical' style={{margin:5}}/>
          <label>
          <input type="number" onChange={handlePixelChange}  style={{ height:16, width: 50}}/>
        </label>
        </Box>
        <Box style={{display:'flex', flexDirection:'row'}}width={130} height={50}  border={1} borderRadius={10} margin={1} alignItems={'center'} justifyContent={'center'}>
          <p>Bottom</p>
          <Divider orientation='vertical' style={{margin:5}}/>
          <label>
          <input type="number" onChange={handlePixelChange} style={{ height:16, width: 50}} />
        </label>
        </Box>
        <Box style={{display:'flex', flexDirection:'row'}} width={130} height={50}  border={1} borderRadius={10} margin={1} alignItems={'center'} justifyContent={'center'}>
          <p>Border</p>
          <Divider orientation='vertical' style={{margin:5}}/>
          <label>
          <input type="number" onChange={handlePixelChange} style={{ height:16, width: 50}}/>
        </label>
        </Box>
        </div>
        </div>
  
    </div>
  );
};
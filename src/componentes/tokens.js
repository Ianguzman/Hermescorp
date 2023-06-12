// import React from 'react'
import Box from '@mui/joy/Box';
import Divider from '@mui/joy/Divider';
// import { useState } from 'react';
import Add from '@mui/icons-material/Add';
import React, { useState } from 'react';

export function Lostokens() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div style={{display:'flex', flexDirection:'column'}} >
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">Seleccione una opción</option>
        <option value="opcion1">Solid</option>
        <option value="opcion2">Soft</option>
        <option value="opcion3">Outlined</option>
        <option value="opcion4">Plain</option>
      </select>

      {selectedOption === 'opcion1' && (
              <div className='general' style={{ display: 'flex', flexDirection: 'row', justifyContent:'center'}}>
       
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'center'}}>
              
              <div>
                  <Box  borderRadius={10} margin={1} alignItems={'center'}>
                   <div style={{display:'flex', flexDirection:'row'}} >
                    <p style={{marginRight:'100px'}}>SolidColor</p>
                    <Box style={{display:'flex', flexDirection:'row', borderRadius:'10px'}} border={1} alignItems={'center'}  width={500} height={30}>
                      <Box
                        width="40px"
                        height="30px"
                        backgroundColor='#072859'
                        borderRadius={10}
                        marginRight={10}
                        
                      />
                      <Box>
                        <p>Titulox</p>
                      </Box>
                    </Box>
                   </div>
                   <div style={{display:'flex', flexDirection:'row'}} >
                    <p style={{marginRight:'100px'}}>SolidBorder</p>
                    <Box style={{display:'flex', flexDirection:'row', borderRadius:'10px'}} border={1} alignItems={'center'}  width={500} height={30}>
                      <Box
                        width="40px"
                        height="30px"
                        backgroundColor='#ADDBFF'
                        borderRadius={10}
                        marginRight={10}
                        
                      />
                      <Box>
                        <p>Titulox</p>
                      </Box>
                    </Box>
                   </div>
                   <div style={{display:'flex', flexDirection:'row'}} >
                    <p style={{marginRight:'100px'}}>SolidBg</p>
                    <Box style={{display:'flex', flexDirection:'row', borderRadius:'10px'}} border={1} alignItems={'center'}  width={500} height={30}>
                      <Box
                        width="40px"
                        height="30px"
                        backgroundColor='#ffff'
                        borderRadius={10}
                        marginRight={10}
                        
                      />
                      <Box>
                        <p>Titulox</p>
                      </Box>
                    </Box>
                   </div>
                   <div style={{display:'flex', flexDirection:'row'}} >
                    <p style={{marginRight:'100px'}}>SolidHoverBg</p>
                    <Box style={{display:'flex', flexDirection:'row', borderRadius:'10px'}} border={1} alignItems={'center'}  width={500} height={30}>
                      <Box
                        width="40px"
                        height="30px"
                        backgroundColor='#F4FAFF'
                        borderRadius={10}
                        marginRight={10}
                        
                      />
                      <Box>
                        <p>Titulox</p>
                      </Box>
                    </Box>
                   </div>
                   <div style={{display:'flex', flexDirection:'row'}} >
                    <p style={{marginRight:'100px'}}>SolidActiveBg</p>
                    <Box style={{display:'flex', flexDirection:'row', borderRadius:'10px'}} border={1} alignItems={'center'}  width={500} height={30}>
                      <Box
                        width="40px"
                        height="30px"
                        backgroundColor='#ADDBFF'
                        borderRadius={10}
                        marginRight={10}
                        
                      />
                      <Box>
                        <p>Titulox</p>
                      </Box>
                    </Box>
                   </div>
                   <div style={{display:'flex', flexDirection:'row'}} >
                    <p style={{marginRight:'100px'}}>SolidDisabledColor</p>
                    <Box style={{display:'flex', flexDirection:'row', borderRadius:'10px'}} border={1} alignItems={'center'}  width={500} height={30}>
                      <Box
                        width="40px"
                        height="30px"
                        backgroundColor='#ADDBFF'
                        borderRadius={10}
                        marginRight={10}
                        
                      />
                      <Box>
                        <p>Titulox</p>
                      </Box>
                    </Box>
                   </div>
                   <div style={{display:'flex', flexDirection:'row'}} >
                    <p style={{marginRight:'100px'}}>SolidDisabledBg</p>
                    <Box style={{display:'flex', flexDirection:'row', borderRadius:'10px'}} border={1} alignItems={'center'}  width={500} height={30}>
                      <Box
                        width="40px"
                        height="30px"
                        backgroundColor='#ffff'
                        borderRadius={10}
                        marginRight={10}
                        
                      />
                      <Box>
                        <p>Titulox</p>
                      </Box>
                    </Box>
                   </div>
                   
          
                  </Box>
                
             
         </div>
          </div>
       
       </div>
      )}

      {selectedOption === 'opcion2' && (
       <div className='general' style={{ display: 'flex', flexDirection: 'row'}}>
       
       <div style={{display:'flex', flexDirection:'column'}} >
       
       <div style={{ display: 'flex', flexDirection: 'row'}}>
           <Box border={1} borderRadius={10} margin={1} alignItems={'center'}>
            <p>SoftColor</p>
            <p>SoftBorder</p>
            <p>SoftdBg</p>
             <p>SoftHoverBg</p>
             <p>SoftActiveBg</p>
             <p>SoftDisabledColor</p>
             <p>SoftDisabledBg</p>
           </Box>
         
      
  </div>
   </div>

</div>
      )}

      {selectedOption === 'opcion3' && (
        <div className='general' style={{ display: 'flex', flexDirection: 'row'}}>
       
               <div style={{display:'flex', flexDirection:'column'}} >
               
               <div style={{ display: 'flex', flexDirection: 'row'}}>
                   <Box border={1} borderRadius={10} margin={1} alignItems={'center'}>
                    <p>OutlinedColor</p>
                    <p>outlinedBorder</p>
                    <p>outlinedBg</p>
                     <p>outlinedHoverBg</p>
                     <p>outlinedActiveBg</p>
                     <p>outlinedDisabledColor</p>
                     <p>outlinedDisabledBg</p>
                   </Box>
                 
              
          </div>
           </div>
       
       </div>
//     );
//   };
           
      )}
       {selectedOption === 'opcion4' && (
              <div className='general' style={{ display: 'flex', flexDirection: 'row'}}>
       
              <div style={{display:'flex', flexDirection:'column'}} >
              
              <div style={{ display: 'flex', flexDirection: 'row'}}>
                  <Box border={1} borderRadius={10} margin={1} alignItems={'center'}>
                   <p>PlainColor</p>
                   <p>PlainBorder</p>
                   <p>PlaindBg</p>
                    <p>PlainHoverBg</p>
                    <p>PlainActiveBg</p>
                    <p>PlainDisabledColor</p>
                    <p>PlainDisabledBg</p>
                  </Box>
                
             
         </div>
          </div>
       
       </div>
      )}
    </div>
  );
}
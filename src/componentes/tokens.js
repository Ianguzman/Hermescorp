import Box from '@mui/joy/Box';
import Divider from '@mui/joy/Divider';
import Add from '@mui/icons-material/Add';
import React, { useState } from 'react';
import Button from '@mui/joy/Box';

export function Lostokens() {
  const [selectedOption, setSelectedOption] = useState('');
  const [elements, setElements] = useState([]);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleAddElement = () => {
    setElements([...elements, <div key={elements.length}>Nuevo elemento</div>]);
  };

  return (
    <div>
    <div style={{display:'flex', flexDirection:'row'}} >
      

      {selectedOption === 'opcion1' && (
              <div className='general' style={{ display: 'flex', flexDirection: 'row', justifyContent:'center'}}>
       
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'center'}}>
              
              <div>

                  <Box  borderRadius={10} margin={1} alignItems={'center'}>
                {elements}
                   <div style={{display:'flex', flexDirection:'row'}} >
                    
                    <Box width={200}><p style={{marginRight:'100px'}}>SolidColor</p></Box>
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
                    <Box width={200}><p style={{marginRight:'100px'}}>SolidBorder</p></Box>
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
                    <Box width={200}><p style={{marginRight:'100px'}}>SolidBg</p></Box>
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
                    <Box width={200}><p style={{marginRight:'100px'}}>SolidHoverBg</p></Box>
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
                    <Box width={200}><p style={{marginRight:'100px'}}>SolidActiveBg</p></Box>
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
                    <Box width={200}><p style={{marginRight:'100px'}}>SolidDisabledColor</p></Box>
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
                    <Box width={200}><p style={{marginRight:'100px'}}>SolidDisabledBg</p></Box>
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
      <div className='general' style={{ display: 'flex', flexDirection: 'row', justifyContent:'center'}}>
       
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'center'}}>
      
      <div>
          <Box  borderRadius={10} margin={1} alignItems={'center'}>
            {elements}
           <div style={{display:'flex', flexDirection:'row'}} >
            
            <Box width={200}><p style={{marginRight:'100px'}}>SoftColor</p></Box>
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
            <Box width={200}><p style={{marginRight:'100px'}}>SoftBorder</p></Box>
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
            <Box width={200}><p style={{marginRight:'100px'}}>SoftBg</p></Box>
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
            <Box width={200}><p style={{marginRight:'100px'}}>SoftHoverBg</p></Box>
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
            <Box width={200}><p style={{marginRight:'100px'}}>SoftActiveBg</p></Box>
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
            <Box width={200}><p style={{marginRight:'100px'}}>SoftDisabledColor</p></Box>
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
            <Box width={200}><p style={{marginRight:'100px'}}>SoftDisabledBg</p></Box>
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
      {selectedOption === 'opcion3' && (
        <div className='general' style={{ display: 'flex', flexDirection: 'row', justifyContent:'center'}}>
       
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'center'}}>
        
        <div>
            <Box  borderRadius={10} margin={1} alignItems={'center'}>
             <div style={{display:'flex', flexDirection:'row'}} >
              
              <Box width={200}><p style={{marginRight:'100px'}}>OutlinedColor</p></Box>
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
              <Box width={200}><p style={{marginRight:'100px'}}>OutlinedBorder</p></Box>
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
              <Box width={200}><p style={{marginRight:'100px'}}>OutlinedBg</p></Box>
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
              <Box width={200}><p style={{marginRight:'100px'}}>OutlinedHoverBg</p></Box>
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
              <Box width={200}><p style={{marginRight:'100px'}}>OutlinedActiveBg</p></Box>
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
              <Box width={200}><p style={{marginRight:'100px'}}>OutlinedDisabledColor</p></Box>
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
              <Box width={200}><p style={{marginRight:'100px'}}>OutlinedDisabledBg</p></Box>
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
       {selectedOption === 'opcion4' && (
              <div className='general' style={{ display: 'flex', flexDirection: 'row', justifyContent:'center'}}>
       
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'center'}}>
              
              <div>
                  <Box  borderRadius={10} margin={1} alignItems={'center'}>
                   <div style={{display:'flex', flexDirection:'row'}} >
                    
                    <Box width={200}><p style={{marginRight:'100px'}}>PlainColor</p></Box>
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
                    <Box width={200}><p style={{marginRight:'100px'}}>PlainBorder</p></Box>
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
                    <Box width={200}><p style={{marginRight:'100px'}}>PlainBg</p></Box>
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
                    <Box width={200}><p style={{marginRight:'100px'}}>PlainHoverBg</p></Box>
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
                    <Box width={200}><p style={{marginRight:'100px'}}>PlainActiveBg</p></Box>
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
                    <Box width={200}><p style={{marginRight:'100px'}}>PlainDisabledColor</p></Box>
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
                    <Box width={200}><p style={{marginRight:'100px'}}>PlainDisabledBg</p></Box>
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
      <select value={selectedOption} onChange={handleSelectChange} style={{ height:30, width: 300, borderRadius:10}}>
        <option value="">Seleccione una opción</option>
        <option value="opcion1">Solid</option>
        <option value="opcion2">Soft</option>
        <option value="opcion3">Outlined</option>
        <option value="opcion4">Plain</option>
      </select>
      </div>
      <button variant="solid" startDecorator={<Add />} onClick={handleAddElement}>Agregar elemento</button>
      
    </div>
  );
}
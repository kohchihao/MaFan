require('dotenv').config()
const miio = require('miio');

miio
  .device({ address: process.env.IPADDRESS, token: process.env.TOKEN })
  .then(device => {
    console.log('Connected to', device)
    
      device.call('set_power', ['on']).then(console.log);

      //set direct speed 
      //device.call('set_speed_level', [25]).then(console.log)

      //device.call('set_natural_level', [25]).then(console.log)

      //rotate left/right by 5 degree
      //device.call('set_move', ['left']).then(console.log)
      
      //set angle between 0 and 120 
      //device.call('set_angle', [120]).then(console.log)
      
      //set oscillation
      //device.call('set_angle_enable', ['off']).then(console.log)
 
  });

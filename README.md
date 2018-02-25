# Girl Develop It Demo
This is an example node/express server to show how to get data from a Particle Photon and interact with it. It's meant to be as simple of an example as I can make it :) 

## Setup (Hardware)
1. Wire up the LEDs and temperature sensor (don't forget the pull up resistor on the temperature sensor)
1. Copy code from photon.ino in this repository to your Photon
1. Include DS18B20 and Neopixel libraries
1. Flash to a Photon

## Setup (Server) 
1. Run `npm install`
1. Change particleInfoTEMP.js to particleInfo.js and add your Photon's device ID and access token.
1. Run `npm start`
1. Go to http://localhost:3000/ 
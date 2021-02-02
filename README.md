# Think Happy Cats
### A simple application meant to serve a small dose of serotonin in the form of cat photos and jokes. 

### snack.expo.io
- To view a demo in the remote environment please see the demo to the right side of the coding environment. You may choose either iOS, Android or Web, though this application was made with iOS in mind. 
- If you have the expo app, you may also scan the QR code under the My Device buton.
  - This will provide a live demo for you right on your personal device rather than a simulation

### Running from your local machine (Mac OS & iOS):
- Have XCode installed and ready, be sure XCode.app is installed in your `/Applications` directory 
- Within your local directory in your terminal run `npm i` to install all of the necessary dependencies
- Run `npm start ios` to begin the iOS simulation using XCode
  - it should open a internet tab for `http://localhost:19002/` as well as launching the simulator application 
  - otherwise, you may scan the QR code on your device and view the live demo from the expo app on your device 

### Build 
- Currently the application uses two components, App & RandomCat where app stores all of the states of the application and passes them down to RandomCat to access and render. 
- `Tap for Cat!` will rerender the page with a new cat image and joke; checking the previously stored index of our collection before rerendering with a new index to prevent immediate repeats 
- `Punchline` will reveal the punchline to the cat joke 
- Think Happy Cats is planning to add a 'share to contacts' feature where you may share your favorite cat photo & quote pairing to any of your friends and family. 
- Think Happy Cats is also planning to add a gallery feature to view all the cat photos located in our collection at the user's leisure 


### Resources
- all cat photos are from [Unsplash](https://unsplash.com/s/photos/cats)
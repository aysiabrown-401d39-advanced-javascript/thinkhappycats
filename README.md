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
  - if the application will not load from `npm start ios` try `npm start` and then from your browser window click `run iOS simulation`

### Build 
- Currently the application uses two components, App & RandomCat where app stores all of the states of the application and passes them down to RandomCat to access and render. 
- `Tap for Shuffle!` will rerender the page with a new cat image and joke; checking the previously stored index of our collection before rerendering with a new index to prevent immediate repeats 
- `Punchline` will reveal the punchline to the cat joke 
- Think Happy Cats is planning to add a 'share to contacts' feature where you may share your favorite joke to any of your friends and family. 
- `Share` will allow you to share the current joke being viewed to your friends and family via the iPhone's native share feature
- `Toggle Gallery` will toggle the gallery view of all the cat photos within in the application, and the `add` button will allow you to add photo media (of cats) to the gallery from your device. 
  - note: this will request permissions to access read data from your device media 


### Resources
- all cat photos are from [Unsplash](https://unsplash.com/s/photos/cats)
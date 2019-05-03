##### Primary reference: https://facebook.github.io/react-native/docs/getting-started

### Faced while uploading the directory from ATOM to GitHub followed the below workaround

#### Create react native app using `react-native ListToDo`
Create a new ListToDo folder. Initialise the Git

Connect it with github using
 `git remote add origin https://github.com/pavanshettyks/ListToDo.git`

Copy the files from previous ListToDo directory which has github setup.
Push the new files.

### Run the app
### Need android studio with avd setup
Run the following commands in the terminal to open the virtual device:

###`cd C:\Users\Pavan\AppData\Local\Android\Sdk\emulator

emulator -list-avds

emulator -avd Pixel_2_API_25`

Now in a new terminal run the below command [its essential to run it in new terminal as closing the terminal closes virtual device]

###`cd ListToDo

react-native run-android`

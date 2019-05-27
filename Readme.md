##### Primary reference: https://facebook.github.io/react-native/docs/getting-started

##### Faced a lot of issues while uploading the directory from ATOM to GitHub. Follow the below workaround

#### Create react native app using `react-native init ListToDo`
Create a new ListToDo folder. Initialise the Git

Connect it with github using
##### `git remote add origin https://github.com/pavanshettyks/ListToDo.git`

Copy the files from previous ListToDo directory which has github setup.
Push the new files.

###To Run the app
[Need android studio with avd setup]

Run the following commands in the terminal to open the virtual device:

`cd C:\Users\Pavan\AppData\Local\Android\Sdk\emulator

emulator -list-avds

emulator -avd Pixel_2_API_25
`

Now in a new terminal run the below command [its essential to run it in new terminal as closing the terminal closes virtual device]

`cd ListToDo

react-native run-android`

Press the R key twice or select Reload from the Developer Menu (Ctrl + M) to see your changes!



https://invertase.io/oss/react-native-firebase/quick-start/android-firebase-credentials
https://invertase.io/blog/getting-started-with-cloud-firestore-on-react-native
//////////////////////////////////////////////


React Native Firebase:
npm install --save react-native-firebase
npm install --save react-native-firebase/firestore
npm install @firebase/firestore
npm install firebase


yarn add @react-native-firebase/firestore
react-native link @react-native-firebase/firestore

yarn add @react-native-firebase/app
react-native link @react-native-firebase/app
///////////////////////////////////////////////////////////////////////

clean NPM:  npm  cache clean --force

install firebase:  npm install --save react-native-firebase
link firebase:     react-native link react-native-firebase


clean grdadlle and build:  cd android
                          ./gradlew clean

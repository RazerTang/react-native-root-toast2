 ### react-native-root-toast2

-----------------------
 
 #### Simplify usage of react-native-root-toast,you can not use  it as a component but a simple function.
 #### Show only one at the same time!
 #### You can also use  react-native-root-toast,reference:https://github.com/magicismight/react-native-root-toast
 
 ### Install
 npm i react-native-root-toast2  --save
 
##### **Calling api**

```
import Toast from 'react-native-root-toast2';


### Usage 1:
Toast.show('This is a message');
Toast.hide();


### Usage 2:
// Add a Toast on screen.
 Toast.show('This is a message', {
    duration: Toast.durations.LONG,
    position: Toast.positions.BOTTOM,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
    onShow: () => {
        // calls on toast\`s appear animation start
    },
    onShown: () => {
        // calls on toast\`s appear animation end.
    },
    onHide: () => {
        // calls on toast\`s hide animation start.
    },
    onHidden: () => {
        // calls on toast\`s hide animation end.
    }
});

// You can manually hide the Toast, or it will automatically disappear after a `duration` ms timeout.
setTimeout(function () {
    Toast.hide();
}, 500);


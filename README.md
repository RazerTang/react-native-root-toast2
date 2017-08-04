 ####simplify usage of  react-native-root-toast,you can not use  it as a component but a simple function
 reference:https://github.com/magicismight/react-native-root-toast
 
##### **Calling api**

```
import Toast from 'react-native-root-toast';


### Usage 1:
Toast.show('This is a message');
Toast.hide();


### Usage 2:
// Add a Toast on screen.
let toast = Toast.show('This is a message', {
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
    Toast.hide(toast);
}, 500);


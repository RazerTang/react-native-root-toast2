import React, {
    Component,
    PropTypes
} from 'react';
import {
    View
} from 'react-native';
import RootSiblings from 'react-native-root-siblings';
import ToastContainer, {positions, durations} from './ToastContainer';

class Toast  {
    static displayName = 'Toast';
    static propTypes = ToastContainer.propTypes;
    static positions = positions;
    static durations = durations;

    static _toast = null;

    static show = (message, options = {position: positions.CENTER, duration: durations.LONG}) => {
        Toast.hide();
        _toast = new RootSiblings(<ToastContainer destroy={Toast.hide.bind(this)}
            {...options}
            visible={true}
        >
            {message}
        </ToastContainer>);
        return _toast
    };

    static hide = () => {
        if (this._toast &&this._toast instanceof RootSiblings) {
            this._toast.destroy();
        }
    };
}

export {
    RootSiblings as Manager
};
export default Toast;

import React from 'react';
import ReactDOM from 'react-dom';
/**
 * User: zyh
 * Date: 2018/2/25.
 * Time: 22:37.
 */
export default class AppRoot extends React.Component {
    constructor() {
        super(...arguments);
    }

    render() {
        return (
            <div>
                <div>{"你好，世界!!!"}</div>
            </div>
        )
    }
};
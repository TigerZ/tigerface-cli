import React from 'react';
import { Logger } from 'tigerface-common';
import { BarChart, PieChart } from 'tigerface-example';

/**
 * User: zyh
 * Date: 2018/2/25.
 * Time: 22:37.
 */
// const data = [5, 20, 25, 18, 12, 7, 15];

const demoData = [
    { name: '何敏', num: 38 },
    { name: '王菲丽', num: 76 },
    { name: '张思雨', num: 25 },
    { name: '王明清', num: 48 },
    { name: '袁立', num: 22 },
    { name: '邢惠珊', num: 71 },
    { name: '李安和', num: 45 },
];

const Style = {
    width: '400px',
    height: '300px',
    margin: '5px',
    float: 'left',
    border: '1px solid rgba(0,0,0,0.2)',
    backgroundColor: 'rgba(255,255,0,0.2)',
    borderBottom: '1px solid rgba(0,0,0,0.1)',
};

class AppRoot extends React.Component {
    static logger = Logger.getLogger('example.AppRoot');

    constructor(...args) {
        super(...args);
        this.state = {
            data: [...demoData],
            options: {
                speed: 3,
                font: '12px Kaiti',
                colors: ['red', 'brown', 'blue', 'green', 'orange', 'olive', 'purple', 'deepskyblue', 'teal', 'maroon'],
            },
        };
    }

    refresh = () => {
        let { data } = this.state;
        if (data.length > 1) {
            data.pop();
        } else {
            data = demoData;
        }
        this.setState({ data: [...data] });
    };

    render() {
        return (
            <div>
                <BarChart className="stage" style={Style} config={this.state.options} data={this.state.data} />
                <PieChart className="stage" style={Style} config={this.state.options} data={this.state.data} />
                <button onClick={() => this.refresh()}>刷新数据</button>
            </div>
        );
    }
}

export default AppRoot;


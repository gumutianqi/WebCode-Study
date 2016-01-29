//babel --presets react src --watch --out-dir build

var HelloMessage = React.createClass({
    displayName: 'HelloMessage',

    /**
     * 初始化State数据
     * @returns {{isComplete: string}}
     */
    getInitialState: function () {
        return {
            isComplete: '1'
        };
    },
    //使用函数, 处理返回复杂条件判断结果
    getIsComplete: function () {
        return this.state.isComplete ? 'is-complete' : '';
    },
    //click事件处理
    handlerClick: function (event) {
        console.log(event.target);
    },
    render: function () {
        var styles = {
            borderColor: "#999",
            borderWidth: "1px",
            borderStyle: "solid",
            padding: "10px 50px"
        };
        var classes = 'some-class-name ' + this.getIsComplete();
        return React.createElement(
            'div',
            { onClick: this.handlerClick, id: this.props.id, style: styles, className: classes },
            'Hello Larry, ',
            this.props.children
        );
    }
});

/**
 * 调用渲染输出
 */
setInterval(function () {

    ReactDOM.render(React.createElement(
        'div',
        null,
        React.createElement(
            'h2',
            null,
            'ReactJS-day01'
        ),
        React.createElement('hr', null),
        React.createElement(
            HelloMessage,
            { id: 'questionId' },
            'JSX'
        )
    ), document.getElementById("container"));
}, 50);
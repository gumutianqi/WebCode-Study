/**
 * Created by jettykoo on 16/1/18.
 */

/**
 * 定义一个自定义的组件
 */
var Divider = React.createClass({displayName: "Divider",
    render: function () {
        return (
            React.createElement("div", {className: "divider"}, 
                React.createElement("h2", null, this.props.children), 
                React.createElement("h5", null, dateToString(new Date())), 
                React.createElement("hr", null)
            )
        );
    }
});

/**
 * 时间格式化函数
 * @param d
 * @returns {string}
 */
function dateToString(d) {
    return [
        d.getFullYear(),
        d.getMonth() + 1,
        d.getDate()
    ].join("-");
}

/**
 * 在最后渲染组件
 */
React.render(
    React.createElement("div", null, 
        React.createElement("h1", null, "Hello, World!"), 
        React.createElement(Divider, null, "Questions")
    ),
    document.getElementById("example")
);
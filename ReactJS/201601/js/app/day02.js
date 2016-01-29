/**
 * Created by jettykoo on 16/1/20.
 */
var HelloMessage = React.createClass({
    displayName: "HelloMessage",

    render: function () {

        return React.createElement(
            "div",
            null,
            "Hello ",
            this.props.name
        );
    }
});

/**
 * 调用渲染输出
 */
setInterval(function () {
    ReactDOM.render(React.createElement(
        "div",
        null,
        React.createElement(
            "h2",
            null,
            "ReactJS-day01"
        ),
        React.createElement("hr", null),
        React.createElement(HelloMessage, { name: "John", id: "HelloID" })
    ), document.getElementById("container"));
}, 50);
/**
 * Created by jettykoo on 16/1/20.
 */
var HelloMessage = React.createClass({
    render: function () {

        return <div>Hello {this.props.name}</div>;
    }
});

/**
 * 调用渲染输出
 */
setInterval(function () {
    ReactDOM.render(
        <div>
            <h2>ReactJS-day01</h2><hr/>
            <HelloMessage name="John" id="HelloID"/>
        </div>,
        document.getElementById("container")
    )
}, 50);

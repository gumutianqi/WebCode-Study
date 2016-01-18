/**
 * Created by jettykoo on 16/1/18.
 */

/**
 * 定义一个自定义的组件
 */
var Divider = React.createClass({
    render: function () {
        return (
            <div className="divider">
                <h2>{this.props.children}</h2>
                <h5>{dateToString(new Date())}</h5>
                <hr/>
            </div>
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
    <div>
        <h1>Hello, World!</h1>
        <Divider>Questions</Divider>
    </div>,
    document.getElementById("example")
);
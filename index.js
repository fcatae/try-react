// var ExampleApplication = React.createClass({
//   render: function() {
//     var elapsed = Math.round(this.props.elapsed  / 100);
//     var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0' );
//     var message =
//       'React has been successfully running for ' + seconds + ' seconds.';
// 
//     return <p>{message}</p>;
//   }
// });
// 
// var start = new Date().getTime();
// 
// setInterval(function() {
//   ReactDOM.render(
//     <ExampleApplication elapsed={new Date().getTime() - start} />,
//     document.getElementById('container')
//   );
// }, 50);

    var HelloMessage = React.createClass({
        
        componentDidMount: function() {
            this.setState({progress: 15})
        },
        
        render: function() {
            return <div>Hell {this.props.name} ({this.state.progress}%)</div>;
        }
        });

      ReactDOM.render(
        <div><h1>Hello, world!</h1><HelloMessage name="Fabricio"/></div>,
        document.getElementById('example')
      );
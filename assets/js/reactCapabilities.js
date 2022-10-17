'use strict';

const e = React.createElement;

class Capabilities extends React.Component {
  constructor(props) {
    // super(props);
    // this.state = { liked: false };
  }

  render() {
    // if (this.state.liked) {
    //   return 'You liked this.';
    // }

    return e(
    //   'button',
    //   { onClick: () => this.setState({ liked: true }) },
    //   'Like'
    );
  }
}

const domContainer = document.querySelector('.capabilities-container');
const root = ReactDOM.createRoot(domContainer);
// root.render(e(Capabilities));
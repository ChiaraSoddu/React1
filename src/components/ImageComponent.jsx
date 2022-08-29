//componente creato con classe
import { Component} from 'react';

class ImageComponent extends Component {
    render() {
      return <img src={this.props.imgn} alt={this.props.altern} />
    }
  }

export default ImageComponent
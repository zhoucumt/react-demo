import React , {Component} from 'react';
import Toolbar from '../../components/Toolbar';
import ThemeContext from '../../components/Contexts/';

class ContextPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    return (
      <div>
        <h3>ContextPage</h3>
        <ThemeContext.Provider value="blue">
          <Toolbar />
        </ThemeContext.Provider>
      </div>
    );
  }
}
 
export default ContextPage;
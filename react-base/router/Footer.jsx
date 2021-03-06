import React, { PureComponent } from 'react'; 
import { BrowserRouter, HashRouter, Link, Route, withRouter } from 'react-router-dom';

class Footer extends PureComponent {
  render() {
    return (
    <div className="footer">
      Footer
      <br/>
      <Link to='/game/number-baseball?query=1&hi=ho'>숫자야구</Link>
      &nbsp;
      <Link to='/game/rock-scissors-paper'>가위바위보</Link>
      &nbsp;
      <Link to='/game/lotto'>로또</Link>
      &nbsp;
      <Link to='/game/index'>게임매쳐</Link>
    </div>

    )
  }
}

export default Footer;
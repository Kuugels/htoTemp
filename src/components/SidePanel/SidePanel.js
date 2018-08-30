import React, {Component} from 'react';
import './SidePanel.css';

/*class SidePanel extends Component {

    render () {
        return (
            <div className="SidePanel">
                {this.props.children}
            </div>
        );
    }
}*/
const SidePanel = (props) => <div className="SidePanel">
{props.children}
</div>
export default SidePanel;
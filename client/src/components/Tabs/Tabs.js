import React, { Component } from "react";
import PropTypes from "prop-types";
import Tab from "./Tab";

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
    setactive: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  componentDidMount() {
    for (let i = 0; i < 2; i++) {
      if (this.props.setactive === this.props.children[i].props.label) {
        this.setState({ activeTab: this.props.setactive });
        break;
      }
    }
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  };

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab },
    } = this;

    return (
      <div className="tabs">
        <ol className="tab-list">
          {children.map((child) => {
            const { label } = child.props;
            return <Tab activeTab={activeTab} key={label} label={label} onClick={onClickTabItem} />;
          })}
        </ol>
        <div className="tab-content column">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;

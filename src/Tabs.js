import React from "react";

import Tab from "./Tab";

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabContent: "Choose your TAB please"
    };
  }

  render() {
    const { children } = this.props;
    const { tabContent } = this.state;
    return (
      <div className="tabs">
        {children.map((child, index) => {
          return (
            <Tab
              key={index}
              title={child.props.title}
              onClick={() => {
                this.setState({
                  tabContent: child.props.children,
                  tabIndex: index,
                  tabTitle: child.props.title
                });
              }}
            />
          );
        })}
        <div className="tabContent">{tabContent}</div>
      </div>
    );
  }
}

export default Tabs;

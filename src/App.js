import React from "react";
import Tabs from "./Tabs";
import Tab from "./Tab";

function App() {
  const styleReact = { color: "blue" };
  const styleAngular = { color: "red" };
  const styleVue = { color: "green" };
  return (
    <div className="App">
      <Tabs>
        <Tab title="React">
          <span style={styleReact}>React</span> (also known as React.js or
          ReactJS) is a JavaScript library[3] for building user interfaces. It
          is maintained by Facebook and a community of individual developers and
          companies.
        </Tab>
        <Tab title="Angular">
          <span style={styleAngular}>Angular</span> (commonly referred to as
          "Angular 2+" or "Angular v2 and above")[4][5] is a TypeScript-based
          open-source web application framework led by the Angular Team at
          Google and by a community of individuals and corporations. Angular is
          a complete rewrite from the same team that built AngularJS.
        </Tab>
        <Tab title="Vue">
          <span style={styleVue}>Vue.js</span> (commonly referred to as Vue;
          pronounced /vjuː/, like view) is an open-source JavaScript framework
          for building user interfaces and single-page applications.
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;

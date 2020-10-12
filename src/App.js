import React from "react";
import "./App.css";

function App() {
  const { effectiveType = "unknown", downlink = "unknown", rtt = "unknown" } =
    navigator.connection || {};

  const performance = window.performance;
  const performanceList = performance.toJSON();
  console.log("performance list ", performanceList);

  return (
    <div className="App">
      <header className="App-header">Device Statistics</header>
      <div>
        <label>Memory</label>
        <h1>{navigator.deviceMemory} GiB</h1>
        <p>
          The max that will be reported here is 8GiB. Even if your device has
          more
        </p>
      </div>
      <div>
        <label>Connection</label>
        <h1>Download speed: {downlink} Mbps</h1>
        <h1>Round Trip Time: {rtt} RTT </h1>
        <h1>Connection type: {effectiveType} </h1>
      </div>
      <hr />
      <div>
        <label>Performance</label>
        <h1>
          Performance connection start: {performanceList.timing.connectStart}
        </h1>
        <h1>Performance connection end: {performanceList.timing.connectEnd}</h1>
        <h1>Performance toJSON: {JSON.stringify(performance.toJSON())}</h1>
      </div>
    </div>
  );
}

export default App;

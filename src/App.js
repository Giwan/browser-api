import React from "react";
import Memory from "./components/Memory";
import "./App.css";

function App() {
    const { effectiveType = "unknown", downlink = "unknown", rtt = "unknown" } =
        navigator.connection || {};

    const performance = window.performance;
    const performanceList = performance.toJSON();
    console.log("performance list ", performanceList);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Device Statistics</h1>
            </header>
            <Memory />
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
                    Performance connection start:{" "}
                    {performanceList.timing.connectStart}
                </h1>
                <h1>
                    Performance connection end:{" "}
                    {performanceList.timing.connectEnd}
                </h1>
                <h1>
                    Performance toJSON: {JSON.stringify(performance.toJSON())}
                </h1>
            </div>
        </div>
    );
}

export default App;

import React from "react";
import InfoCard from "./components/InfoCard";
import Footer from "./components/Footer";
import "./App.css";

const getMemoryValue = () => {
    try {
        const { deviceMemory } = window.navigator;
        return deviceMemory ? deviceMemory : "unknown";
    } catch (e) {
        console.error("error getting device memory");
    }
};

const getProcessorsValue = () => {
    try {
        const logicalProcessors = window.navigator.hardwareConcurrency;
        return logicalProcessors ? logicalProcessors : 0;
    } catch (e) {
        console.error("error getting number of processors");
    }
};

const getConnectionDataValues = () => {
    try {
        return navigator.connection || {};
    } catch (e) {
        console.error("Failed to get connection data");
    }
};

const getConnectionDataObjects = () => {
    const {
        effectiveType = "unknown",
        downlink = "unknown",
        rtt = "unknown",
    } = getConnectionDataValues();

    const downlinkInfo = {
        title: "downlink",
        value: downlink,
        unit: "Mbps",
        description:
            "The effective bandwidth in mega bits per second. It’s listed in increments of 25 kilo bits. ",
    };

    const rttInfo = {
        title: "RTT",
        value: rtt,
        unit: "RTT",
        description:
            "Estimated effective round-trip time of the connection. It’s rounded to the nearest multiple of 25 milliseconds",
    };

    const effectiveTypeInfo = {
        title: "Connection Type",
        value: effectiveType,
        description:
            "The effective connection type, 3g, 4g or 5g, is determined using round trip time and downlink values. This will show 4G even on WiFi.",
    };

    return [downlinkInfo, rttInfo, effectiveTypeInfo];
};

const data = [
    {
        title: "Memory",
        value: getMemoryValue(),
        unit: "GB",
        description:
            "The max that will be reported here is 8GiB. Even if your device has more",
    },
    {
        title: "Processors",
        value: getProcessorsValue(),
        description:
            "The max that will be reported here is 8GiB. Even if your device has more",
    },
    ...getConnectionDataObjects(),
];

function App() {
    return (
        <main className="App">
            <header className="App-header">
                <h1>Device Statistics</h1>
            </header>
            {data.map((cardItem) => (
                <InfoCard key={cardItem.title} data={cardItem} />
            ))}
            <Footer />
        </main>
    );
}

export default App;

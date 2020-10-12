import React from "react";

const Memory = () => {
    const { deviceMemory } = window.navigator;
    const results = deviceMemory ? `${deviceMemory} GiB` : "unknown";
    return (
        <div>
            <label>Memory</label>
            <h1>{results}</h1>
            <p>
                The max that will be reported here is 8GiB. Even if your device
                has more
            </p>
        </div>
    );
};

export default Memory;

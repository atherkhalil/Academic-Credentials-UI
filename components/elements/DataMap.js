import { WorldMap } from "react-svg-worldmap";

function DataMap() {
    const data = [
        { country: "cn", value: 1389618778 }, // china
        { country: "in", value: 1311559204 }, // india
        { country: "us", value: 331883986 }, // united states
        { country: "id", value: 264935824 }, // indonesia
        { country: "pk", value: 210797836 }, // pakistan
        { country: "br", value: 210301591 }, // brazil
        { country: "ng", value: 208679114 }, // nigeria
        { country: "bd", value: 161062905 }, // bangladesh
        { country: "ru", value: 141944641 }, // russia
        { country: "mx", value: 127318112 }, // mexico
    ];

    const stylingFunction = (context, any) => {
        const opacityLevel =
            0.5 +
            (1.2 * (context.countryValue - context.minValue)) /
                (context.maxValue - context.minValue);
        return {
            fill:
                context.country === "US"
                    ? "#20D489"
                    : context.color && context.country === "NG"
                    ? "#00A3FF"
                    : context.color && context.country === "CN"
                    ? "#F1416C"
                    : context.color,
            fillOpacity: opacityLevel,
            stroke: "#000",
            strokeWidth: 1,
            strokeOpacity: 0.2,
            cursor: "pointer",
        };
    };

    return (
        <>
            <WorldMap
                color="#5710B2"
                data={data}
                size="responsive"
                styleFunction={stylingFunction}
            />
        </>
    );
}
export default DataMap;

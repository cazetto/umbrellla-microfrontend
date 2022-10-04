declare function getData(): {
    wat: number;
};
declare function setData(newData: {
    wat: number;
}): void;
declare const state: {
    getData: typeof getData;
    setData: typeof setData;
};
export default state;

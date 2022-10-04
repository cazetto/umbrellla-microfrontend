declare function getData(): {
    wat: number;
};
declare function setData(newData: {
    wat: number;
}): void;
declare const obj: {
    getData: typeof getData;
    setData: typeof setData;
};
export default obj;

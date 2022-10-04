declare module 'state/state' {
  const state: {
    getData: () => { wat: number };
    setData: (newData: { wat: number }) => void;
  };

  export default state;
}

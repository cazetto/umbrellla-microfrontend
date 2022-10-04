let data = {
  wat: 1,
};

function getData() {
  return data;
}

function setData(newData: { wat: number }) {
  data = newData;
}

const state = {
  getData: getData,
  setData: setData,
};

export default state;

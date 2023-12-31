import generateData from "data-generator-retail";
import fakeRestDataProvider from "ra-data-fakerest";

const data = generateData();
export const dataProvider = fakeRestDataProvider(
  data,
  import.meta.env.MODE === "development"
);

import generateData from "data-generator-retail";
import fakeRestDataProvider from "ra-data-fakerest";
import { isEnvModeDev } from "./utils";

const data = generateData();
export const dataProvider = fakeRestDataProvider(data, isEnvModeDev);

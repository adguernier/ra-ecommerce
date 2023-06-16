import { EditGuesser, ShowGuesser } from "react-admin";
import { CustomerList } from "./CustomerList";
import { RecordRepresentation } from "./RecordRepresentation";

export const customer: Partial<ResourceProps> = {
  list: CustomerList,
  edit: EditGuesser,
  show: ShowGuesser,
  recordRepresentation: RecordRepresentation,
};

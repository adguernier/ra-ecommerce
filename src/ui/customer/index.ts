import { CustomerList } from "./CustomerList";
import { RecordRepresentation } from "./RecordRepresentation";

export const customer: Partial<ResourceProps> = {
  list: CustomerList,
  recordRepresentation: RecordRepresentation,
};

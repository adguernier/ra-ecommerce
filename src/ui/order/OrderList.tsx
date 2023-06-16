import { SyntheticEvent, useState } from "react";
import {
  AutocompleteInput,
  BooleanField,
  Count,
  CreateButton,
  DatagridConfigurable,
  DatagridConfigurableProps,
  DateField,
  ExportButton,
  FunctionField,
  List,
  NumberField,
  ReferenceField,
  ReferenceInput,
  SearchInput,
  SelectColumnsButton,
  TextField,
  TopToolbar,
} from "react-admin";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { AddressField, FullNameField } from "../customField";
import { Order } from "../../types";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

const tabs = ["ordered", "delivered", "cancelled"];

const defaultOmits = [
  "basket",
  "total_ex_taxes",
  "delivery_fees",
  "tax_rate",
  "taxes",
  "returned",
];

export const OrderList = () => {
  const [value, setValue] = useState(0);
  const filter = { status: tabs[value] };

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <List
        filter={filter}
        filters={[
          <SearchInput source="q" alwaysOn key="q" />,
          <ReferenceInput
            reference="customers"
            source="customer_id"
            key="customer"
            alwaysOn
          >
            <AutocompleteInput
              label="Customer"
              optionText={<FullNameField />}
              inputText={(choice) => `${choice.first_name} ${choice.last_name}`}
            />
          </ReferenceInput>,
        ]}
        actions={
          <TopToolbar>
            <SelectColumnsButton preferenceKey={filter.status} />
            <CreateButton />
            <ExportButton />
          </TopToolbar>
        }
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            variant="fullWidth"
          >
            {tabs.map((tab, index) => (
              <Tab
                key={index}
                label={<TabLabel filter={tab} />}
                {...a11yProps(index)}
              />
            ))}
          </Tabs>
        </Box>

        {tabs.map((tab, index) => (
          <TabPanel value={value} index={index} key={index}>
            <TabList preferenceKey={tab} omit={defaultOmits} />
          </TabPanel>
        ))}
      </List>
    </Box>
  );
};

interface TabLabelProps {
  children?: React.ReactNode;
  filter: string;
}

const TabLabel = (props: TabLabelProps) => {
  const { filter, children, ...rest } = props;
  const count = <Count filter={{ status: filter }} />;
  return (
    <span>
      {filter.toUpperCase()} ({count}) {children}
    </span>
  );
};

const TabList = (props: DatagridConfigurableProps) => {
  return (
    <DatagridConfigurable
      rowClick="edit"
      omit={
        props.preferenceKey === "delivered"
          ? props.omit?.filter((omit) => omit !== "returned")
          : props.omit
      }
      {...props}
    >
      <DateField source="date" />
      <TextField source="reference" />
      <ReferenceField source="customer_id" reference="customers" />
      <ReferenceField
        source="customer_id"
        reference="customers"
        label="Address"
        link={false}
      >
        <AddressField />
      </ReferenceField>
      <FunctionField
        label="Nb Items"
        render={(record: Order) => {
          return record.basket.length;
        }}
      />
      <NumberField source="total_ex_taxes" />
      <NumberField source="delivery_fees" />
      <NumberField source="tax_rate" />
      <NumberField source="taxes" />
      <NumberField source="total" />
      {props.preferenceKey === "delivered" && (
        <BooleanField source="returned" />
      )}
    </DatagridConfigurable>
  );
};

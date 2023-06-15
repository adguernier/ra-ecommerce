import { SyntheticEvent, useState } from "react";
import {
  ArrayField,
  BooleanField,
  ChipField,
  Count,
  Datagrid,
  DateField,
  List,
  ListProps,
  NumberField,
  ReferenceField,
  SelectInput,
  SingleFieldList,
  TextField,
} from "react-admin";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

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

export const OrderList = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label={<TabLabel filter="ordered" />} {...a11yProps(0)} />
          <Tab label={<TabLabel filter="delivered" />} {...a11yProps(1)} />
          <Tab label={<TabLabel filter="cancelled" />} {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <TabList filter={{ status: "ordered" }} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TabList filter={{ status: "delivered" }} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TabList filter={{ status: "cancelled" }} />
      </TabPanel>
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

const TabList = (props: Omit<ListProps, "children">) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="reference" />
        <DateField source="date" />
        <ReferenceField source="customer_id" reference="customers" />
        <ArrayField source="basket">
          <SingleFieldList>
            <ChipField source="product_id" />
          </SingleFieldList>
        </ArrayField>
        <NumberField source="total_ex_taxes" />
        <NumberField source="delivery_fees" />
        <NumberField source="tax_rate" />
        <NumberField source="taxes" />
        <NumberField source="total" />
        <TextField source="status" />
        <BooleanField source="returned" />
      </Datagrid>
    </List>
  );
};

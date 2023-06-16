import { SyntheticEvent, useState } from "react";
import {
  ArrayField,
  BooleanField,
  ChipField,
  Count,
  CreateButton,
  DatagridConfigurable,
  DatagridConfigurableProps,
  DateField,
  ExportButton,
  List,
  NumberField,
  ReferenceField,
  SelectColumnsButton,
  SingleFieldList,
  TextField,
  TopToolbar,
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
  const defaultOmits = [
    "basket",
    "total_ex_taxes",
    "delivery_fees",
    "tax_rate",
    "taxes",
    "returned",
  ];

  const [value, setValue] = useState(0);
  const [filter, setFilter] = useState({ status: "ordered" });

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      default:
      case 0:
        setFilter({ status: "ordered" });
        break;
      case 1:
        setFilter({ status: "delivered" });
        break;
      case 2:
        setFilter({ status: "cancelled" });
        break;
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <List
        filter={filter}
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
          >
            <Tab label={<TabLabel filter="ordered" />} {...a11yProps(0)} />
            <Tab label={<TabLabel filter="delivered" />} {...a11yProps(1)} />
            <Tab label={<TabLabel filter="cancelled" />} {...a11yProps(2)} />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <TabList preferenceKey="ordered" omit={defaultOmits} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TabList
            preferenceKey="delivered"
            omit={defaultOmits.filter((omit) => omit !== "returned")}
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <TabList preferenceKey="cancelled" omit={defaultOmits} />
        </TabPanel>
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
    <DatagridConfigurable rowClick="edit" {...props}>
      <DateField source="date" />
      <TextField source="reference" />
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
      {props.preferenceKey === "delivered" && (
        <BooleanField source="returned" />
      )}
    </DatagridConfigurable>
  );
};

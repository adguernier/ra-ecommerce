import { MultiLevelMenu } from "@react-admin/ra-navigation";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RequestPageIcon from "@mui/icons-material/RequestPage";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LabelIcon from "@mui/icons-material/Label";
import InsertCommentIcon from "@mui/icons-material/InsertComment";

export const AppMenu = () => (
  <MultiLevelMenu>
    <MultiLevelMenu.Item
      name="dashboard"
      to="/"
      label="Dashboard"
      icon={<DashboardIcon />}
    />
    <MultiLevelMenu.Item
      name="sales"
      label="Sales"
      icon={<MonetizationOnIcon />}
    >
      <MultiLevelMenu.Item
        name="orders"
        to="/orders"
        label="Orders"
        icon={<MonetizationOnIcon />}
      />
      <MultiLevelMenu.Item
        name="invoices"
        to="/invoices"
        label="Invoices"
        icon={<RequestPageIcon />}
      />
    </MultiLevelMenu.Item>
    <MultiLevelMenu.Item
      name="catalog"
      label="Catalog"
      icon={<InsertPhotoIcon />}
    >
      <MultiLevelMenu.Item
        name="posters"
        to="/posters"
        label="Posters"
        icon={<InsertPhotoIcon />}
      />
      <MultiLevelMenu.Item
        name="categories"
        to="/categories"
        label="Categories"
        icon={<BookmarkIcon />}
      />
    </MultiLevelMenu.Item>
    <MultiLevelMenu.Item
      name="customer"
      label="Customers"
      icon={<PeopleAltIcon />}
    >
      <MultiLevelMenu.Item
        name="customers"
        to="/customers"
        label="Customers"
        icon={<PeopleAltIcon />}
      />
      <MultiLevelMenu.Item
        name="segments"
        to="/segments"
        label="Segments"
        icon={<LabelIcon />}
      />
    </MultiLevelMenu.Item>
    <MultiLevelMenu.Item
      name="reviews"
      label="Reviews"
      to="/reviews"
      icon={<InsertCommentIcon />}
    />
  </MultiLevelMenu>
);

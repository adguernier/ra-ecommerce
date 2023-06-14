import { MultiLevelMenu } from "@react-admin/ra-navigation";

import DashboardIcon from "@mui/icons-material/Dashboard";
import MusicIcon from "@mui/icons-material/MusicNote";
import PeopleIcon from "@mui/icons-material/People";

export const AppMenu = () => (
  <MultiLevelMenu>
    <MultiLevelMenu.Item
      name="dashboard"
      to="/"
      label="Dashboard"
      icon={<DashboardIcon />}
    />
    <MultiLevelMenu.Item
      name="songs"
      to="/songs"
      label="Songs"
      icon={<MusicIcon />}
    />
    {/* The empty filter is required to avoid falling back to the previously set filter */}
    <MultiLevelMenu.Item
      name="artists"
      to={"/artists?filter={}"}
      label="Artists"
      icon={<PeopleIcon />}
    >
      <MultiLevelMenu.Item
        name="artists.rock"
        to={'/artists?filter={"type":"Rock"}'}
        label="Rock"
      >
        <MultiLevelMenu.Item
          name="artists.rock.pop"
          to={'/artists?filter={"type":"Pop Rock"}'}
          label="Pop Rock"
        />
        <MultiLevelMenu.Item
          name="artists.rock.folk"
          to={'/artists?filter={"type":"Folk Rock"}'}
          label="Folk Rock"
        />
      </MultiLevelMenu.Item>
      <MultiLevelMenu.Item
        name="artists.jazz"
        to={'/artists?filter={"type":"Jazz"}'}
        label="Jazz"
      >
        <MultiLevelMenu.Item
          name="artists.jazz.rb"
          to={'/artists?filter={"type":"RB"}'}
          label="R&B"
        />
      </MultiLevelMenu.Item>
    </MultiLevelMenu.Item>
  </MultiLevelMenu>
);

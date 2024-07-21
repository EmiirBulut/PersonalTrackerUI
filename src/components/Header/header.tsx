import type { MenuProps } from "antd";
import { Typography, Menu } from "antd";
import React, { useState } from "react";
import { LiaBookSolid } from "react-icons/lia";
import { RiMovieLine } from "react-icons/ri";
import { MdOutlineSubscriptions } from "react-icons/md";
import { HeaderItems } from "../../types/header-items-type";
import { UserOutlined } from "@ant-design/icons"; // Import the UserOutlined component


const items: HeaderItems[] = [
  {
    label: "Books",
    key: "books",
    icon: <LiaBookSolid />,
  },
  {
    label: "Movies/TV Series",
    key: "movies/series",
    icon: <RiMovieLine />,
  },
  {
    label: "Subscriptions",
    key: "subsctiptions",
    icon: <MdOutlineSubscriptions />,
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
];

const { Title } = Typography;

const menuItemStyle = {
  display: "flex",
  alignItems: "center",
  backgroundColor: "#f0f2f5",
};

const Header: React.FC = () => {
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      style={menuItemStyle}
    >
      <Menu.Item key="title">
        <Title level={2}>LifePlanner</Title>
      </Menu.Item>
      {items.map((item) => (
        <Menu.Item key={item?.key}>{item?.label}</Menu.Item>
      ))}
      <Menu.Item key="profile" style={{ float: "right" }}>
        <UserOutlined />
      </Menu.Item>
    </Menu>
  );
};

export default Header;

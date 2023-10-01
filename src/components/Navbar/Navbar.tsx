import React, { useState } from "react";
import {
    MenuOutlined,
    FileDoneOutlined,
    HomeOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";

const { Sider } = Layout;

const Navbar: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Sider trigger={null} theme="light" collapsible collapsed={collapsed}>
            <div
                className="ant-layout-sider-trigger"
                onClick={() => setCollapsed(!collapsed)}
                style={{ width: "100%", position: "relative" }}
            >
                <MenuOutlined />
            </div>
            <Menu
                theme="light"
                mode="inline"
                defaultSelectedKeys={["1"]}
                items={[
                    {
                        key: "1",
                        icon: <HomeOutlined />,
                        label: "Home",
                    },
                    {
                        key: "2",
                        icon: <FileDoneOutlined />,
                        label: "Applications",
                    },
                ]}
            />
        </Sider>
    );
};

export default Navbar;

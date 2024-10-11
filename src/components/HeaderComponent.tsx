import * as React from "react";
import { Layout, Typography, Menu } from "antd";

const { Header } = Layout;
const { Title } = Typography;

const HeaderComponent: React.FC = () => {
    return (
        <Header
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <Title level={3} style={{ color: "white", margin: 0 }}>
                ThirtyFour
            </Title>
            <Menu theme="dark" mode="horizontal" selectable={false}>
                <Menu.Item key="about">About</Menu.Item>
            </Menu>
        </Header>
    );
};

export default HeaderComponent;

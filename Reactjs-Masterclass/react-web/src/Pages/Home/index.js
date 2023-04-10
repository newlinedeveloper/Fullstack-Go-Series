import React, {useState} from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
  } from '@ant-design/icons';
  import "./index.css"

import { Layout, Menu, theme } from 'antd';
import ListMembers from '../Members/ListMembers';

const { Header, Sider, Content } = Layout;

function Home() {

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
      } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          style={{
            marginTop: 20
          }}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Members',
            }
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }}>
            <div style={{ margin : 10}}>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed),
            })}
            </div>
         
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 900,
            // height: "100%",
            background: colorBgContainer,
          }}
        >
          <ListMembers/>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Home
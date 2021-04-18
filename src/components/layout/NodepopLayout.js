import React from 'react';
import { Button, Layout } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Header, Footer, Content } = Layout;

export const NodepopLayout = ({ children }) => {
  return (
    <>
    <Layout>
      <Header>
        {/* FIXME: Estilos directo*/}
        <Button icon={<SearchOutlined />}>Search</Button>
        <Button type="primary">Sign Up</Button>
        <Button type="primary">Login</Button>
      </Header>
      <Content><p>Content This is the new nodePop in React</p></Content>
      <Footer>TODO: - Footer</Footer>
    </Layout>
  </>
  )
}


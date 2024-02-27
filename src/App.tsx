import React from 'react';
import SearchForm from "./components/SearchForm";
import { Layout, Typography } from 'antd';
const { Header, Content } = Layout;
const { Title } = Typography;

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#4096ff',
    borderBottomLeftRadius: "12px",
    borderBottomRightRadius: "12px",
};

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
};

const layoutStyle: React.CSSProperties = {
    overflow: 'hidden',
    width: '100%',
    height: "100vh",
};

function App() {
    return (
        <Layout style={layoutStyle}>
            <Header style={headerStyle}>
                <Title level={3} style={{color: "#fff"}}>БД VimeWorld</Title>
            </Header>
            <Content style={contentStyle}><SearchForm /></Content>
        </Layout>
    );
}

export default App;

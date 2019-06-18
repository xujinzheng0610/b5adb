import React, { Fragment } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
import User from '../components/User'
import Navigation from '../components/Navigation'

const LayoutDesign = ({children}) => (
    <Fragment>
        <Layout>
            <Sider 
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
            }}
            >
            <div className="logo" />
            <Header style={{ background: '#226992', padding: 0 }}><h1 style={{color:'white', textAlign:'center'}}>Bridge5 Asia</h1></Header>
            <Navigation/>
            </Sider>
            <Layout style={{ marginLeft: 200, minHeight: '100vh' }}>
                <Header style={{ background: '#3c8dbc', padding: 0 }}>
                    <User />
                </Header>
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                        {children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Database for Commercial Real Estate ©2019 Created by Brdige5 Asia</Footer>
            </Layout>
        </Layout>

    </Fragment>
)

export default LayoutDesign
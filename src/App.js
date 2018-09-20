import React, { Component } from 'react';
import 'antd/dist/antd.css';
import WaitingPage from './pages/WaitingPage/WaitingPage';
import WaitingPageSideBar from './pages/WaitingPage/WaitingPageSideBar';
import RequestPage from './pages/RequestPage/RequestPage';
import { connect } from "react-redux";
import { Layout, Menu, Spin } from 'antd';
import { BrowserRouter, Route, Link,Switch, HashRouter } from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;

const routes = [
  {
    path: "/ListItemByStatus",
    exact: true,
    sidebar: () => <WaitingPageSideBar />,
    main: () => <WaitingPage />
  },
  {
    path: "/AddItem",
    exact: false,
    sidebar: () => <div> Waiting for Implement</div>,
    main: () => <RequestPage />
  },

];

class AppForm extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  render() {
    const { flag } = this.props;
    return (
      <BrowserRouter>

        <Spin size="large" spinning={flag}>
          <Layout style={{ minHeight: '100vh' }}>
            <Sider
              collapsible
              collapsed={this.state.collapsed}
              onCollapse={this.onCollapse}
              theme="light"
            >
              <div className="logo" />
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.sidebar}
                />
              ))}
            </Sider>
            <Layout>
              {/* <Header style={{ background: '#fff', padding: 0 }} /> */}

              <Header style={{ background: '#fff', padding: 0 }}>
                <Menu
                  theme="light"
                  mode="horizontal"
                  defaultSelectedKeys={['1']}
                  style={{ lineHeight: '64px' }}
                >
                  <Menu.Item key="1">  <Link  to="/ListItemByStatus">Home</Link></Menu.Item>
                  <Menu.Item key="2">  <Link to="/AddItem">Add </Link></Menu.Item>

                </Menu>
              </Header>
              <Content style={{ margin: '0 16px' }}>
                <div className='row'>
                  <div className="col-sm-12 col-md-12 col-lg-12" style={{ padding: 5 }}>
                  <Switch>

                    {routes.map((route, index) => (
                      <Route
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      component={route.main}
                      />
                      ))}
                  </Switch>
                  </div>
                </div>

              </Content>

            </Layout>
          </Layout>
        </Spin>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    flag: state.globalFlag.isLoading
  }
}

const App = connect(mapStateToProps, null)(AppForm);
export default App;
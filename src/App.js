import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import myStore from './store'
import { Provider } from 'react-redux'
import './App.css'
import { Layout } from 'antd'
import 'antd/dist/antd.css'
import Navbar from './components/layout/Navbar'
import BreadCrumb from './components/layout/BreadCrumb'
import AppFooter from './components/layout/Footer'
import Index from './components/layout/Index'

const { Content } = Layout

const App = () => {
  return (
    <Provider store={myStore}>
      <Router>
        <Layout className='layout'>
          <Navbar />
          <Content style={contentStyle}>
            <BreadCrumb />
            <Switch>
              <Route exact path='/' component={Index} />
            </Switch>
          </Content>
          <AppFooter />
        </Layout>
      </Router>
    </Provider>
  )
}

const contentStyle = {
  padding: '0 50px'
}

export default App

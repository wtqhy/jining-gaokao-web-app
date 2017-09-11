import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import './App.css'
import UploadImg from './UploadImg'
import Users from './Users'

const Home = () => (
    <div>
      <h2>Home</h2>
    </div>
)

const About = () => (
    <div>
      <h2>About</h2>
    </div>
)

const Topic = ({ match }) => (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
)

const Topics = ({ match }) => (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>
            Rendering with React
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>
            Components
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      <Route path={`${match.url}/:topicId`} component={Topic}/>
      <Route exact path={match.url} render={() => (
          <h3>Please select a topic.</h3>
      )}/>
    </div>
)

const BasicExample = () => (
    <Router>
      <div className="container">
          <div className="header">
              <ul>
                  <li>
                      <Link to="/users">报名信息查询</Link>
                  </li>

                  <li>
                      <Link to="">轮播图数据</Link>
                  </li>

                  <li>
                      <Link to="/topics">图片列表</Link>
                  </li>

                  <li>
                      <Link to="/uploads">上传图片</Link>
                  </li>

              </ul>
          </div>

        {/*<hr/>*/}

        <div className="content">
            <Route path="/users" component={Users}/>
            <Route path="/uploads" component={UploadImg}/>
            <Route path="/topics" component={Topics}/>
        </div>

      </div>
    </Router>
)
export default BasicExample


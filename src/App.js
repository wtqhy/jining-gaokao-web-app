import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import './App.css'
import UploadImg from './UploadImg'
import Users from './Users'
import Login from './Login'

const MyLink = ({ label, to, activeOnlyWhenExact }) => (
    <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
        <Link className={'nav-link '+(match? 'active' : '')} to={to}>{label}</Link>
        )}/>
)

export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.linkTapAction = this.linkTapAction.bind(this);
    }

    linkTapAction(obj) {

    }

    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                        <a className="navbar-brand" href="#">CMS</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav mr-auto">
                                <MyLink activeOnlyWhenExact={true} to='/' label='报名用户'/>
                                <MyLink to='/banners' label='轮播图'/>
                                <MyLink to='/topics' label='课程介绍'/>
                                <MyLink to='/uploads' label="图片上传"/>

                            </div>

                            <form className="form-inline mt-2 mt-md-0">
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">登录</button>
                            </form>
                        </div>
                    </nav>

                    <div className="content_div">
                        <Route exact path="/" component={Users}/>
                        <Route path="/uploads" component={UploadImg}/>
                        <Route path="/banners"/>
                        <Route path="/topics"/>
                    </div>

                </div>
            </Router>
        )
    }
}



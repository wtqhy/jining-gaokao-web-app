/**
 * Created by wangtianqi on 2017/9/12.
 */

import React, { Component } from 'react';
import './Login.css'

export default class Login extends React.Component {

    constructor(pros) {
        super(pros)
        this.tapAction = this.tapAction.bind(this);
    }

    tapAction() {
        console.log("tap action")
        this.context.router.push({
            pathname: '/users'
        });

    }
    render() {
        return (
            <div className="login">
                <div className="container">

                    <form className="form-signin">
                        <h2 className="form-signin-heading">cms</h2>
                        <label for="inputEmail" className="sr-only">Email address</label>
                        <input type="text" id="inputEmail" className="form-control" placeholder="用户名" required autofocus />
                        <label for="inputPassword" className="sr-only">Password</label>
                        <input type="password" id="inputPassword" className="form-control" placeholder="密码" required />
                        <div className="checkbox">
                            <label>
                                <input type="checkbox" value="remember-me" />记住密码
                            </label>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">登录</button>
                    </form>

                </div>
            </div>
            

        )
    }
}
/**
 * Created by wangtianqi on 2017/8/25.
 */

import React, { Component } from 'react';
import request from 'superagent';
import './Users.css'

export default class Users extends React.Component {

    constructor(props) {
        super(props);
        this.state = {users: []};
    }

    componentDidMount() {
        const req = request.get("http://jnhwxx.com/api/users");
        req.end(function (err, res) {
           if (err !== null) {
               console.log(err);
               return;
           }
           console.log(res);
           this.setState({users: res.body.data});
        }.bind(this));
    }


    componentDidUpdate() {

    }

    componentWillMount() {

    }

    componentWillReceiveProps() {

    }

    componentWillUnmount() {

    }

    render() {
        console.log('users:' + this.state.users);
        const items = this.state.users
            .filter((value) =>
                value.name != null&&value.name != ''
            )
            .map((value, index) =>
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{value.name}</td>
                <td>{value.phoneNum}</td>
                <td>{value.email}</td>
                <td>{value.wxID}</td>
            </tr>
        );

        console.log('users:' + items);
        return (
            <table className="table table-striped users_table">
                <thead className="thead-inverse">
                <tr>
                    <th>#</th>
                    <th>姓名</th>
                    <th>手机号码</th>
                    <th>邮箱</th>
                    <th>微信</th>
                </tr>
                </thead>
                <tbody>{items}</tbody>
            </table>
        )
    }
}

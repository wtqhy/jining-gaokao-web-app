/**
 * Created by wangtianqi on 2017/8/25.
 */

import React, { Component } from 'react';
import request from 'superagent';
import ReactTable from 'react-table'
import 'react-table/react-table.css'

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

        const columns = [
            {
                Header: '姓名',
                accessor: 'name'
            },

            {
                Header: '手机号码',
                accessor: 'phoneNum',
            },

            {
                Header: '邮箱',
                accessor: 'email',
            },
            {
                Header: '微信',
                accessor: 'wxID'
            }
            ];

           return (
               <div className="container">
                   <ReactTable className="-striped -highlight"
                               data={this.state.users}
                               columns={columns} />
               </div>

           )

    }
}

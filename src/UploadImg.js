import React, { Component } from 'react';
import request from 'superagent';
import Dropzone from 'react-dropzone';
import './UploadImg.css'

export default  class UploadImg extends React.Component {

    constructor() {
        super()
        this.state = {
            accepted: [],
            rejected: []
        }
    }

    onDropAccepted(acceptedFiles) {
        const req = request.post('https://73487463.qcloud.la/api/uploads');
        acceptedFiles.forEach(file => {
            req.attach('imgfile', file);
        });

        req.end(function (err, res) {
            console.log(res);
            if(err !== null || res.body.status != 0) {
                alert("上传失败");
                return;
            }
            alert("上传成功");
        });


        // acceptedFiles.forEach(file => {
        //     const reader = new FileReader();
        //     reader.onload = () => {
        //         const fileAsBinaryString = reader.result;
        //         // do whatever you want with the file content
        //     };
        //     reader.onabort = () => console.log('file reading was aborted');
        //     reader.onerror = () => console.log('file reading has failed');
        //     reader.readAsBinaryString(file);
        // });
    }



    render() {
        return (
            <Dropzone
                className="dropzone"
                accept="image/jpeg, image/png"
                onDropAccepted={this.onDropAccepted.bind(this)}
                onDrop={(accepted, rejected) => { this.setState({ accepted, rejected }); }}
            >
                <p>拖拽图片到区域或点击此区域选择图片</p>
            </Dropzone>

        );
    }
}




/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import "./StatusBar.css";
import { Avatar } from '@mui/material';
import uploadimage from "/Users/vaarinjain/Downloads/socialmedia/socialmedia/src/images/statusadd.png";
import statusimg from "/Users/vaarinjain/Downloads/socialmedia/socialmedia/src/images/pp1.png";
import firebase, { storage } from "../firebase";


class StatusBar extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            statusList: []
        }
    }

    componentDidMount(){
            this.getData();
        }

        getData = () => {
            // let data =[
            //     {"userName":"Vaarin",
            //     "imageURL":"/Users/vaarinjain/Downloads/socialmedia/socialmedia/src/images/pp1.png"
            //     },
            //     {"userName":"Bob",
            //     "imageURL":"/Users/vaarinjain/Downloads/socialmedia/socialmedia/src/images/pp1.png"
            //     }   
            // ]

        fetch('http://localhost:8080/status')
            .then(response => response.json())
            .then(data => {
                this.setState({statusList: data});
        });
    }
        uploadStatus =(event)=>{
            let image=event.target.files[0];
            const thisContext=this;
            if(image == null || image == undefined)
                return;
    
            var uploadTask = storage.ref("status").child(image.name).put(image);
            uploadTask.on(
              "state_changed",
              function (snapshot) {
              },
              function (error) {
              },
              function () {
                uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                    console.log(downloadURL);
    
                    let payload = {
                        "statusId": Math.floor(Math.random()*100000).toString(),
                        "userId": JSON.parse(localStorage.getItem("users")).uid,
                        "path": downloadURL,
                        "timeStamp": new Date().getTime()
                    }
        
                    const requestOptions ={
                        method: "POST",
                        headers: { 'Content-Type': 'application/json' },
                        body : JSON.stringify(payload),
                    }
        
                    fetch("http://localhost:8080/status",requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        thisContext.getData();
                    })
                    .catch(error =>{
        
                    })
                    
                })
                }
            );
        }


    render() { 
        return (
            <div>
            <div className="statusbar__container">
            <div className="fileupload">
                <div className="statustext">Add Status</div>
                <label for="file-upload-status" >
                    <img className="statusbar__upload" src={uploadimage} width="55px" height="55px" />
                </label>
                    <input id="file-upload-status" onChange={this.uploadStatus} type="file"/>
            </div>
                {
                    this.state.statusList.map((item,index)=>(
                        <div className="status">
                            <Avatar className="statusbar__status" src={item.path} />
                            <div className="statusbar__text">{item.userName}</div>
                        </div>
                    ))
                }
            </div>
        </div>
         );

    }
}
 
export default StatusBar ;
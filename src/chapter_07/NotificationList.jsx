import React from "react";
import Notification from "./Notification";

const reserveNotifications = [
    { message: "안녕" },
    { message: "점심 먹을 시간이야" },
    { message: "셋셀동안 일어나라" },
];

var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: [], 
            // 앞으로 생성 할 데이터를 state에 넣어서 초기화
        };
    }
    
    componentDidMount() {
        timer = setInterval(() => {
            const { notifications } = this.state;
            //const notifications = this.state.notifications;


            if (notifications.length < reserveNotifications.length) {
                const index = notifications.length;
                // 새로운 배열 생성을 통해 불변성을 보장하고 상태를 업데이트 
                this.setState({ // state를 업데이트 하기 위해 setState 함수를 사용함.
                    notifications: notifications.concat(reserveNotifications[index]),
                });
            } else {
                clearInterval(timer);
            }
        }, 1000);
    }
    //reservedNotification(알람 데이터 배열) 로 부터 알림 데이터를 하나씩 가지고 와서 state에 있는 notification 배열에 넣고 업데이트 하는 역할을함.

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => { // 상태 이름 수정
                    return <Notification message={notification.message} />;
                })}
            </div>
        );
    }
}

export default NotificationList;

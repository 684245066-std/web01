interface INotification {
    send(message: string): void;
}

abstract class NotificationBase implements INotification {
    abstract send(message: string): void;
}

class EmailNotification extends NotificationBase {
    send(message: string): void {
        console.log(`Email Notification: ${message}`);
    }
}

class SMSNotification extends NotificationBase {
    send(message: string): void {
        console.log(`SMS Notification: ${message}`);
    }
}

class PushNotification extends NotificationBase {
    send(message: string): void {
        console.log(`Push Notification: ${message}`);
    }
}

// ทดสอบเทส 1 2 3
console.log("=== Workshop 8.2 ===");
const notifications: INotification[] = [
    new EmailNotification(),
    new SMSNotification(),
    new PushNotification()
];

notifications.forEach((noti: INotification) => {
    noti.send("Hello Everyone");
});
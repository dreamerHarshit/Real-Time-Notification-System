# Real-Time-Notification-System
In this project i have developed a application that pops up notification on changes made in the database in real time.For real-time communication i am using socket.io here.
I have one constant status in database and user will add comment on that. As soon as some one posted a comment all users except the one who have made the comment will receive desktop notification immediately.

Socket.io will be responsible for detecting events and information back-end as well as client about same.

##Technologies Used:-
1. Nodejs
2. Socket.io
3. Mysql

##How to run this app:-
1. First of all the following command to install all the dependencies
    
    install npm
    
2. After That create a database in Mysql name- socketDemo using command

    CREATE DATABASE socketDemo;

3. now run the following command to create table in socketDemo database   

     mysql -u root -p socketDemo< socketDemo.sql
    
4. After that run the following command in order to run this application
    
    grunt
##Link to resoursec i have used:-

http://socket.io/docs/#

https://codeforgeek.com/2015/09/real-time-notification-system-using-socket-io/

https://www.tutorialspoint.com/nodejs/nodejs_first_application.htm

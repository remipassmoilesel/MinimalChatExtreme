# MinimalChatExtreme

An Extremely Minimal PHP/Javascript chat system. Easy to deploy,  Easy to manage, Easy to use.

Modified to be use in Minibox, on TPLink MR3020 and OpenWRT Chaos Calmer. 

Base on the excellent project: https://github.com/adamoutler/MinimalChatExtreme Thanks a lot !

## Features & Operation
1. **Easy Setup!** Deployment requires cloning this repository to a PHP server.
1. **Easy To Use** Users are prompted for their name and 
1. **Anonymous Chat** users are not forced to log in so they are effectively anonymous.
1. **Non-Anonymous Clear** When someone clears the chat, their IP is displayed to encourage them to chat more.
1. **HTML Forbidden** All HTML tags are stripped so the chat is safe.
1. **Auto Link** Automatically link http(s), ftp and others.
1. **Pick a room** You can add <i>?room=myRoom</i> to the query string and choose a new room
1. **Notifications** When a user action occurs, a pleasent ding is played
1. **Text Document** The chat is a rolling text file on the filesystem
1. **Header Checking** Rather than waste bandwidth, chat is only updated when required.

## Installation

On OpenWRT with lighttpd:

    $ cd /www
    $ wget https://github.com/remipassmoilesel/minibox-minimalchatextreme/archive/master.zip
    $ unzip master.zip
    $ chown -R http:www-data minibox-minimalchatextreme-master
    
## Usefull commands for dev

    $ npm install
    $ gulp styles
    $ gulp release
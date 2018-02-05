pragma solidity ^0.4.17

contract Inbox {
    string public message;

   function Inbox(string initalMessage) public {
        message = initialMessage;
    }

    function setMessages(string newMessage) public {
        message = newMessage;
    }
}

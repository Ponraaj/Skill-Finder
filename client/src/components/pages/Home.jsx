import React, { useState } from 'react'
//import '@chatscope/chat-ui-kit-react-styles/dist/default/styles.min.css';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {MainContainer,ChatContainer,MessageList,Message,MessageInput,TypingIndicator} from "@chatscope/chat-ui-kit-react"

//api_key for ai
const API_KEY="";

const systemMessage={
  "role":"system",
  "content":"Explain things like you're talking to a software professional with 2 years of experience."
}

const Home = () => {
  const [typing,setTyping]=useState(false)

  const [messages,setMessages]=useState([
    {
      message:"Hello,I am Pon Raaj",
      sender:"ponraaj",
      direction:"incoming"
    }
  ]);

  const handleSend=async(message)=>{
    const newMessage={
      message:message,
      sender:"user",
      direction:"outgoing"
    }
    const newMessages=[...messages,newMessage];

    //update message state
    setMessages(newMessages);

    //set a typing indicator
    setTyping(true);

    //process message to ai
    await processMessage(newMessages);
  };

  async function processMessage(chatMessages){
    //chatMessages {sender:"user" or "ai",message:"the content of message"}
    //apiMessages {role:"user" or "assistant",content:"the content of message"}

    let apiMessages=chatMessages.map((messageObject)=>{
      let role="";
      if(messageObject.sender==="ponraaj"){
        role="assistant"
      }else{
        role="user"
      }
      return { role:role,content:messageObject.message}
    });


    const apiRequestBody={
      "model":"gpt-3.5-turbo",
      "messages":[systemMessage,...apiMessages]//[message1,message2,message3]
    }

    await fetch("https://api-openai.com/v1/chat/completions",{
      method:"POST",
      headers:{
        "Authorization":"Bearer "+API_KEY,
        "Content-Type":"application/json"
      },
      body:JSON.stringify(apiRequestBody)
    }).then((data)=>{
      return data.json();
    }).then((data)=>{
      console.log(data);
      console.log(data.choices[0].message.content);
      setMessages(
        [...chatMessages,{
          message:data.choices[0].message.content,
          sender:"ponraaj",
          direction:"incoming"
        }]
      );
      setTyping(false);
    });
  }

  return(
    <div className='flex justify-center h-screen flex-wrap'>
      <h1 className='relative block text-4xl font-bold w-full text-center pt-8'>Find your skills here</h1>
      <div className='relative h-[80%] w-[80%]'>
        <MainContainer className='border-4 pt-5'>
          <ChatContainer>
            <MessageList scrollBehavior='smooth' typingIndicator={typing ? <TypingIndicator content="Pon Raaj is typing" /> : null}>
              {messages.map((message,i)=>{
                return <Message className='rounded-lg' key={i} model={message} />
              })}
            </MessageList>
            <MessageInput placeholder='Type message here' onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  )
}

export default Home
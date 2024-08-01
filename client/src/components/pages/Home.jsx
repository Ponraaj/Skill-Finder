import React, { useEffect, useState } from 'react'
//import '@chatscope/chat-ui-kit-react-styles/dist/default/styles.min.css';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {MainContainer,ChatContainer,MessageList,Message,MessageInput,TypingIndicator} from "@chatscope/chat-ui-kit-react"
import axios from 'axios';
import { useAuth } from '../../lib/context/AuthContext';
import supabase from '../../lib/helpers/supabase';
import Markdown from "react-markdown"


const Home = () => {
  const { user } = useAuth();

  const getMessages = async () => {
    try {
      const { data, error } = await supabase
        .from('messages')
        .select("*")
        .eq('user_mail', user.email);

      if (error) throw error;

      console.log(data)

      if (data && data.length === 0) {
        setMessages([
          {
            message: "Welcome to SkillFinder! We can provide you guidance in learning right skills for the required profession",
            sender: "model",
            direction: "incoming"
          }
        ]);
      } else {
        setMessages(() => {
          let tempMsg = [];
          for (let item of data) {
            
            tempMsg.push({
              message: item.user_message,
              sender: "user",
              direction: "outgoing"
            });

            tempMsg.push({
              message: item.ai_message,
              sender: "model",
              direction: "incoming"
            });
          }
          return tempMsg;
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMessages();
  }, []);

  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Welcome to SkillFinder! We can provide you guidance in learning right skills for the required profession",
      sender: "model",
      direction: "incoming"
    }
  ]);

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing"
    };

    const newMessages = [...messages, newMessage];

    // Update message state
    setMessages(newMessages);

    // Set a typing indicator
    setTyping(true);

    // Process message to AI
    await processMessage(newMessages);
  };

  const processMessage = async (chatMessages) => {
    try {
      const apiResponseBody = await axios.post('/sendmessage', {
        message: chatMessages[chatMessages.length - 1].message
      });

      const apiResponseMessage = apiResponseBody.data.data.response.candidates[0].content.parts[0].text;

      setMessages((prev) => {
        return [...prev, {
          message: apiResponseMessage,
          sender: "model",
          direction: "incoming"
        }];
      });

      const { data, error } = await supabase
        .from('messages')
        .insert({
          user_message: chatMessages[chatMessages.length - 1].message,
          ai_message: apiResponseMessage,
          user_mail: user.email
        });

      if (data) console.log("Chat saved");
      if (error) throw error;
    } catch (error) {
      console.log("Error inserting data", error);
    }

    setTyping(false);
  };

  return(
    <div className='flex justify-center h-screen flex-wrap'>
      <h1 className='relative block text-4xl font-bold w-full text-center pt-8'>Interact with the Chat Bot Here</h1>
      <div className='relative h-[80%] w-[70%]'>
        <MainContainer className='border-4 pt-5'>
          <ChatContainer>
            <MessageList scrollBehavior='smooth' typingIndicator={typing ? <TypingIndicator content="Chatbot is typing" /> : null}>
              {messages.map((message,i)=>{

                
                return  <Message className='rounded-lg' key={i} model={{
                  direction: message.direction,
                  sender: message.sender,
                }}><Message.CustomContent>
                      <Markdown>
                        {message.message}
                      </Markdown>
                    </Message.CustomContent>
                  </Message>
              })}
            </MessageList>
            <MessageInput placeholder='Type message here' onSend={(innerHtml)=>handleSend(innerHtml)} autoFocus/>
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  )
}

export default Home
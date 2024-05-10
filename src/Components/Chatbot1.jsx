import React, { useEffect } from "react";

const ChatbaseChatbot = () => {
    useEffect(() => {
        // Load Chatbase embed script dynamically
        const script = document.createElement("script");
        script.src = "https://www.chatbase.co/embed.min.js";
        script.defer = true;
        script.async = true;
        script.onload = () => {
            // Once the script is loaded, configure the chatbot
            window.embeddedChatbotConfig = {
                chatbotId: "jvSy5ptbPYUJydImChQml",
                domain: "www.chatbase.co"
            };
        };
        document.body.appendChild(script);

        // Clean up function to remove the script when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <iframe
            src="https://www.chatbase.co/chatbot-iframe/jvSy5ptbPYUJydImChQml"
            title="Chatbot"
            width="100%"
            style={{ height: "100%", minHeight: "700px" }}
            frameBorder="0"
        ></iframe>
    );
};

export default ChatbaseChatbot;

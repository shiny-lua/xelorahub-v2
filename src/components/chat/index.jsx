"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbSend, TbUser, TbRobot, TbMessageCircle } from "react-icons/tb";

const Message = ({ message, isUser }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`flex items-start gap-4 ${isUser ? 'flex-row-reverse' : ''} mb-6`}
  >
    <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md ${
      isUser ? 'bg-gradient-to-br from-[#059652] to-[#047a42]' : 'bg-gradient-to-br from-gray-600 to-gray-700'
    }`}>
      {isUser ? <TbUser className="text-white text-lg" /> : <TbRobot className="text-white text-lg" />}
    </div>
    <motion.div
      className={`max-w-[80%] rounded-2xl px-6 py-3 shadow-sm ${
        isUser 
          ? 'bg-gradient-to-br from-[#059652] to-[#047a42] text-white rounded-tr-none' 
          : 'bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 rounded-tl-none'
      }`}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      <p className="text-[15px] leading-relaxed">{message}</p>
    </motion.div>
  </motion.div>
);

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", isUser: false },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, isUser: true }]);
      setNewMessage("");
      
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, {
          text: "Thanks for your message! I'll get back to you soon.",
          isUser: false
        }]);
      }, 1000);
    }
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-3 right-3 z-50 cursor-pointer bg-gradient-to-br from-[#059652] to-[#047a42] text-white p-3 rounded-full hover:shadow-lg shadow-md"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        <TbMessageCircle className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", bounce: 0.25 }}
            className="fixed bottom-14 right-14 z-50 flex flex-col w-[400px] h-[600px] bg-white rounded shadow-2xl overflow-hidden border border-gray-100"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-[#059652] to-[#047a42] text-white p-6">
              <h1 className="text-2xl font-semibold mb-1">Chat Support</h1>
              <p className="text-sm opacity-90 font-light">We typically reply within a few minutes</p>
            </div>

            {/* Messages Container */}
            <div className="flex-1 p-6 space-y-4 overflow-y-auto bg-gradient-to-b from-gray-50/50 to-white">
              {messages.map((message, index) => (
                <Message key={index} message={message.text} isUser={message.isUser} />
              ))}
            </div>

            {/* Message Input */}
            <form onSubmit={handleSendMessage} className="p-4 border-t bg-white">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-5 py-3 rounded-full border bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-[#059652]/20 focus:border-[#059652] transition-all duration-200"
                />
                <motion.button
                  type="submit"
                  className="bg-gradient-to-r cursor-pointer from-[#059652] to-[#047a42] text-white p-3 rounded-full hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={!newMessage.trim()}
                >
                  <TbSend className="w-6 h-6" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chat;
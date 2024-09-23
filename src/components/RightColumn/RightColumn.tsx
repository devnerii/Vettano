import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import {
  FaCommentDots,
  FaChevronRight,
  FaUserFriends,
  FaUsers,
  FaSearch,
  FaPaperPlane,
  FaEllipsisV,
  FaUserPlus,
} from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import SlideInAnimation from "../animations/SlideInAnimation";

interface Friend {
  name: string;
  avatar: string;
  level: number;
  status: string;
  conquista: string;
}

interface Action {
  type: string;
}

const RightColumn: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showChat, setShowChat] = useState(true);
  const [selectedChat, setSelectedChat] = useState<Friend | null>(null);
  const [hoveredFriend, setHoveredFriend] = useState<Friend | null>(null);
  const [dropdownVisible, setDropdownVisible] = useState<string | null>(null);
  const [canOpenDropdown, setCanOpenDropdown] = useState(true);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const hoverRef = useRef<HTMLDivElement | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownVisible(null);
        setCanOpenDropdown(false);
        setTimeout(() => setCanOpenDropdown(true), 200);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleFriendClick = (friend: Friend) => {
    setSelectedChat(friend);
    setDropdownVisible(null);
    setShowChat(false);
  };

  const handleActionClick = (action: Action, friend: Friend) => {
    console.log(`${action.type} clicked for ${friend.name}`);
  };

  const toggleDropdown = (name: string) => {
    if (!canOpenDropdown) return;

    if (dropdownVisible === name) {
      setDropdownVisible(null);
      setCanOpenDropdown(false);
      setTimeout(() => setCanOpenDropdown(true), 200);
    } else {
      setDropdownVisible(name);
    }
  };

  const renderMiniProfile = () => {
    if (!hoveredFriend || !hoverRef.current) return null;

    const rect = hoverRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const profileHeight = 200;
    const bottomMargin = 40;

    let topPosition = rect.top + window.scrollY;
    if (rect.top + profileHeight + bottomMargin > windowHeight) {
      topPosition = windowHeight - profileHeight - bottomMargin;
    }

    const profile = (
      <div
        className="fixed p-6 bg-[#282759] rounded-lg shadow-lg text-white z-[9999] w-72"
        style={{
          top: `${topPosition}px`,
          left: `${rect.left + window.scrollX}px`,
          marginBottom: "20px",
          zIndex: 9999,
        }}
      >
        <Image
          src={hoveredFriend.avatar}
          alt="Avatar"
          className="rounded-full"
          width={64}
          height={64}
        />
        <p className="font-bold text-lg">{hoveredFriend.name}</p>
        <p className="text-sm">Level: {hoveredFriend.level}</p>
        <p className="text-sm">Status: {hoveredFriend.status}</p>
        <p className="text-sm mt-2">{hoveredFriend.conquista}</p>
      </div>
    );

    return ReactDOM.createPortal(profile, document.body);
  };

  const handleMouseEnter = (
    friend: Friend,
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredFriend(friend);
      hoverRef.current = event.currentTarget as HTMLDivElement;
    }, 300); // Reduce timeout for faster feedback
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setHoveredFriend(null);
  };

  const renderDropdownMenu = (friend: Friend) => (
    <div
      ref={dropdownRef}
      className="absolute right-5 bottom-2 mt-2 p-2 bg-[#282759] rounded-lg shadow-lg text-white z-[9999] w-48"
    >
      <p
        className="cursor-pointer hover:bg-[#3d3c7a] p-2 rounded"
        onClick={() => handleActionClick({ type: "Send Message" }, friend)}
      >
        Send Message
      </p>
      <p
        className="cursor-pointer hover:bg-[#3d3c7a] p-2 rounded"
        onClick={() => handleActionClick({ type: "View Profile" }, friend)}
      >
        View Profile
      </p>
      <p
        className="cursor-pointer hover:bg-[#3d3c7a] p-2 rounded"
        onClick={() => handleActionClick({ type: "Remove Friend" }, friend)}
      >
        Remove Friend
      </p>
      <p
        className="cursor-pointer hover:bg-[#3d3c7a] p-2 rounded"
        onClick={() => handleActionClick({ type: "Block" }, friend)}
      >
        Block
      </p>
    </div>
  );

  const renderScrollableRow = () => {
    const friends = [
      {
        name: "Daniel",
        avatar: "/assets/img/logos/avatar1.png",
        level: 10,
        status: "Online",
        conquista: "Achievement",
      },
      {
        name: "Nixtlo",
        avatar: "/assets/img/logos/avatar1.png",
        level: 10,
        status: "Online",
        conquista: "Achievement",
      },
      {
        name: "Anna",
        avatar: "/assets/img/logos/avatar1.png",
        level: 10,
        status: "Online",
        conquista: "Achievement",
      },
      {
        name: "Nelly",
        avatar: "/assets/img/logos/avatar1.png",
        level: 10,
        status: "Online",
        conquista: "Achievement",
      },
      {
        name: "+15",
        avatar: "/assets/img/logos/avatar1.png",
        level: 10,
        status: "Online",
        conquista: "Achievement",
      },
    ];

    return (
      <div
        className="flex overflow-x-auto w-full mt-4 p-2 space-x-4 custom-scrollbar"
        style={{ cursor: "grab" }}
      >
        {friends.map((friend, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-white cursor-pointer relative group"
            style={{ minWidth: "72px" }}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={(e) => handleMouseEnter(friend, e)}
          >
            <Image
              src={friend.avatar}
              alt={friend.name}
              className="rounded-full"
              width={64}
              height={64}
            />
            <p className="text-sm">{friend.name}</p>
            {hoveredFriend &&
              hoveredFriend.name === friend.name &&
              renderMiniProfile()}
          </div>
        ))}
      </div>
    );
  };

  const renderChatsAndGroups = (
    items: Array<{ name: string }>,
    isChat: boolean
  ) => (
    <div className="w-full mb-4">
      <h3 className="text-white text-lg font-semibold mb-2">
        {isChat ? "Chats" : "Grupos"}
      </h3>
      <div className="mt-2 relative">
        {items.map((item, index) => (
          <div
            key={index}
            className="text-white flex items-center mt-2 relative cursor-pointer group"
            onClick={() =>
              handleFriendClick({
                name: item.name,
                avatar: "/assets/img/logos/avatar1.png",
                level: 10,
                status: isChat ? "Online" : "Active",
                conquista: "Achievement example",
              })
            }
            onMouseEnter={(e) => {
              if (isChat) {
                handleMouseEnter(
                  {
                    name: item.name,
                    avatar: "/assets/img/logos/avatar1.png",
                    level: 10,
                    status: isChat ? "Online" : "Active",
                    conquista: "Achievement example",
                  },
                  e
                );
              }
            }}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src="/assets/img/logos/avatar1.png"
              alt={`${item.name} Avatar`}
              className="rounded-full"
              width={32}
              height={32}
            />
            <p className="ml-2">{item.name}</p>
            {isChat && (
              <div
                className="absolute top-2 right-2"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDropdown(item.name);
                }}
              >
                <FaEllipsisV />
                {dropdownVisible === item.name &&
                  renderDropdownMenu({
                    name: item.name,
                    avatar: "",
                    level: 10,
                    status: "Online",
                    conquista: "",
                  })}
              </div>
            )}
            {isChat &&
              hoveredFriend &&
              hoveredFriend.name === item.name &&
              renderMiniProfile()}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <AnimatePresence>
        {!isExpanded ? (
          <div
            key="chat-icon"
            className="fixed right-0 bottom-20 p-3 z-30 cursor-pointer bg-[#282759] rounded-l-xl"
            onClick={toggleExpand}
            style={{
              width: "3rem",
              height: "3rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0px 17px 30px 0px rgba(13, 13, 46, 0.9)",
            }}
            aria-label="Open Live Chat"
          >
            <FaCommentDots color="#FFA723" size="1.5rem" />
          </div>
        ) : (
          <SlideInAnimation
            key="chat-box"
            duration={0.5}
            initialX={100}
            className="fixed top-0 right-0 w-full md:w-1/3 lg:w-1/4 xl:w-1/5 h-full bg-gradient-to-b from-[#1d1c49] to-[#0f0e29] z-10 flex flex-col items-center justify-start pr-4 overflow-y-scroll custom-scrollbar pb-8"
          >
            <div
              className="flex justify-between top-24 mt-2 items-center w-60 p-4 bg-[#282759] rounded-xl shadow-md ml-4 absolute z-20"
              style={{
                boxShadow: "0px 17px 30px 0px rgba(13, 13, 46, 0.9)",
              }}
            >
              <div className="flex items-center">
                <FaCommentDots color="#FFA723" size="1.5rem" />
                <p
                  className="ml-2 text-white text-lg font-semibold"
                  style={{ fontFamily: "Montserrat", fontWeight: "bold" }}
                >
                  Chat & Amigos
                </p>
              </div>
              <div
                className="cursor-pointer"
                onClick={toggleExpand}
                aria-label="Close Live Chat"
              >
                <FaChevronRight color="#FFFFFF" size="1rem" />
              </div>
            </div>

            <div className="w-full mt-20 p-4 relative">
              {isLoggedIn ? (
                <>
                  {showChat ? (
                    <>
                      <div className="flex justify-around w-full mb-4 mt-20">
                        <div className="flex flex-col items-center cursor-pointer group">
                          <FaUserPlus color="#FFA723" size="1.5rem" />
                          <p className="text-white text-sm mt-1">
                            Solicitações
                          </p>
                        </div>
                        <div
                          className="flex flex-col items-center cursor-pointer group"
                          onClick={() => setShowChat(!showChat)}
                        >
                          <FaUserFriends color="#FFA723" size="1.5rem" />
                          <p className="text-white text-sm mt-1">Amigos</p>
                        </div>
                        <div
                          className="flex flex-col items-center cursor-pointer group"
                          onClick={() => setShowChat(!showChat)}
                        >
                          <FaUsers color="#FFA723" size="1.5rem" />
                          <p className="text-white text-sm mt-1">Grupos</p>
                        </div>
                      </div>

                      <div className="w-full mb-4">
                        <div className="flex items-center bg-[#282759] rounded-xl p-2">
                          <FaSearch color="#FFFFFF" size="1rem" />
                          <input
                            type="text"
                            placeholder="Search..."
                            className="ml-2 w-full bg-transparent text-white focus:outline-none"
                            style={{ fontFamily: "Montserrat" }}
                          />
                        </div>
                      </div>

                      {renderScrollableRow()}

                      {renderChatsAndGroups(
                        [{ name: "Friend 1" }, { name: "Friend 2" }],
                        true
                      )}

                      {renderChatsAndGroups(
                        [{ name: "Group 1" }, { name: "Group 2" }],
                        false
                      )}
                    </>
                  ) : (
                    <div className="flex flex-col bg-[#1d1c49] rounded-xl w-full h-full p-4 mt-20">
                      <div className="flex-1 overflow-y-scroll custom-scrollbar">
                        <div className="text-white p-2 rounded bg-[#282759] my-2">
                          <p className="text-sm">{selectedChat?.name}:</p>
                          <p>Hello, how are you?</p>
                        </div>
                        <div className="text-white p-2 rounded bg-[#282759] my-2">
                          <p className="text-sm">You:</p>
                          <p>I&apos;m good, thanks!</p>
                        </div>
                      </div>
                      <div className="mt-2 flex items-center">
                        <input
                          type="text"
                          placeholder="Type your message..."
                          className="w-full bg-[#282759] text-white p-2 rounded-l-xl focus:outline-none"
                        />
                        <button
                          className="bg-[#FFA723] p-3 rounded-r-xl"
                          aria-label="Send message"
                        >
                          <FaPaperPlane color="#1d1c49" />
                        </button>
                      </div>
                      <div
                        className="cursor-pointer text-center mt-4"
                        onClick={() => setShowChat(true)}
                      >
                        <FaChevronRight
                          color="#FFFFFF"
                          size="1rem"
                          className="rotate-180"
                        />
                        <p className="text-white">Voltar</p>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="flex flex-col items-center mt-28 w-full">
                  <h2
                    className="text-white text-xl font-semibold mb-4"
                    style={{
                      fontFamily: "Montserrat",
                      fontWeight: "bold",
                    }}
                  >
                    Você precisa estar logado
                  </h2>
                  <button
                    className="text-white py-2 px-4 rounded mb-4 w-3/4 relative overflow-hidden"
                    style={{
                      fontFamily: "Montserrat",
                      fontWeight: "bold",
                      background:
                        "linear-gradient(to right, #8E83FB, #5D52EE)",
                      boxShadow: "0 0 15px rgba(93, 82, 238, 0.5)",
                      backgroundSize: "200% 200%",
                      transition: "background 0.5s ease, color 0.5s ease",
                    }}
                    onMouseEnter={(e) => {
                      const target = e.currentTarget;
                      target.style.animation =
                        "gradientSlide 1.5s ease forwards, pulseGlow 1.5s infinite alternate";
                    }}
                    onMouseLeave={(e) => {
                      const target = e.currentTarget;
                      target.style.transition =
                        "background 0.5s ease, color 0.5s ease";
                      target.style.animation = "none";
                      target.style.background =
                        "linear-gradient(to right, #8E83FB, #5D52EE)";
                    }}
                  >
                    Logar
                  </button>
                  <button
                    className="text-white py-2 px-4 rounded w-3/4 relative overflow-hidden"
                    style={{
                      fontFamily: "Montserrat",
                      fontWeight: "bold",
                      background:
                        "linear-gradient(to right, #8E83FB, #5D52EE)",
                      boxShadow: "0 0 15px rgba(93, 82, 238, 0.5)",
                      backgroundSize: "200% 200%",
                      transition: "background 0.5s ease, color 0.5s ease",
                    }}
                    onMouseEnter={(e) => {
                      const target = e.currentTarget;
                      target.style.animation =
                        "gradientSlide 1.5s ease forwards, pulseGlow 1.5s infinite alternate";
                    }}
                    onMouseLeave={(e) => {
                      const target = e.currentTarget;
                      target.style.transition =
                        "background 0.5s ease, color 0.5s ease";
                      target.style.animation = "none";
                      target.style.background =
                        "linear-gradient(to right, #8E83FB, #5D52EE)";
                    }}
                  >
                    Criar Conta
                  </button>
                </div>
              )}
            </div>
          </SlideInAnimation>
        )}
      </AnimatePresence>
    </>
  );
};

export default RightColumn;

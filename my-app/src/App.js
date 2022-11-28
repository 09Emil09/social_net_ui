import { useState, useEffect } from 'react';
import MuiTheme from "./MuiTheme";
import Header from "./components/Header";
import { Person } from "@mui/icons-material";

import oguz from "./components/friends-avatars/oguz.jpg";
import michel from "./components/friends-avatars/michel.jpg";
import sam from "./components/friends-avatars/sam.jpg";
import vicky from "./components/friends-avatars/vicky.jpg";
import alex from "./components/friends-avatars/alex.jpg";

import oguzPostPhoto1 from "./components/News/photos/oguzPostPhoto1.jpg";
import oguzPostPhoto2 from "./components/News/photos/oguzPostPhoto2.jpg";
import alexPostPhoto from "./components/News/photos/alexPostPhoto.jpg";

import MarkunreadMailboxIcon from '@mui/icons-material/MarkunreadMailbox';
import MarkunreadIcon from '@mui/icons-material/Markunread';

import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import News from './components/News/News';
import Messages from "./components/Messages/Messages";
import ProfileGallery from './components/Profile/ProfileInfo/ProfileGallery/ProfileGallery';

import { Container } from '@mui/material';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dialog from './components/Messages/Dialog';

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    { icon: <Person />, label: "Profile" },
    { icon: <MarkunreadMailboxIcon />, label: "News" },
    { icon: <MarkunreadIcon />, label: "Messages" },
  ];

  const [newsData, setNewsData] = useState([
    {
      id: 0,
      avatar: oguz,
      memberName: "Oguz Garcia",
      text: "Spending a good time today!",
      photos: [oguzPostPhoto1, oguzPostPhoto2],
      time: "4 minutes ago",
      isLiked: false,
      likes: 7,
    },
    {
      id: 1,
      avatar: michel,
      memberName: "Michel Carder",
      text: "Dolor quam egestas egestas consequat arcu faucibus sagittis. Lectus sem convallis aenean facilisis varius et porttitor sit. Etiam amet vitae imperdiet amet, ornare facilisi. In aliquet amet, ut turpis blandit arcu ac morbi. Consectetur nibh gravida senectus senectus sit urna.",
      photos: [],
      time: "35 minutes ago",
      isLiked: false,
      likes: 82,
    },
    {
      id: 2,
      avatar: alex,
      memberName: "Alex Dorwart",
      text: "",
      photos: [alexPostPhoto],
      time: "2 hours ago",
      isLiked: false,
      likes: 76,
    },
  ]);

  const [dialogsData, setDialogsData] = useState([
    {
      id: 0,
      avatar: alex,
      memberName: "Alex Dorwart",
      messages: [
        { text: "Hi, have you seen the movie 'The Godfather?'", fromMe: false },
        { text: "What's up, no. What genre is it?", fromMe: true },
        { text: "It's crime drama", fromMe: false },
        { text: "Sounds interesting. Did you like it?", fromMe: true },
        { text: "I like it)", fromMe: false },
      ],
    },
    {
      id: 1,
      avatar: michel,
      memberName: "Michel Carder",
      messages: [
        { text: "I see you)", fromMe: false },
        { text: "cool dress", fromMe: false },
        { text: "oh, noticed you, thanks)", fromMe: true },
        { text: "where are you going?", fromMe: false },
        { text: "I was going to walk around the city, go shopping. I recently saw some cool sneakers, maybe I'll look for them", fromMe: true },
        { text: "yees, it is. Where are you?", fromMe: true },
        { text: "hurry to class", fromMe: false },
        { text: "ok good luck)", fromMe: true },
        { text: "What's up, dude?", fromMe: false },
      ],
    },
    {
      id: 2,
      avatar: oguz,
      memberName: "Oguz Garcia",
      messages: [
        { text: "What's up", fromMe: false },
        { text: "Hi", fromMe: true },
        { text: "have we started studying civil law yet?", fromMe: false },
        { text: "It was on the lecture", fromMe: true },
      ],
    },
    {
      id: 3,
      avatar: sam,
      memberName: "Sam Winchester",
      messages: [
        { text: "well, you said you travel a lot?", fromMe: true },
        { text: "sometimes)", fromMe: false },
        { text: "great, may I continue to ask you about your experience?", fromMe: true },
        { text: "Of course", fromMe: false },
        { text: "If you have been to Liverpool, how did you like it?", fromMe: true },
        { text: "It's a really nice city", fromMe: false },
      ],
    },
    {
      id: 4,
      avatar: vicky,
      memberName: "Vicky Riddle",
      messages: [
        { text: "I think she did the right thing yesterday, she should defend her opinion to the end. I would do the same", fromMe: true },
        { text: "You aren't right", fromMe: false },
      ],
    },
  ]);

  const initLastMessage = (name) => {
    const indx = dialogsData.findIndex(dialog => dialog.memberName === name);
    return dialogsData[indx].messages[dialogsData[indx].messages.length - 1].text
  }

  const [messagesData, setMessagesData] = useState([
    {
      id: 0,
      avatar: alex,
      memberName: "Alex Dorwart",
      text: initLastMessage("Alex Dorwart"),
      time: "30 sec ago",
      isChecked: false,
      isFromMe: false,
    },
    {
      id: 1,
      avatar: michel,
      memberName: "Michel Carder",
      text: initLastMessage("Michel Carder"),
      time: "2 min ago",
      isChecked: false,
      isFromMe: false,
    },
    {
      id: 2,
      avatar: oguz,
      memberName: "Oguz Garcia",
      text: initLastMessage("Oguz Garcia"),
      time: "an hour ago",
      isChecked: true,
      isFromMe: true,
    },
    {
      id: 3,
      avatar: sam,
      memberName: "Sam Winchester",
      text: initLastMessage("Sam Winchester"),
      time: "15 hours ago",
      isChecked: true,
      isFromMe: false,
    },
    {
      id: 4,
      avatar: vicky,
      memberName: "Vicky Riddle",
      text: initLastMessage("Vicky Riddle"),
      time: "day ago",
      isChecked: true,
      isFromMe: true,
    },
  ]);

  useEffect(() => {
    window.localStorage.setItem('newsData', JSON.stringify(newsData));
  }, [newsData]);

  useEffect(() => {
    window.localStorage.setItem('messagesData', JSON.stringify(messagesData));
  }, [messagesData]);

  const sendMessage = (id, text) => {

    const newMessage = {
      text: text,
      fromMe: true,
    }
    const dialogIndex = dialogsData.findIndex(dialog => dialog.id === id);
    let updatableDialog = { ...dialogsData[dialogIndex] };
    updatableDialog.messages.push(newMessage);
    setDialogsData(dialogsData => {
      const updatedDialogsData = [...dialogsData];
      updatedDialogsData[dialogIndex] = updatableDialog;
      return updatedDialogsData;
    })
    let updatableMessage = { ...messagesData[dialogIndex] };
    updatableMessage.text = text;
    updatableMessage.isFromMe = true;
    updatableMessage.isChecked = true;
    updatableMessage.time = "right now"
    setMessagesData(messagesData => {
      const updatedMessagesData = [...messagesData];
      updatedMessagesData[dialogIndex] = updatableMessage;
      return updatedMessagesData;
    })
  }

  return (
    <BrowserRouter>
      <MuiTheme>
        <Header
          handleMenu={() => setIsMenuOpen(true)}
        />
        <NavBar
          menuOpen={isMenuOpen}
          closeMenu={() => setIsMenuOpen(false)}
          menuItems={menuItems}
        />

        <Routes>
          <Route path="/profile" element={<ProfileGallery />} />
        </Routes>
        <Container
          maxWidth="md"
          sx={{
            justifyContent: "center",
          }}
        >
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/news" element={<News />} />
            <Route exact path="/messages" element={<Messages />} />
            {dialogsData.map((data, index) => (
              <Route path={"/messages/" + data.memberName.replace(" ", "_").toLowerCase()}
                element={<Dialog {...data} sendMessage={sendMessage} />}
                key={index}
              />
            ))}
          </Routes>
        </Container>
      </MuiTheme>
    </BrowserRouter>
  );
}

export default App;
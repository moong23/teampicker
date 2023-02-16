import "./Mainpage.css";
import { useState, useEffect } from "react";

import { Btndiv, CustomBtn, UserBlock } from "./Mainpage.element";
import Line from "./Line";
import UserData from "./UserDummy";

const Mainpage = () => {
  const [game, setGame] = useState("lol");
  const [page, setPage] = useState(1);
  const [user, setUser] = useState([]);
  const lol_pick_audio = new Audio("lol_pick.mp3");
  const ow_pick_audio = new Audio("ow_pick.mp3");
  const apex_pick_audio = new Audio("apex_pick.mp3");

  const GameSelect = () => {
    return (
      <>
        <h2> Welcome to Team Maker! </h2>
        <h3> select game to play</h3>
        <MainBtnArea />
        <CustomBtn
          onClick={() => {
            const tmpval = Math.random() * 99 + 1;
            console.log(tmpval);
            if (tmpval === 1) {
              if (game === "apex") {
                apex_pick_audio.play();
              } else if (game === "ow") {
                ow_pick_audio.play();
              } else if (game === "lol") {
                lol_pick_audio.play();
              }
            }
            setPage(2);
          }}
        >
          선택완료
        </CustomBtn>
      </>
    );
  };

  const MainBtnArea = () => {
    return (
      <div className="mainpagebtn">
        <Btndiv
          onClick={() => {
            setGame("lol");
          }}
          selected={game === "lol"}
        >
          <img src="lol.png" alt="lol" className="imgclass"></img>
        </Btndiv>
        <Btndiv
          onClick={() => {
            setGame("ow");
          }}
          selected={game === "ow"}
        >
          <img src="ow.png" alt="ow" className="imgclass"></img>
        </Btndiv>
        <Btndiv
          onClick={() => {
            setGame("apex");
          }}
          selected={game === "apex"}
        >
          <img src="apex.png" alt="apex" className="imgclass"></img>{" "}
        </Btndiv>
      </div>
    );
  };

  const LolPage = () => {
    return (
      <div>
        <h1>League of Legends</h1>

        <Line name="Top" />

        <Line name="Jungle" />

        <Line name="Mid" />

        <Line name="Bot" />

        <Line name="Support" />
      </div>
    );
  };

  const OwPage = () => {
    return (
      <div>
        <h1>Overwatch</h1>
        <h2>Tank</h2>
        <Line />
        <h2>Damage</h2>
        <Line />
        <Line />
        <h2>Support</h2>
        <Line />
        <Line />
      </div>
    );
  };

  const ApexPage = () => {
    return (
      <div>
        <h1>Apex Legends</h1>
        <h2>Team Leader</h2>
        <Line />
        <h2>Team Average</h2>
        <Line />
        <h2>Team Burruge</h2>
        <Line />
      </div>
    );
  };

  const UserClick = (e) => {
    console.log(user.find((user) => user === e.target.outerText));
    console.log(e.target.outerText);
    setUser([...user, e.target.outerText]);
    console.log(user);
  };

  return (
    <div className="mainpagecontainer">
      <h1> TEAM MAKER </h1>
      <h2> version 0.0.1</h2>
      <div className="mainpagebox">
        {page === 1 ? (
          <GameSelect />
        ) : game === "lol" ? (
          <LolPage />
        ) : game === "ow" ? (
          <OwPage />
        ) : (
          <ApexPage />
        )}
      </div>
      <div className="userselectbox">
        {UserData.map((user) => {
          return (
            <UserBlock key={user.id} onClick={UserClick}>
              {user.name}
            </UserBlock>
          );
        })}
      </div>
    </div>
  );
};
export default Mainpage;

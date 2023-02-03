import "./Mainpage.css";
import { useState, useEffect } from "react";

import { Btndiv, CustomBtn } from "./Mainpage.element";
import Line from "./Line";

const Mainpage = () => {
  const [game, setGame] = useState("lol");
  const [page, setPage] = useState(1);

  const GameSelect = () => {
    return (
      <>
        <h2> Welcome to Team Maker! </h2>
        <h3> select game to play</h3>
        <MainBtnArea />
        <CustomBtn onClick={() => setPage(2)}>선택완료</CustomBtn>
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
        <h2>Top</h2>
        <Line />
        <h2>Jungle</h2>
        <Line />
        <h2>Mid</h2>
        <Line />
        <h2>Bot</h2>
        <Line />
        <h2>Support</h2>
        <Line />
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

  return (
    <div className="mainpagecontainer">
      <h1> TEAM MAKER </h1>
      <h2> version 0.0.1</h2>
      <div className="mainpagebox">
        {page === 1 ? (
          <GameSelect />
        ) : game === "lol" ? (
          <LolPage linenum={5} />
        ) : game === "ow" ? (
          <OwPage />
        ) : (
          <ApexPage />
        )}
      </div>
    </div>
  );
};
export default Mainpage;

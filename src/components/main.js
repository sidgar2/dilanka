import Spiner from "./spiner/spiner";
import Contacts from "./contacts/contacts";
import React from 'react';
import MainInfo from "./main-info";

function Main() {
  return (
    <div className="Main">
      <div className="title">
        Продаж земельної ділянки на кордоні з Угорщиною
      </div>
      <div className="content">
        <Spiner/>
        <MainInfo/>
        <Contacts/>
      </div>
    </div>
  )
}

export default Main;

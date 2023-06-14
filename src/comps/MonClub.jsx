import React from "react";
import ClubAdmin from "./ClubAdmin";
import ClubMembre from "./ClubMembre";
import Dashboard from "./Dashboard";

const MonClub = (props) => {


const clubinfos = props.clubInfos
  if(clubinfos.role == 'proprietaire'){
    return <ClubAdmin clubinfos={clubinfos}/>
  }else if(clubinfos.role == 'coproprietaire'){
    // return <Dashboard/>
    return <ClubAdmin clubinfos={clubinfos}/>
  }else{
    return <ClubMembre clubinfos={clubinfos}/>
  }

}

export default MonClub

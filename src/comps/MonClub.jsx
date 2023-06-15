import React from "react";
import ClubAdmin from "./ClubAdmin";
import ClubCoAdmin from "./ClubCoAdmin";
import ClubMembre from "./ClubMembre";

const MonClub = (props) => {


const clubinfos = props.clubInfos
  if(clubinfos.role == 'proprietaire'){
    return <ClubAdmin clubinfos={clubinfos}/>
  }
  else if(clubinfos.role == 'coproprietaire'){
    return <ClubCoAdmin clubinfos={clubinfos}/>
  }
  else{
    return <ClubMembre clubinfos={clubinfos}/>
  }

}

export default MonClub

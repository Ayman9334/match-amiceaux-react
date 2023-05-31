import React from "react";
import ClubAdmin from "./ClubAdmin";
import ClubMembre from "./ClubMembre";

const MonClub = (props) => {


const clubinfos = props.clubInfos
  if(clubinfos.role == 'proprietaire'){
    return <ClubAdmin clubinfos={clubinfos}/>
  }else if(clubinfos.role == 'coproprietaire'){
    clubinfos.membres.map(x=> (x.club_member.member_id == clubinfos.member_id)?<>ana hada</>:(x.club_member.member_role == 'membre')?<>li n9der n editi</>:<>chaf</>)
  }else{
    return <ClubMembre clubinfos={clubinfos}/>
  }

}

export default MonClub

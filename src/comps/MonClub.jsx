// import { useStateContext } from "../context/ContextProvider"


const MonClub = (props) => {
  // const {notification} = useStateContext()
  console.log(props.clubInfos)
  return (
    <div className="container">
      <br /><br /><br /><br />
      
      <h1>{props.title}</h1>
      <div key={props.clubInfos.id}>
          <h4>{props.clubInfos.nom_club}</h4>
          <h2>{props.clubInfos.club_code}</h2>
          <h2>{props.clubInfos.role}</h2>
          <h2>{props.clubInfos.membres.map((member) =><p>{member.nom}</p>)}</h2>
      </div>

      {/* <div className="row d-flex justify-content-center align-items-center">
        <div className="col-lg-8 d-flex">
          <div className="card w-100">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <h5 className="card-title">Members of the team</h5>
                </div>
                <div className="ms-auto">
                  <button
                    className="btn waves-effect waves-light btn btn-info hidden-sm-down text-white">Add
                    Members</button>
                </div>
              </div>
              <div className="table-responsive mt-3 no-wrap">
                <table className="table vm no-th-brd pro-of-month">
                  <thead>
                    <tr>
                      <th colSpan="2">Player Name</th>
                      <th>Position</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                    <td><span className="round"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvn-SLuF3gyO6NW2Z_qB4dDyNmihcis4DnDg&usqp=CAU"
                        alt="user" width="50" /></span></td>
                      <td>
                        <h6>Thibu Courtoi</h6><small className="text-muted">Team 1</small>
                      </td>
                      <td>GoalKeeper</td>
                      <td className="d-flex justify-content-around">
                        <a href=""><i className="fa fa-edit"></i></a>
                        <a href=""><i className="fa fa-trash-o"></i></a>
                      </td>
                    </tr>
                    <tr className="active">
                      <td><span className="round"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Eder_Militao_2021.jpg/640px-Eder_Militao_2021.jpg"
                        alt="user" width="50" /></span></td>
                      <td>
                        <h6>Eder Militao</h6><small className="text-muted">Team 1</small>
                      </td>
                      <td>Defender</td>
                      <td className="d-flex justify-content-around">
                        <a href=""><i className="fa fa-edit"></i></a>
                        <a href=""><i className="fa fa-trash-o"></i></a>
                      </td>
                    </tr>
                    <tr>
                    <td><span className="round"><img src="https://img.a.transfermarkt.technology/portrait/big/369081-1681999815.jpg?lm=1"
                        alt="user" width="50" /></span></td>
                      <td>
                        <h6>Federico Valverde</h6><small className="text-muted">Team 1</small>
                      </td>
                      <td>Midfielder</td>
                      <td className="d-flex justify-content-around">
                        <a href=""><i className="fa fa-edit"></i></a>
                        <a href=""><i className="fa fa-trash-o"></i></a>
                      </td>
                    </tr>
                    <tr>
                    <td><span className="round"><img src="https://cdn.sofifa.net/players/238/794/23_360.png"
                        alt="user" width="50" /></span></td>
                      <td>
                        <h6>Vinisuis Junior</h6><small className="text-muted">Team 1</small>
                      </td>
                      <td>Midfielder</td>
                      <td className="d-flex justify-content-around"> <a href=""><i className="fa fa-edit"></i></a>
                        <a href=""><i className="fa fa-trash-o"></i></a>
                      </td>
                    </tr>
                    <tr>
                    <td><span className="round"><img src="https://i.pinimg.com/736x/5d/18/b2/5d18b25ff369b7916f4fe85d6c76a563.jpg"
                        alt="user" width="50" /></span></td>
                      <td>
                        <h6>Cristiano Ronaldo</h6><small className="text-muted">Team 1</small>
                      </td>
                      <td>Forward</td>
                      <td className="d-flex justify-content-around"> <a href=""><i className="fa fa-edit"></i></a>
                        <a href=""><i className="fa fa-trash-o"></i></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /><br /><br /><br /> */}
    </div>
  )
}



export default MonClub

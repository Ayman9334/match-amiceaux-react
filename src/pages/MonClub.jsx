// import { useStateContext } from "../context/ContextProvider"


const MonClub = () => {
  // const {notification} = useStateContext()
  return (
    <div className="container">
      problema del malaga elportivo mucho bienbr
      <br /><br /><br /><br />
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col-lg-8 d-flex">
          <div class="card w-100">
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <div>
                  <h5 class="card-title">Members of the team</h5>
                </div>
                <div class="ms-auto">
                  <button
                    class="btn waves-effect waves-light btn btn-info hidden-sm-down text-white">Add
                    Members</button>
                  {/* <select class="form-select b-0">
                              <option selected="">January</option>
                              <option value="1">February</option>
                              <option value="2">March</option>
                              <option value="3">April</option>
                          </select> */}
                </div>
              </div>
              <div class="table-responsive mt-3 no-wrap">
                <table class="table vm no-th-brd pro-of-month">
                  <thead>
                    <tr>
                      <th colspan="2">Player Name</th>
                      <th>Position</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                    <td><span class="round"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvn-SLuF3gyO6NW2Z_qB4dDyNmihcis4DnDg&usqp=CAU"
                        alt="user" width="50" /></span></td>
                      <td>
                        <h6>Thibu Courtoi</h6><small class="text-muted">Team 1</small>
                      </td>
                      <td>GoalKeeper</td>
                      <td class="d-flex justify-content-around">
                        <a href=""><i class="fa fa-edit"></i></a>
                        <a href=""><i class="fa fa-trash-o"></i></a>
                      </td>
                    </tr>
                    <tr class="active">
                      <td><span class="round"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Eder_Militao_2021.jpg/640px-Eder_Militao_2021.jpg"
                        alt="user" width="50" /></span></td>
                      <td>
                        <h6>Eder Militao</h6><small class="text-muted">Team 1</small>
                      </td>
                      <td>Defender</td>
                      <td class="d-flex justify-content-around">
                        <a href=""><i class="fa fa-edit"></i></a>
                        <a href=""><i class="fa fa-trash-o"></i></a>
                      </td>
                    </tr>
                    <tr>
                    <td><span class="round"><img src="https://img.a.transfermarkt.technology/portrait/big/369081-1681999815.jpg?lm=1"
                        alt="user" width="50" /></span></td>
                      <td>
                        <h6>Federico Valverde</h6><small class="text-muted">Team 1</small>
                      </td>
                      <td>Midfielder</td>
                      <td class="d-flex justify-content-around">
                        <a href=""><i class="fa fa-edit"></i></a>
                        <a href=""><i class="fa fa-trash-o"></i></a>
                      </td>
                    </tr>
                    <tr>
                    <td><span class="round"><img src="https://cdn.sofifa.net/players/238/794/23_360.png"
                        alt="user" width="50" /></span></td>
                      <td>
                        <h6>Vinisuis Junior</h6><small class="text-muted">Team 1</small>
                      </td>
                      <td>Midfielder</td>
                      <td class="d-flex justify-content-around"> <a href=""><i class="fa fa-edit"></i></a>
                        <a href=""><i class="fa fa-trash-o"></i></a>
                      </td>
                    </tr>
                    <tr>
                    <td><span class="round"><img src="https://i.pinimg.com/736x/5d/18/b2/5d18b25ff369b7916f4fe85d6c76a563.jpg"
                        alt="user" width="50" /></span></td>
                      <td>
                        <h6>Cristiano Ronaldo</h6><small class="text-muted">Team 1</small>
                      </td>
                      <td>Forward</td>
                      <td class="d-flex justify-content-around"> <a href=""><i class="fa fa-edit"></i></a>
                        <a href=""><i class="fa fa-trash-o"></i></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /><br /><br /><br />
    </div>
  )
}



export default MonClub

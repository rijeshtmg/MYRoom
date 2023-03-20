export default function(){
    return (
        <div className="container-fluid">
  <div className="row"> 
    <div className="col-5 col-lg-2  d-lg-block align-content-center pe-0 collapse accordion-collapse bg-white" id="sidebar">
      <div className="d-flex p-0">
        <h5 className="mt-4 ps-3 pb-2"> School's Logo</h5>
        <button className="btn d-lg-none ms-lg-0 bg-light mt-3 ms-4 " id="burger" type="button" data-bs-toggle="collapse" data-bs-target="#sidebar" aria-expanded="false" aria-controls="sidebar" aria-label="Toogle Navigation"><i className="bi bi-list" /></button>
      </div>
      <div>
        <ul className="nav nav-pills flex-column mt-2">
          <li className="nav-item ms-2 mt-5 mb-3 p-1 active">
            <a className="nav-link" aria-current="page" href="#"> <i className="bi bi-house-fill  pe-3" /> Dashboard</a>
          </li>
          <li className="nav-item ms-2 mb-3 p-1">
            <a className="nav-link " style={{color: '#303972'}} href="#"> <i className="fa-solid fa-person-chalkboard pe-2" /> Teachers</a>
          </li>
          <li className="nav-item ms-2 mb-3 p-1">
            <a className="nav-link" href="#"> <i className="fa-solid fa-user-tie  pe-3" /> Students</a>
          </li>
          <li className="nav-item ms-2 mb-3 p-1">
            <a className="nav-link" href="#"> <i className="fa-solid fa-people-roof  pe-3" /> Class</a>
          </li>
          <li className="nav-item ms-2 mb-3 p-1">
            <a className="nav-link" href="#"> <i className="fa-solid fa-calendar  pe-3" /> Events</a>
          </li>
          <li className="nav-item ms-2 mb-3 p-1">
            <a className="nav-link" href="#"> <i className="fa-regular fa-comment  pe-3" /> Chats</a>
          </li>
          <li className="nav-item ms-2 mb-3 p-1">
            <a className="nav-link" href="#"> <i className="bi bi-activity  pe-3" /> Latest Activity</a>
          </li>
          <li className="nav-item ms-2 mb-3 p-1">
            <a className="nav-link" href="#"> <i className="fa-solid fa-coins  pe-3" /> Finance</a>
          </li>
          <li className="nav-item ms-2 mb-3 p-1">
            <a className="nav-link" href="#"> <i className="fa-solid fa-coins  pe-3" /> Finance</a>
          </li>
        </ul>
        <p className="mt-5 ms-2">
          <strong>School's Name Admin Dashboard</strong> <br />
          Made by Ants Pvt Ltd</p>
      </div>
    </div>
    <div className="col-md-9 col-lg-8 " id="midcontent">
      <div className="container-fluid">
        <div className="row justify-content-between mt-3">
          <div className="col-2 ms-2 ms-lg-none ps-lg-0 d-flex  justify-content-start align-content-center text-center ">
            <button className="btn d-lg-none ms-lg-0 bg-light  me-5" id="burger" type="button" data-bs-toggle="collapse" data-bs-target="#sidebar" aria-expanded="false" aria-controls="sidebar" aria-label="Toogle Navigation"><i className="bi bi-list" /></button>
            <h1 className>Dashboard</h1>
          </div>
          <div className="col-3 me-md-2 me-4 d-flex flex-column justify-content-center align-content-center text-center">
            <div className="input-group mb-3" id="searchbox">
              <button className="btn ps-3 pe-2" type="button"><i className="bi bi-search pe-0" /></button>
              <input type="text" className="form-control shadow-none " placeholder="Search here..." aria-label aria-describedby="basic-addon1" />
            </div>
          </div>
        </div>
        <div className="row justify-content-between me-md-2 mt-4 ms-2 me-4 " id="banner">
          <div className="col-md-2 d-flex flex-column justify-content-center bg-light rounded-3">
            <a href className="d-flex text-center text-decoration-none  h-75 ps-2">
              <button type="button" className="btn btn-primary rounded-circle mt-2 student border-0"><i className="fa-solid fa-user-tie" /></button>
              <p className="pt-1 ps-1 text-start text-secondary">Students<br />
                <strong className="text-dark">15000</strong> 
              </p>
            </a>
          </div>
          <div className="col-md-2 d-flex flex-column justify-content-center  bg-light rounded-3">
            <a href className="d-flex text-center text-decoration-none text-secondary h-75 ps-2 border-0">
              <button type="button" className="btn btn-primary rounded-circle mt-2 teacher border-0"> <i className="fa-solid fa-person-chalkboard text-bg-dark" style={{marginLeft: '-2px'}} /></button>
              <p className="pt-1 ps-1  text-start">Teachers<br />
                <strong className="text-dark">150</strong> 
              </p>
            </a>
          </div>
          <div className="col-md-2 d-flex flex-column justify-content-center  bg-light rounded-3">
            <a href className="d-flex text-center text-decoration-none text-secondary h-75 ps-2 ">
              <button type="button" className="btn btn-primary rounded-circle mt-2 events border-0"><i className="fa-solid fa-calendar " /></button>
              <p className="pt-1 ps-1 text-start">Events<br />
                <strong className="text-dark">40</strong> 
              </p>
            </a>
          </div>
          <div className="col-md-2 d-flex flex-column justify-content-center  bg-light rounded-3">
            <a href className="d-flex text-center text-decoration-none text-secondary h-75 ps-2">
              <button type="button" className="btn btn-primary rounded-circle mt-2 staff border-0"><i className="fa-solid fa-people-carry-box staffs" style={{marginLeft: '-2px'}} /></button>
              <p className="pt-2 ps-1 text-start">Staffs<br />
                <strong className="text-dark">70</strong> 
              </p>
            </a>
          </div>
        </div>
        <div className="row justify-content-evenly">
          <div className="col-md-5">
          </div>
          <div className="col-md-5" />
        </div>
      </div>
    </div>
    <div className="col-md-3" id="leftbar" />
  </div>
</div>

    )
}
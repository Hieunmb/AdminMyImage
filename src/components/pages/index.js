function Index() {
    return (
        <div className="page-wrapper">
        <div className="container-fluid">
            <div className="row page-titles">
                <div className="col-md-5 align-self-center">
                    <h4 className="text-themecolor">Mailbox</h4>
                </div>
                <div className="col-md-7 align-self-center text-end">
                    <div className="d-flex justify-content-end align-items-center">
                        <ol className="breadcrumb justify-content-end">
                            <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                            <li className="breadcrumb-item active">Mailbox</li>
                        </ol>
                        <button type="button" className="btn btn-info d-none d-lg-block m-l-15 text-white"><i className="fa fa-plus-circle"></i> Create New</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="row">
                            <div className="col-lg-3 col-md-4">
                                <div className="card-body inbox-panel"><a href="app-compose.html" className="btn btn-danger m-b-20 p-10 w-100 waves-effect waves-light text-white">Compose</a>
                                    <ul className="list-group list-group-full">
                                        <li className="list-group-item d-flex no-block align-items-center active"> <a href="javascript:void(0)" className="d-flex no-block align-items-center"><i className="mdi mdi-gmail fs-4 me-2 d-flex align-items-center"></i> Inbox </a><span className="badge bg-success ms-auto">6</span></li>
                                        <li className="list-group-item d-flex no-block align-items-center">
                                            <a href="javascript:void(0)" className="d-flex no-block align-items-center"> <i className="mdi mdi-star fs-4 me-2 d-flex justify-content-center"></i> Starred </a>
                                        </li>
                                        <li className="list-group-item d-flex no-block align-items-center">
                                            <a href="javascript:void(0)" className="d-flex  no-block align-items-center"> <i className="mdi mdi-send fs-4 me-2 d-flex align-items-center"></i> Draft </a><span className="badge bg-danger ms-auto">3</span></li>
                                        <li className="list-group-item d-flex no-block align-items-center ">
                                            <a href="javascript:void(0)" className="d-flex no-block align-items-center"> <i className="mdi mdi-file-document-box fs-4 me-2 d-flex align-items-center"></i> Sent Mail </a>
                                        </li>
                                        <li className="list-group-item d-flex no-block align-items-center">
                                            <a href="javascript:void(0)" className="d-flex no-block align-items-center"> <i className="fs-4 me-2 d-flex align-items-center mdi mdi-delete"></i> Trash </a>
                                        </li>
                                    </ul>
                                    <h3 className="card-title m-t-40">Labels</h3>
                                    <div className="list-group b-0 mail-list"> <a href="javascript:void(0)" className="list-group-item"><span className="fa fa-circle text-info m-r-10"></span>Work</a> <a href="javascript:void(0)" className="list-group-item"><span className="fa fa-circle text-warning m-r-10"></span>Family</a> <a href="javascript:void(0)" className="list-group-item"><span className="fa fa-circle text-purple m-r-10"></span>Private</a> <a href="javascript:void(0)" className="list-group-item"><span className="fa fa-circle text-danger m-r-10"></span>Friends</a> <a href="javascript:void(0)" className="list-group-item"><span className="fa fa-circle text-success m-r-10"></span>Corporate</a> </div>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-8 bg-light border-start">
                                <div className="card-body">
                                    <div className="btn-group m-b-10 m-r-10" role="group" aria-label="Button group with nested dropdown">
                                        <button type="button" className="btn btn-secondary font-18"><i className="mdi mdi-inbox-arrow-down"></i></button>
                                        <button type="button" className="btn btn-secondary font-18"><i className="mdi mdi-alert-octagon"></i></button>
                                        <button type="button" className="btn btn-secondary font-18"><i className="mdi mdi-delete"></i></button>
                                    </div>
                                    <div className="btn-group m-b-10 m-r-10" role="group" aria-label="Button group with nested dropdown">
                                        <div className="btn-group" role="group">
                                            <button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="mdi mdi-folder font-18 "></i> </button>
                                            <div className="dropdown-menu" aria-labelledby="btnGroupDrop1"> <a className="dropdown-item" href="javascript:void(0)">Dropdown link</a> <a className="dropdown-item" href="javascript:void(0)">Dropdown link</a> </div>
                                        </div>
                                        <div className="btn-group" role="group">
                                            <button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="mdi mdi-label font-18"></i> </button>
                                            <div className="dropdown-menu" aria-labelledby="btnGroupDrop1"> <a className="dropdown-item" href="javascript:void(0)">Dropdown link</a> <a className="dropdown-item" href="javascript:void(0)">Dropdown link</a> </div>
                                        </div>
                                    </div>
                                    <button type="button " className="btn btn-secondary m-r-10 m-b-10"><i className="mdi mdi-reload font-18"></i></button>
                                    <div className="btn-group" role="group">
                                        <button id="btnGroupDrop1" type="button" className="btn m-b-10 btn-secondary font-18 dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> More </button>
                                        <div className="dropdown-menu" aria-labelledby="btnGroupDrop1"> <a className="dropdown-item" href="javascript:void(0)">Mark as all read</a> <a className="dropdown-item" href="javascript:void(0)">Dropdown link</a> </div>
                                    </div>
                                </div>
                                <div className="card-body p-t-0">
                                    <div className="card b-all shadow-none">
                                        <div className="inbox-center table-responsive">
                                            <table className="table table-hover no-wrap">
                                                <tbody>
                                                    <tr className="unread">
                                                        <td style={{width:"40px"}}>
                                                            <div className="form-check mr-sm-2">
                                                                <input type="checkbox" className="form-check-input" id="checkbox0" value="check"/>
                                                                <label className="form-check-label" for="checkbox0"></label>
                                                            </div>
                                                        </td>
                                                        <td style={{width:"40px"}} className="hidden-xs-down"><i className="far fa-star"></i></td>
                                                        <td className="hidden-xs-down">Hritik Roshan</td>
                                                        <td className="max-texts"> <a href="app-email-detail.html" /><span className="label label-info m-r-10">Work</span> Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem</td>
                                                        <td className="hidden-xs-down"><i className="fa fa-paperclip"></i></td>
                                                        <td className="text-end"> 12:30 PM </td>
                                                    </tr>
                                                    <tr className="unread">
                                                        <td>
                                                            <div className="form-check mr-sm-2">
                                                                <input type="checkbox" className="form-check-input" id="checkbox1" value="check"/>
                                                                <label className="form-check-label" for="checkbox1"></label>
                                                            </div>
                                                        </td>
                                                        <td className="hidden-xs-down"><i className="fa fa-star text-warning"></i></td>
                                                        <td className="hidden-xs-down">Genelia Roshan</td>
                                                        <td className="max-texts"><a href="app-email-detail.html">Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem</a></td>
                                                        <td className="hidden-xs-down"><i className="fa fa-paperclip"></i></td>
                                                        <td className="text-end"> May 13 </td>
                                                    </tr>
                                                    <tr className="unread">
                                                        <td>
                                                            <div className="form-check mr-sm-2">
                                                                <input type="checkbox" className="form-check-input" id="checkbox2" value="check"/>
                                                                <label className="form-check-label" for="checkbox2"></label>
                                                            </div>
                                                        </td>
                                                        <td className="hidden-xs-down"><i className="far fa-star"></i></td>
                                                        <td className="hidden-xs-down">Ritesh Deshmukh</td>
                                                        <td className="max-texts"><a href="app-email-detail.html"><span className="label label-success">Elite</span> Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem</a></td>
                                                        <td className="hidden-xs-down"><i className="fa fa-paperclip"></i></td>
                                                        <td className="text-end"> May 12 </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check mr-sm-2">
                                                                <input type="checkbox" className="form-check-input" id="checkbox3" value="check"/>
                                                                <label className="form-check-label" for="checkbox3"></label>
                                                            </div>
                                                        </td>
                                                        <td className="hidden-xs-down"><i className="far fa-star"></i></td>
                                                        <td className="hidden-xs-down">Akshay Kumar</td>
                                                        <td className="max-texts"><a href="app-email-detail.html"><span className="label label-warning">Work</span> Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem</a></td>
                                                        <td className="hidden-xs-down"><i className="fa fa-paperclip"></i></td>
                                                        <td className="text-end"> May 12 </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check mr-sm-2">
                                                                <input type="checkbox" className="form-check-input" id="checkbox4" value="check"/>
                                                                <label className="form-check-label" for="checkbox4"></label>
                                                            </div>
                                                        </td>
                                                        <td className="hidden-xs-down"><i className="far fa-star"></i></td>
                                                        <td className="hidden-xs-down">Hritik Roshan</td>
                                                        <td className="max-texts"><a href="app-email-detail.html"><span className="label label-info m-r-10">Work</span> Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem</a></td>
                                                        <td className="hidden-xs-down"><i className="fa fa-paperclip"></i></td>
                                                        <td className="text-end"> May 12 </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check mr-sm-2">
                                                                <input type="checkbox" className="form-check-input" id="checkbox5" value="check"/>
                                                                <label className="form-check-label" for="checkbox5"></label>
                                                            </div>
                                                        </td>
                                                        <td className="hidden-xs-down"><i className="fa fa-star text-warning"></i></td>
                                                        <td className="hidden-xs-down">Genelia Roshan</td>
                                                        <td className="max-texts"><a href="app-email-detail.html">Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem</a></td>
                                                        <td className="hidden-xs-down"><i className="fa fa-paperclip"></i></td>
                                                        <td className="text-end"> May 11 </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check mr-sm-2">
                                                                <input type="checkbox" className="form-check-input" id="checkbox6" value="check"/>
                                                                <label className="form-check-label" for="checkbox6"></label>
                                                            </div>
                                                        </td>
                                                        <td className="hidden-xs-down"><i className="far fa-star"></i></td>
                                                        <td className="hidden-xs-down">Ritesh Deshmukh</td>
                                                        <td className="max-texts"><a href="app-email-detail.html"><span className="label label-success">Elite</span> Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem</a></td>
                                                        <td className="hidden-xs-down"><i className="fa fa-paperclip"></i></td>
                                                        <td className="text-end"> May 11 </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check mr-sm-2">
                                                                <input type="checkbox" className="form-check-input" id="checkbox7" value="check"/>
                                                                <label className="form-check-label" for="checkbox7"></label>
                                                            </div>
                                                        </td>
                                                        <td className="hidden-xs-down"><i className="far fa-star"></i></td>
                                                        <td className="hidden-xs-down">Akshay Kumar</td>
                                                        <td className="max-texts"><a href="app-email-detail.html"><span className="label label-warning">Work</span> Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem</a></td>
                                                        <td className="hidden-xs-down"><i className="fa fa-paperclip"></i></td>
                                                        <td className="text-end"> May 11 </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check mr-sm-2">
                                                                <input type="checkbox" className="form-check-input" id="checkbox8" value="check"/>
                                                                <label className="form-check-label" for="checkbox8"></label>
                                                            </div>
                                                        </td>
                                                        <td className="hidden-xs-down"><i className="far fa-star"></i></td>
                                                        <td className="hidden-xs-down">Hritik Roshan</td>
                                                        <td className="max-texts"><a href="app-email-detail.html"><span className="label label-info m-r-10">Work</span> Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem</a></td>
                                                        <td className="hidden-xs-down"><i className="fa fa-paperclip"></i></td>
                                                        <td className="text-end"> May 10 </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check mr-sm-2">
                                                                <input type="checkbox" className="form-check-input" id="checkbox9" value="check"/>
                                                                <label className="form-check-label" for="checkbox9"></label>
                                                            </div>
                                                        </td>
                                                        <td className="hidden-xs-down"><i className="fa fa-star text-warning"></i></td>
                                                        <td className="hidden-xs-down">Genelia Roshan</td>
                                                        <td className="max-texts"><a href="app-email-detail.html">Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem</a></td>
                                                        <td className="hidden-xs-down"><i className="fa fa-paperclip"></i></td>
                                                        <td className="text-end"> May 10 </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check mr-sm-2">
                                                                <input type="checkbox" className="form-check-input" id="checkbox10" value="check"/>
                                                                <label className="form-check-label" for="checkbox10"></label>
                                                            </div>
                                                        </td>
                                                        <td className="hidden-xs-down"><i className="far fa-star"></i></td>
                                                        <td className="hidden-xs-down">Ritesh Deshmukh</td>
                                                        <td className="max-texts"><a href="app-email-detail.html"><span className="label label-success">Elite</span> Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem</a></td>
                                                        <td className="hidden-xs-down"><i className="fa fa-paperclip"></i></td>
                                                        <td className="text-end"> May 10 </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check mr-sm-2">
                                                                <input type="checkbox" className="form-check-input" id="checkbox11" value="check"/>
                                                                <label className="form-check-label" for="checkbox11"></label>
                                                            </div>
                                                        </td>
                                                        <td className="hidden-xs-down"><i className="far fa-star"></i></td>
                                                        <td className="hidden-xs-down">Akshay Kumar</td>
                                                        <td className="max-texts"><a href="app-email-detail.html"><span className="label label-warning">Work</span> Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem</a></td>
                                                        <td className="hidden-xs-down"><i className="fa fa-paperclip"></i></td>
                                                        <td className="text-end"> May 09 </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check mr-sm-2">
                                                                <input type="checkbox" className="form-check-input" id="checkbox12" value="check"/>
                                                                <label className="form-check-label" for="checkbox12"></label>
                                                            </div>
                                                        </td>
                                                        <td className="hidden-xs-down"><i className="far fa-star"></i></td>
                                                        <td className="hidden-xs-down">Hritik Roshan</td>
                                                        <td className="max-texts"><a href="app-email-detail.html"><span className="label label-info m-r-10">Work</span> Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem</a></td>
                                                        <td className="hidden-xs-down"><i className="fa fa-paperclip"></i></td>
                                                        <td className="text-end"> May 09 </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check mr-sm-2">
                                                                <input type="checkbox" className="form-check-input" id="checkbox13" value="check"/>
                                                                <label className="form-check-label" for="checkbox13"></label>
                                                            </div>
                                                        </td>
                                                        <td className="hidden-xs-down"><i className="fa fa-star text-warning"></i></td>
                                                        <td className="hidden-xs-down">Genelia Roshan</td>
                                                        <td className="max-texts"><a href="app-email-detail.html">Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem</a></td>
                                                        <td className="hidden-xs-down"><i className="fa fa-paperclip"></i></td>
                                                        <td className="text-end"> May 09 </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check mr-sm-2">
                                                                <input type="checkbox" className="form-check-input" id="checkbox14" value="check"/>
                                                                <label className="form-check-label" for="checkbox14"></label>
                                                            </div>
                                                        </td>
                                                        <td className="hidden-xs-down"><i className="far fa-star"></i></td>
                                                        <td className="hidden-xs-down">Ritesh Deshmukh</td>
                                                        <td className="max-texts"><a href="app-email-detail.html"><span className="label label-success">Elite</span> Lorem ipsum perspiciatis unde omnis iste natus error sit voluptatem</a></td>
                                                        <td className="hidden-xs-down"><i className="fa fa-paperclip"></i></td>
                                                        <td className="text-end"> May 09 </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-sidebar">
                <div className="slimscrollright">
                    <div className="rpanel-title"> Service Panel <span><i className="ti-close right-side-toggle"></i></span> </div>
                    <div className="r-panel-body">
                        <ul id="themecolors" className="m-t-20">
                            <li><b>With Light sidebar</b></li>
                            <li><a href="javascript:void(0)" data-skin="skin-default" className="default-theme working">1</a></li>
                            <li><a href="javascript:void(0)" data-skin="skin-green" className="green-theme">2</a></li>
                            <li><a href="javascript:void(0)" data-skin="skin-red" className="red-theme">3</a></li>
                            <li><a href="javascript:void(0)" data-skin="skin-blue" className="blue-theme">4</a></li>
                            <li><a href="javascript:void(0)" data-skin="skin-purple" className="purple-theme">5</a></li>
                            <li><a href="javascript:void(0)" data-skin="skin-megna" className="megna-theme">6</a></li>
                            <li className="d-block m-t-30"><b>With Dark sidebar</b></li>
                            <li><a href="javascript:void(0)" data-skin="skin-default-dark" className="default-dark-theme ">7</a></li>
                            <li><a href="javascript:void(0)" data-skin="skin-green-dark" className="green-dark-theme">8</a></li>
                            <li><a href="javascript:void(0)" data-skin="skin-red-dark" className="red-dark-theme">9</a></li>
                            <li><a href="javascript:void(0)" data-skin="skin-blue-dark" className="blue-dark-theme">10</a></li>
                            <li><a href="javascript:void(0)" data-skin="skin-purple-dark" className="purple-dark-theme">11</a></li>
                            <li><a href="javascript:void(0)" data-skin="skin-megna-dark" className="megna-dark-theme ">12</a></li>
                        </ul>
                        <ul className="m-t-20 chatonline">
                            <li><b>Chat option</b></li>
                            <li>
                                <a href="javascript:void(0)"><img src="../assets/images/users/1.jpg" alt="user-img" className="img-circle"/> <span>Varun Dhavan <small className="text-success">online</small></span></a>
                            </li>
                            <li>
                                <a href="javascript:void(0)"><img src="../assets/images/users/2.jpg" alt="user-img" className="img-circle"/> <span>Genelia Deshmukh <small className="text-warning">Away</small></span></a>
                            </li>
                            <li>
                                <a href="javascript:void(0)"><img src="../assets/images/users/3.jpg" alt="user-img" className="img-circle"/> <span>Ritesh Deshmukh <small className="text-danger">Busy</small></span></a>
                            </li>
                            <li>
                                <a href="javascript:void(0)"><img src="../assets/images/users/4.jpg" alt="user-img" className="img-circle"/> <span>Arijit Sinh <small className="text-muted">Offline</small></span></a>
                            </li>
                            <li>
                                <a href="javascript:void(0)"><img src="../assets/images/users/5.jpg" alt="user-img" className="img-circle"/> <span>Govinda Star <small className="text-success">online</small></span></a>
                            </li>
                            <li>
                                <a href="javascript:void(0)"><img src="../assets/images/users/6.jpg" alt="user-img" className="img-circle"/> <span>John Abraham<small className="text-success">online</small></span></a>
                            </li>
                            <li>
                                <a href="javascript:void(0)"><img src="../assets/images/users/7.jpg" alt="user-img" className="img-circle"/> <span>Hritik Roshan<small className="text-success">online</small></span></a>
                            </li>
                            <li>
                                <a href="javascript:void(0)"><img src="../assets/images/users/8.jpg" alt="user-img" className="img-circle"/> <span>Pwandeep rajan <small className="text-success">online</small></span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
    
export default Index;
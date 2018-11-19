<?php include 'includes/header.php';?>
        <!-- Page wrapper  -->
        <div class="page-wrapper">
            <!-- Bread crumb -->
            <div class="row page-titles">
                <div class="col-md-5 align-self-center">
                    <h3 class="text-primary">Add Credit</h3> </div>
                <div class="col-md-7 align-self-center">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                        <li class="breadcrumb-item active">Add Credit</li>
                    </ol>
                </div>
            </div>
            <!-- End Bread crumb -->
            <!-- Container fluid  -->
            <div class="container-fluid">
                <!-- Start Page Content -->
                <div class="row">
                  <div class="col-md-12">
                    <div class="card">
                      <!-- <div class="title col-md-12 text-center">
                        <h2>Manage Notifications</h2>
                      </div> -->
                      <form action="" class="form-horizontal input-field">
                        <h6>Add Credits:</h6>
                          <label class="radio" onclick="allEmployer();"><input class="radion-set" type="radio" name="optradio" checked>All Employer</label>
                          <label class="radio" onclick="allJobseeker();"><input class="radion-set" type="radio" name="optradio">All Jobseekers</label>
                          <label class="radio" onclick="anEmployer();"><input class="radion-set" type="radio" name="optradio">An Employer</label>
                          <label class="radio" onclick="aJobseeker();"><input class="radion-set" type="radio" name="optradio">A Jobseeker</label>

                          <div class="card view-employer-details" style="display: none;">
                            <div class="profile-employer">
                              <div class="col-md-3">
                                <div class="company-logo">
                                  <div class="card">
                                    <img src="images/avatar/2.jpg" alt="Company Logo" class="img-responsive">
                                    <!-- <h4>Company Logo/Image</h4> -->
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-9">
                                <div class="view-details">
                                  <div class="col-md-12 v-position">
                                    <div class="bold-title">
                                      <!-- <figure>Company Name:</figure> -->
                                      <!-- <span>Comapany Name Value</span> -->
                                      <h3>Company Name Value</h3>
                                    </div>
                                  </div>
                                  <div class="col-md-12 v-position">
                                    <div class="position-detail">
                                      <figure>Company Description:</figure>
                                      <span>Company Value</span>
                                    </div>
                                  </div>
                                  <div class="col-md-12 v-position">
                                    <div class="position-detail">
                                      <figure>Contact Person:</figure>
                                      <span>Contact Value</span>
                                    </div>
                                  </div>
                                  <div class="col-md-12 v-position">
                                    <div class="position-detail">
                                      <figure>E-mail</figure>
                                      <span>admin@gmail.com</span>
                                    </div>
                                  </div>
                                  <div class="button-group">
                                    <div class="">
                                      <button data-toggle="modal" data-target="#myModal" class="btn btn-black">Veiw More</button>
                                      <button data-toggle="modal" data-target="#notification1" class="btn btn-black">Add Credit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>


                          <div class="card view-employer-details view-jobseeker" style="display: none;">
                            <div class="profile-employer">
                              <div class="col-md-3">
                                <div class="company-logo">
                                  <div class="card">
                                    <img src="images/avatar/2.jpg" alt="Company Logo" class="img-responsive">
                                    <!-- <h4>Company Logo/Image</h4> -->
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-9">
                                <div class="view-details">
                                  <div class="col-md-12 v-position">
                                    <div class="bold-title">
                                      <!-- <figure>Company Name:</figure> -->
                                      <!-- <span>Comapany Name Value</span> -->
                                      <h3>Name</h3>
                                    </div>
                                  </div>
                                  <div class="col-md-12 v-position">
                                    <div class="position-detail">
                                      <figure>E-mail:</figure>
                                      <span>admin@gmail.com</span>
                                    </div>
                                  </div>
                                  <div class="col-md-12 v-position">
                                    <div class="position-detail">
                                      <figure>I.C. Number:</figure>
                                      <span>Local</span>
                                    </div>
                                  </div>
                                  <div class="col-md-12 v-position">
                                    <div class="position-detail">
                                      <figure>Contact No:</figure>
                                      <span>Local</span>
                                    </div>
                                  </div>
                                  <div class="button-group">
                                    <div class="">
                                      <button data-toggle="modal" data-target="#myModal1" class="btn btn-black">Veiw More</button>
                                      <button data-toggle="modal" data-target="#notification3" class="btn btn-black">Add Credit</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>


                          <!-- <div class="form-group notification_all">
                            <label for="">Title</label>
                            <div class="col-md-6" style="padding: 0;">
                              <input class="form-control" type="text" name="name" maxlength="20" id="title" required>
                            </div>
                            <label for="">Description</label>
                            <div class="col-md-6" style="padding: 0;">
                              <textarea class="form-control" name="name" rows="8" id="decs" cols="80" maxlength="50"></textarea>
                            </div>
                          </div> -->
                          <div class="form-group notification_allemployer">
                            <label for="">Credits</label>
                            <div class="col-md-6" style="padding: 0;">
                              <input class="form-control" type="text" name="name" maxlength="20" id="title" required>
                            </div>
                            <label for="">Details</label>
                            <div class="col-md-6" style="padding: 0;">
                              <!-- <input class="form-control" type="text" name="name" maxlength="20" id="title" required> -->
                              <textarea class="form-control" name="name" rows="8" id="det" cols="80" maxlength="50"></textarea>
                            </div>
                            <div class="form-group button-group " style="margin-top: 15px">
                              <div class="text-left">
                                <button class="btn btn-primary btn-black btn-send-not" style="margin-right: 0;">Add</button>
                              </div>
                            </div>
                          </div>
                          <div class="form-group notification_alljobseeker" style="display: none;">
                            <label for="">Credits</label>
                            <div class="col-md-6" style="padding: 0;">
                              <input class="form-control" type="text" name="name" maxlength="20" id="title" required>
                            </div>
                            <label for="">Details</label>
                            <div class="col-md-6" style="padding: 0;">
                              <!-- <input class="form-control" type="text" name="name" maxlength="20" id="title" required> -->
                              <textarea class="form-control" name="name" rows="8" id="det" cols="80" maxlength="50"></textarea>
                            </div>
                            <div class="form-group button-group " style="margin-top: 15px">
                              <div class="text-left">
                                <button class="btn btn-primary btn-black btn-send-not" style="margin-right: 0;">Add</button>
                              </div>
                            </div>
                          </div>
                        <!-- <div class="form-group notification_name1" style="display: none;">
                          <label for="">Enter Name (An Employer)</label>
                          <div class="col-md-6" style="padding: 0;">
                            <input class="form-control" type="text" name="name" id="name" required>
                          </div>
                        </div>
                        <div class="form-group notification_name2" style="display: none;">
                          <label for="">Enter Name (A Jobseeker)</label>
                          <div class="col-md-6" style="padding: 0;">
                            <input class="form-control" type="text" name="name" id="name" required>
                          </div>
                        </div> -->

                        </div>
                      </form>
                    </div>
                  </div>
                </div>



                <!-- The Modal -->
                  <div class="modal modal-notification" id="notification1">
                    <div class="modal-dialog">
                      <div class="modal-content">

                        <!-- Modal Header -->
                        <div class="modal-header">
                          <h4 class="modal-title">Add Credits</h4>
                          <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>

                        <!-- Modal body -->
                        <div class="modal-body">
                          <div class="col-md-12">
                            <form class="" action="index.html" method="post">
                              <label for="">Credits</label>
                              <div class="col-md-12" style="padding: 0;">
                                <input class="form-control" type="text" name="name" maxlength="20" id="title" required>
                              </div>
                              <label for="">Details</label>
                              <div class="col-md-12" style="padding: 0;">
                                <textarea class="form-control" name="name" rows="8" id="decs" cols="80" maxlength="50"></textarea>
                                </div>
                                <div class="form-group button-group " style="margin-top: 1rem;">
                                  <div class="text-text">
                                    <button class="btn btn-primary btn-black" style="margin-right: 0;" type="submit">Add</button>
                                  </div>
                                </div>
                            </form>
                          </div>
                        </div>

                        <!-- Modal footer -->
                        <!-- <div class="modal-footer">
                          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                        </div> -->

                      </div>
                    </div>
                  </div>


                  <!-- The Modal -->
                    <div class="modal modal-notification" id="notification3">
                      <div class="modal-dialog">
                        <div class="modal-content">

                          <!-- Modal Header -->
                          <div class="modal-header">
                            <h4 class="modal-title">Add Credits</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                          </div>

                          <!-- Modal body -->
                          <div class="modal-body">
                            <div class="col-md-12">
                              <form class="" action="index.html" method="post">
                                <label for="">Credits</label>
                                <div class="col-md-12" style="padding: 0;">
                                  <input class="form-control" type="text" name="name" maxlength="20" id="title" required>
                                </div>
                                <label for="">Details</label>
                                <div class="col-md-12" style="padding: 0;">
                                  <textarea class="form-control" name="name" rows="8" id="decs" cols="80" maxlength="50"></textarea>
                                  </div>
                                  <div class="form-group button-group " style="margin-top: 1rem;">
                                    <div class="text-text">
                                      <button class="btn btn-primary btn-black" style="margin-right: 0;" type="submit">Add</button>
                                    </div>
                                  </div>
                              </form>
                            </div>
                          </div>

                          <!-- Modal footer -->
                          <!-- <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                          </div> -->

                        </div>
                      </div>
                    </div>


                  <!-- Modal -->
                  <div class="modal" id="myModal">
                    <div class="modal-dialog modal-dialogs">
                      <div class="modal-content">

                        <!-- Modal Header -->
                        <div class="modal-header header-modal">
                          <h4 class="modal-title modal-heading">Company Name</h4>
                          <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>

                        <!-- Modal body -->
                        <div class="modal-body modal-details">
                          <div class="col-md-4 profile-image">
                            <img src="images/users/1.jpg" alt="" class="img-responsive">
                          </div>
                          <div class="overview col-md-7">
                            <div class="col-md-12 right-modal">
                              <div class="details-manage">
                                <h4>Website</h4>
                                <p>info.com</p>
                              </div>
                              <div class="details-manage">
                                <h4>Company Description</h4>
                                <p>Description Value</p>
                              </div>
                              <div class="details-manage">
                                <h4>Contact Person</h4>
                                <p>Contact Value</p>
                                <p></p>
                              </div>
                              <div class="details-manage">
                                <h4>Contact No</h4>
                                <p>Number Value</p>
                              </div>
                              <div class="details-manage">
                                <h4>Email</h4>
                                <p>info@gmail.com</p>
                              </div>
                              <div class="details-manage">
                                <h4>Address</h4>
                                <p>Address Value</p>
                              </div>
                              <div class="details-manage">
                                <h4>Country</h4>
                                <p>Country Value</p>
                              </div>
                              <div class="details-manage">
                                <h4>State</h4>
                                <p>State Value</p>
                              </div>

                            </div>
                          </div>
                          <div class="button-group col-md-12 text-center" style="margin-top: 1.5em;">
                            <div class="">
                              <a href="all-jobs.php" class="btn btn-primary btn-black">All Jobs</a>
                              <a href="current-job.php" class="btn btn-primary btn-black">Current Job</a>
                              <a href="complete-job.php" class="btn btn-primary btn-black">Completed Jobs</a>
                              <a href="cancel-job.php" class="btn btn-primary btn-black">Cancelled Jobs</a>
                              <a href="#" name="viewImage" data-toggle="modal" data-target="#credit-popup" class="btn btn-primary btn-black">Add Credit</a>
                              <a href="#" class="btn btn-primary btn-black">Disable Account</a>
                            </div>
                          </div>
                        </div>

                        <!-- Modal footer -->
                        <!-- <div class="modal-footer">
                          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                        </div> -->

                      </div>
                    </div>
                  </div>


                  <!-- Modal -->
                  <div class="modal" id="myModal1">
                    <div class="modal-dialog modal-dialogs">
                      <div class="modal-content">

                        <!-- Modal Header -->
                        <div class="modal-header header-modal">
                          <h4 class="modal-title modal-heading">Company Name</h4>
                          <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>

                        <!-- Modal body -->
                        <div class="modal-body modal-details">
                          <div class="col-md-4 profile-image">
                            <img src="images/users/1.jpg" alt="" class="img-responsive">
                          </div>
                          <div class="overview col-md-7">
                            <div class="col-md-12 right-modal">
                              <div class="details-manage">
                                <h4>Website</h4>
                                <p>info.com</p>
                              </div>
                              <div class="details-manage">
                                <h4>Company Description</h4>
                                <p>Description Value</p>
                              </div>
                              <div class="details-manage">
                                <h4>Contact Person</h4>
                                <p>Contact Value</p>
                                <p></p>
                              </div>
                              <div class="details-manage">
                                <h4>Contact No</h4>
                                <p>Number Value</p>
                              </div>
                              <div class="details-manage">
                                <h4>Email</h4>
                                <p>info@gmail.com</p>
                              </div>
                              <div class="details-manage">
                                <h4>Address</h4>
                                <p>Address Value</p>
                              </div>
                              <div class="details-manage">
                                <h4>Country</h4>
                                <p>Country Value</p>
                              </div>
                              <div class="details-manage">
                                <h4>State</h4>
                                <p>State Value</p>
                              </div>

                            </div>
                          </div>
                          <div class="button-group col-md-12 text-center" style="margin-top: 1.5em;">
                            <div class="">
                              <a href="jobseeker-all-jobs.php" class="btn btn-primary btn-black">All Jobs</a>
                              <a href="jobseeker-current-job.php" class="btn btn-primary btn-black">Current Job</a>
                              <a href="jobseeker-complete-job.php" class="btn btn-primary btn-black">Completed Jobs</a>
                              <a href="jobseeker-cancel-job.php" class="btn btn-primary btn-black">Cancelled Jobs</a>
                              <a href="#" name="viewImage" data-toggle="modal" data-target="#credit-popup" class="btn btn-primary btn-black">Add Credit</a>
                              <button onclick="alertNotify()" class="btn btn-primary btn-black">Disable Account</button>
                              <a href="#" name="viewImage" data-toggle="modal" data-target="#membership-popup" class="btn btn-primary btn-black">Membership</a>
                            </div>
                          </div>
                        </div>

                        <!-- Modal footer -->
                        <!-- <div class="modal-footer">
                          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                        </div> -->

                      </div>
                    </div>
                  </div>


            <!-- End Container fluid  -->

  <?php include 'includes/footer.php';?>

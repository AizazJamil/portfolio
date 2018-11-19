<?php include 'includes/header.php';?>
    <!-- Page wrapper  -->
    <div class="page-wrapper">
      <!-- Bread crumb -->
      <div class="row page-titles">
        <div class="col-md-5 align-self-center">
          <h3 class="text-primary">Manage Jobseeker</h3> </div>
        <div class="col-md-7 align-self-center">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
            <li class="breadcrumb-item active">Manage Jobseeker</li>
          </ol>
        </div>
      </div>
      <!-- End Bread crumb -->
      <div class="alert alert-danger alert-dismissible fade show" >
          <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <strong>Holy guacamole!</strong> You should check in on some of those fields below.
      </div>
      <!-- Container fluid  -->
      <div class="container-fluid">
        <!-- Start Page Content -->
        <div class="row">

          <div class="col-md-12">
            <div class="card view-employer-details">
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
                        <button data-toggle="modal" data-target="#myModal" class="btn btn-black">Veiw More</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card view-employer-details">
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
                        <button data-toggle="modal" data-target="#myModal2" class="btn btn-black">Veiw More</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                    <img src="images/users/1.jpg" alt="" class="img-responsive" style="margin-bottom: 12px;">
                    <div class="details-manage">
                      <h4>About Yourself</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                  </div>
                  <div class="overview col-md-7">
                    <div class="col-md-12 right-modal">
                      <div class="details-manage">
                        <h4>Name (as in I.C.)</h4>
                        <p>IC Name Value</p>
                      </div>
                      <div class="details-manage">
                        <h4>I.C. No.</h4>
                        <p>IC No Value</p>
                      </div>
                      <div class="details-manage">
                        <h4>Contact No</h4>
                        <p>Contact Value</p>
                        <p></p>
                      </div>
                      <div class="details-manage">
                        <h4>Email</h4>
                        <p>info@gmail.com</p>
                      </div>
                      <div class="details-manage">
                        <h4>Race</h4>
                        <p>Race Value</p>
                      </div>
                      <div class="details-manage">
                        <h4>Gender</h4>
                        <p>Male</p>
                      </div>
                      <div class="details-manage">
                        <h4>Date of Birth</h4>
                        <p>DOB Value</p>
                      </div>
                      <div class="details-manage">
                        <h4>Working Experience</h4>
                        <p>Experience Value</p>
                      </div>
                      <!-- <div class="details-manage">
                        <h4>About Yourself</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      </div> -->

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
                      <a href="#" name="viewImage" data-toggle="modal" data-target="#qualification-popup" class="btn btn-primary btn-black">Qualification</a>
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
          <div class="modal" id="myModal2">
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

          <!-- basic modal -->
                <div class="modal" id="credit-popup">
                  <div class="modal-dialog credit-dialog">
                    <div class="modal-content">

                      <!-- Modal Header -->
                      <div class="modal-header">
                        <h4 class="modal-title">Add Credits</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                      </div>

                      <!-- Modal body -->
                      <div class="modal-body modal-credit" id="modal-Body">
                        <div class="credit-view">
                          <div class="availabe-crdt">
                            <h3>Available Credits: 100</h3>
                          </div>
                          <form class="credit-validation" action="" method="post">
                            <div class="form-group">
                              <label for="">Enter Credit</label>
                              <div class="">
                                <input class="form-control" type="number" name="person" id="person" required>
                              </div>
                            </div>
                            <div class="button-group col-md-12 text-center">
                              <button type="submit" class="btn btn-primary btn-black btn-outline">Add</button>
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

                <!-- basic modal -->
                <div class="modal" id="membership-popup">
                  <div class="modal-dialog membership-dialog">
                    <div class="modal-content">

                      <!-- Modal Header -->
                      <div class="modal-header">
                        <h4 class="modal-title">Membership</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                      </div>

                      <!-- Modal body -->
                      <div class="modal-body modal-membership" id="modal-Body">
                        <div class="member-view">
                          <div class="availabe-crdt">
                            <h3>Membership: Basic</h3>
                          </div>
                          <div class="button-group col-md-12 text-center">
                            <button type="submit" class="btn btn-primary btn-black btn-outline">Change To Premium</button>
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


                <!-- basic modal -->
                <div class="modal" id="qualification-popup">
                  <div class="modal-dialog membership-dialog">
                    <div class="modal-content">

                      <!-- Modal Header -->
                      <div class="modal-header">
                        <h4 class="modal-title">Qualification</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                      </div>

                      <!-- Modal body -->
                      <div class="modal-body modal-membership" id="modal-Body">
                        <div class="member-view">
                          <div class="qualification text-center">
                            <h3>Qualification</h3>
                          </div>
                          <!-- <div class="button-group col-md-12 text-center">
                            <button type="submit" class="btn btn-primary btn-black btn-outline">Change To Premium</button>
                          </div> -->
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

  <script type="text/javascript">
    function alertNotify() {
      $('.alert-danger').show();
    }
  </script>

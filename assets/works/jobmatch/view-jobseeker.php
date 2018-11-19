<?php include 'includes/header.php';?>
        <!-- Page wrapper  -->
        <div class="page-wrapper">
            <!-- Bread crumb -->
            <div class="row page-titles">
                <div class="col-md-5 align-self-center">
                    <h3 class="text-primary">View More Jobseeker</h3> </div>
                <div class="col-md-7 align-self-center">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                        <li class="breadcrumb-item active">View More Jobseeker</li>
                    </ol>
                </div>
            </div>
            <!-- End Bread crumb -->
            <!-- Container fluid  -->
            <div class="container-fluid">
                <!-- Start Page Content -->
                <div class="row">
                  <div class="col-md-3">
                    <div class="company-logo">
                      <div class="card">
                        <!-- <img src="" alt="Company Logo" class="img-responsive"> -->
                        <h4>Image</h4>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-9">
                    <div class="card jobs-content">
                      <!-- <div class="title col-md-12 text-center">
                        <h2>View More Jobseeker</h2>
                      </div> -->
                      <div class="col-md-12 v-position">
                        <div class="position-detail">
                          <figure>Username:</figure>
                          <span>Local</span>
                        </div>
                      </div>
                      <hr>
                      <div class="col-md-12 v-position">
                        <div class="position-detail">
                          <figure>Name (as in I.C.):</figure>
                          <span>Local</span>
                        </div>
                      </div>
                      <hr>
                      <div class="col-md-12 v-position">
                        <div class="position-detail">
                          <figure>I.C No:</figure>
                          <span>Local</span>
                        </div>
                      </div>
                      <hr>
                      <div class="col-md-12 v-position">
                        <div class="position-detail">
                          <figure>Contact No:</figure>
                          <span>Local</span>
                        </div>
                      </div>
                      <hr>
                      <div class="col-md-12 v-position">
                        <div class="position-detail">
                          <figure>Email:</figure>
                          <span>Local</span>
                        </div>
                      </div>
                      <hr>
                      <div class="col-md-12 v-position">
                        <div class="position-detail">
                          <figure>Address:</figure>
                          <span>Local</span>
                        </div>
                      </div>
                      <hr>
                      <div class="col-md-12 v-position">
                        <div class="position-detail">
                          <figure>Qualification (check on setting):</figure>
                          <span>Local</span>
                        </div>
                      </div>
                      <hr>
                      <div class="col-md-12 v-position">
                        <div class="position-detail">
                          <figure>Race [Chinese, Indian, Malay, Others]:</figure>
                          <span>Local</span>
                        </div>
                      </div>
                      <hr>
                      <div class="col-md-12 v-position">
                        <div class="position-detail">
                          <figure>Gender (Male, Female):</figure>
                          <span>Local</span>
                        </div>
                      </div>
                      <hr>
                      <div class="col-md-12 v-position">
                        <div class="position-detail">
                          <figure>D.O.B (set the date):</figure>
                          <span>Local</span>
                        </div>
                      </div>
                      <hr>
                      <div class="col-md-12 v-position">
                        <div class="position-detail">
                          <figure>Working Experience:</figure>
                          <span>Local</span>
                        </div>
                      </div>
                      <hr>
                      <div class="col-md-12 v-position">
                        <div class="position-detail">
                          <figure>About Yourself:</figure>
                          <span>Local</span>
                        </div>
                      </div>
                      <hr>
                      <div class="button-group col-md-12" style="padding: 0;">
                        <div class="">
                          <a href="all-jobs.php" class="btn btn-primary btn-black">All Jobs</a>
                          <a href="current-job.php" class="btn btn-primary btn-black">Current Job</a>
                          <a href="complete-job.php" class="btn btn-primary btn-black">Completed Jobs</a>
                          <a href="cancel-job.php" class="btn btn-primary btn-black">Cancelled Jobs</a>
                          <a href="#" name="viewImage" data-toggle="modal" data-target="#myModal" class="btn btn-primary btn-black">Add Credit</a>
                          <a href="#" class="btn btn-primary btn-black">Disable Account</a>
                          <a href="#" name="viewImage" data-toggle="modal" data-target="#membership-popup" class="btn btn-primary btn-black">Membership</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- basic modal -->
                <div class="modal" id="myModal">
                  <div class="modal-dialog">
                    <div class="modal-content">

                      <!-- Modal Header -->
                      <div class="modal-header">
                        <h4 class="modal-title">Add Credits</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                      </div>

                      <!-- Modal body -->
                      <div class="modal-body" id="modal-Body">
                        <div class="availabe-crdt">
                          <h3>Available Credits: 100</h3>
                        </div>
                        <form class="credit-validation" action="" method="post">
                          <div class="form-group">
                            <label for="">Enter Credit</label>
                            <div class="">
                              <input class="form-control" type="text" name="person" id="person" required>
                            </div>
                          </div>
                          <div class="button-group">
                            <button type="submit" class="btn btn-primary btn-black btn-outline">Add</button>
                          </div>
                        </form>
                      </div>

                      <!-- Modal footer -->
                      <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>

                      </div>

                    </div>
                  </div>
                </div>


                <!-- basic modal -->
                <div class="modal" id="membership-popup">
                  <div class="modal-dialog">
                    <div class="modal-content">

                      <!-- Modal Header -->
                      <div class="modal-header">
                        <h4 class="modal-title">Membership</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                      </div>

                      <!-- Modal body -->
                      <div class="modal-body" id="modal-Body">
                        <div class="availabe-crdt">
                          <h3>Membership: Basic</h3>
                        </div>
                        <div class="button-group">
                          <button type="submit" class="btn btn-primary btn-black btn-outline">Change To Premium</button>
                        </div>
                      </div>

                      <!-- Modal footer -->
                      <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>

                      </div>

                    </div>
                  </div>
                </div>


            <!-- End Container fluid  -->

  <?php include 'includes/footer.php';?>

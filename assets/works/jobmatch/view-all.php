<?php include 'includes/header.php';?>
        <!-- Page wrapper  -->
        <div class="page-wrapper">
            <!-- Bread crumb -->
            <div class="row page-titles">
                <div class="col-md-5 align-self-center">
                    <h3 class="text-primary">View All</h3> </div>
                <div class="col-md-7 align-self-center">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                        <li class="breadcrumb-item active">View All</li>
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
                      <div class="view-details-row">
                        <div class="col-md-4">
                          <figure>
                            <h4><img src="images/icons/01.png" alt="">Country:</h4>
                            <span>Malaysia</span>
                          </figure>
                        </div>
                        <div class="col-md-4">
                          <figure>
                            <h4><img src="images/icons/09.png" alt="">User:</h4>
                            <span>User Value</span>
                          </figure>
                        </div>
                        <div class="col-md-4">
                          <figure>
                            <h4><img src="images/icons/01.png" alt="">Price:</h4>
                            <span>User Value</span>
                          </figure>
                        </div>
                        <div class="col-md-4">
                          <figure>
                            <h4><img src="images/icons/11.png" alt="">Credits:</h4>
                            <span>Credit Value</span>
                          </figure>
                        </div>
                        <div class="col-md-4">
                          <figure>
                            <h4><img src="images/icons/10.png" alt="">Discount:</h4>
                            <span>Discount Value</span>
                          </figure>
                        </div>
                        <div class="col-md-12 text-right">
                          <button type="button" data-toggle="modal" data-target="#viewModal" class="btn btn-success" name="button">Edit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div class="modal" id="viewModal">
                <div class="modal-dialog" style="margin-top: 10px">
                  <div class="modal-content">

                    <!-- Modal Header -->
                    <div class="modal-header">
                      <h4 class="modal-title">Edit Rates</h4>
                      <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                      <div class="col-md-12">
                        <form class="viewForm" action="index.html" method="post">
                          <div class="form-group">
                            <label for="">Select Country</label>
                            <select class="form-control" name="">
                              <option value="">Select Country</option>
                              <option value="">Malaysia</option>
                              <option value="">Singapure</option>
                            </select>
                          </div>
                          <div class="form-group">
                            <label for="">Select User</label>
                            <select class="form-control" name="">
                              <option value="">Select User</option>
                              <option value="">Employer</option>
                              <option value="">Jobseeker</option>
                            </select>
                          </div>
                          <div class="form-group">
                            <label for="">Price</label>
                            <div class="">
                              <input class="form-control" type="text" name="price" id="price" required>
                            </div>
                          </div>
                          <div class="form-group">
                            <label for="">Credits</label>
                            <div class="">
                              <input class="form-control" type="text" name="credits" id="credits" required>
                            </div>
                          </div>
                          <div class="form-group">
                            <label for="">Discount</label>
                            <div class="">
                              <input class="form-control" type="text" name="discount" id="discount" required>
                            </div>
                          </div>
                          <div class="form-group button-group ">
                            <div class="text-right">
                              <button class="btn btn-primary btn-outline-purple btn-black" style="margin-right: 0;">Update</button>
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

            <!-- End Container fluid  -->

  <?php include 'includes/footer.php';?>

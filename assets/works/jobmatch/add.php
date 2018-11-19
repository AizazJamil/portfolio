<?php include 'includes/header.php';?>
        <!-- Page wrapper  -->
        <div class="page-wrapper">
            <!-- Bread crumb -->
            <div class="row page-titles">
                <div class="col-md-5 align-self-center">
                    <h3 class="text-primary">Rates to buy credit</h3> </div>
                <div class="col-md-7 align-self-center">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                        <li class="breadcrumb-item active">Rates</li>
                    </ol>
                </div>
            </div>
            <!-- End Bread crumb -->
            <!-- Container fluid  -->
            <div class="container-fluid">
                <!-- Start Page Content -->
                <div class="row">
                  <div class="col-md-6">
                    <div class="card">
                      <!-- <div class="title col-md-12 text-center">
                        <h2>Manage Credits</h2>
                      </div> -->
                      <form action="" class="form-horizontal input-field">
                        <div class="form-group">
                          <label for="">Select Country</label>
                          <select class="form-control custom-select mr-sm-2" name="">
                            <option value="">Select Country</option>
                            <option value="">Malaysia</option>
                            <option value="">Singapure</option>
                          </select>
                        </div>
                        <div class="form-group">
                          <label for="">User</label>
                          <select class="form-control custom-select mr-sm-2" name="">
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
                          <label for="">Discount (in Percentage)</label>
                          <div class="">
                            <input class="form-control" type="text" name="discount" id="discount" required>
                            <div class="input-group-prepend">
                              <span class="input-group-text" id="inputGroupPrepend">%</span>
                            </div>
                          </div>
                        </div>
                        <div class="form-group button-group ">
                          <div class="text-right">
                            <button class="btn btn-primary btn-outline-purple btn-black" style="margin-right: 0;">Save</button>
                          </div>
                        </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>


            <!-- End Container fluid  -->

  <?php include 'includes/footer.php';?>

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
                            <h4><img src="images/icons/10.png" alt="">Promo Code:</h4>
                            <span>Code Value</span>
                          </figure>
                        </div>
                        <div class="col-md-4">
                          <figure>
                            <h4><img src="images/icons/04.png" alt="">Valid From:</h4>
                            <span>From Value</span>
                          </figure>
                        </div>
                        <div class="col-md-4">
                          <figure>
                            <h4><img src="images/icons/04.png" alt="">Valid To:</h4>
                            <span>To Value</span>
                          </figure>
                        </div>
                        <div class="col-md-4">
                          <figure>
                            <h4><img src="images/icons/11.png" alt="">Extra Credits:</h4>
                            <span>Credit Value</span>
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
                      <h4 class="modal-title">Edit Promo</h4>
                      <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                      <div class="col-md-12">
                        <form class="viewForm" action="index.html" method="post">
                          <div class="form-group">
                            <label for="">Promo Code</label>
                            <div class="">
                              <input class="form-control" type="text" name="promocode" id="promocode" required>
                            </div>
                          </div>
                          <div class="form-group">
                            <label for="">Valid From</label>
                            <div class="">
                              <input class="form-control" type="date" name="valform" id="valform" required>
                            </div>
                          </div>
                          <div class="form-group">
                            <label for="">Valid To</label>
                            <div class="">
                              <input class="form-control" type="date" name="valto" id="valto" required>
                            </div>
                          </div>
                          <div class="form-group">
                            <label for="">Extra Credits</label>
                            <div class="">
                              <input class="form-control" type="text" name="creditextra" id="creditextra" required>
                            </div>
                          </div>
                          <div class="form-group button-group ">
                            <div class="text-right">
                              <button class="btn btn-primary btn-outline-purple btn-black" style="margin-right: 0;">Update</button>
                            </div>
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

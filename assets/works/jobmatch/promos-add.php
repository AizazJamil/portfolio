<?php include 'includes/header.php';?>
        <!-- Page wrapper  -->
        <div class="page-wrapper">
            <!-- Bread crumb -->
            <div class="row page-titles">
                <div class="col-md-5 align-self-center">
                    <h3 class="text-primary">Add Promo</h3> </div>
                <div class="col-md-7 align-self-center">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                        <li class="breadcrumb-item active">Add Promo</li>
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
                            <button class="btn btn-primary btn-outline-purple btn-black" style="margin-right: 0;">Add</button>
                          </div>
                        </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>


            <!-- End Container fluid  -->

  <?php include 'includes/footer.php';?>

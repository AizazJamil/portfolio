<?php include 'includes/header.php';?>
        <!-- Page wrapper  -->
        <div class="page-wrapper">
            <!-- Bread crumb -->
            <div class="row page-titles">
                <div class="col-md-5 align-self-center">
                    <h3 class="text-primary">Add Employer</h3> </div>
                <div class="col-md-7 align-self-center">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="javascript:void(0)">Manage Employer</a></li>
                        <li class="breadcrumb-item active">Add Employer</li>
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
                      <div class="card view-img">
                        <img src="images/avatar/3.jpg" alt="Company Logo" class="img-responsive">
                        <!-- <h4>Company Logo/Image</h4> -->
                      </div>
                      <input type="file" id="upload">
                      <button type="button" class="btn uploadbtn"><span>Upload Image</span></button>
                    </div>
                  </div>

                  <div class="col-md-9">
                    <div class="card">
                      <!-- <div class="title col-md-12 text-center">
                        <h2>Add Employer</h2>
                      </div> -->
                      <form action="" class="form-horizontal input-field">
                        <div class="form-group">
                          <label for="">Company Name</label>
                          <div class="">
                            <input class="form-control" type="text" name="companyname" id="companyname" required>
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="">Website</label>
                          <div class="">
                            <input class="form-control" type="url" name="website" id="website" required>
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="">Company Description</label>
                          <div class="">
                            <textarea class="form-control" name="description" id="description" rows="4" cols="10" maxlength="30"></textarea>
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="">Contact Person</label>
                          <div class="">
                            <input class="form-control" type="text" name="person" id="person" required>
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="">Contact No</label>
                          <div class="">
                            <input class="form-control" type="text" name="contactno" id="contactno" required>
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="">Email</label>
                          <div class="">
                            <input class="form-control" type="email" name="email" id="email" required>
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="">Password</label>
                          <div class="">
                            <input class="form-control" type="password" name="password" id="password" required>
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="">Address</label>
                          <div class="">
                            <input class="form-control" type="text" name="address" id="address" required>
                          </div>
                        </div>
                        <div class="list-detail">
                          <div class="form-group col-md-5" style="padding: 0;">
                            <label for="">Country</label>
                              <select name="" id="country" class="form-control" required>
                                <option value="" disabled="disabled" selected="selected">Choose a country</option>
                                <option value="Malaysia">Malaysia</option>
                                <option value="Singapore">Singapore</option>
                              </select>

                          </div>
                          <div class="form-group col-md-5" id="singapore" style="padding: 0; display: none">
                            <label for="">State (Singapore)</label>
                              <select name="" id="singapore-state" class="form-control" required>
                                <option value="" disabled="disabled" selected="selected">Choose a state</option>
                                <option>Central</option>
                                <option>East</option>
                                <option>North</option>
                                <option>South</option>
                                <option>West</option>
                              </select>
                          </div>
                          <div class="form-group col-md-5" id="malaysia" style="padding: 0; display: none">
                            <label for="">State (Malaysia)</label>
                              <select name="" id="malaysia-state" class="form-control" required>
                                <option value="" disabled="disabled" selected="selected">Choose a state</option>
                                <option>Johor</option>
                                <option>Kedah</option>
                                <option>Kelantan</option>
                                <option>Negeri Sembilan</option>
                                <option>Melaka</option>
                                <option>Pehang</option>
                                <option>Penang</option>
                                <option>Parak</option>
                                <option>Perlis</option>
                                <option>Sabah</option>
                                <option>Sarawak</option>
                                <option>Salangor</option>
                                <option>Terengganu</option>
                                <option>WP (Kuala Lampur)</option>
                                <option>WP (Labuan)</option>
                                <option>WP (Putrajaya)</option>
                              </select>

                          </div>
                        </div>
                        <div class="form-group button-group ">
                          <div class="text-right">
                            <button class="btn btn-primary btn-black" style="margin-right: 0;">Add Employer</button>
                          </div>
                        </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>


            <!-- End Container fluid  -->

  <?php include 'includes/footer.php';?>
<script>

  $(document).ready(function() {
    $(document).on('change','#country',function() {
      var country = $(this).find(':selected').val();
      if(country=="Malaysia"){
          $("#malaysia").css("display","block");
          $("#singapore").css("display","none");
      }else if(country=="Singapore"){
          $("#malaysia").css("display","none");
          $("#singapore").css("display","block");
      }
    });
  });

  </script>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <!-- Favicon icon -->
    <!-- <link rel="icon" type="image/png" sizes="16x16" href="images/favicon.png"> -->
    <title>Dashboard</title>
    <!-- Bootstrap Core CSS -->
    <link href="css/lib/bootstrap/bootstrap.min.css" rel="stylesheet">
    <!-- Custom CSS -->
    <link href="css/lib/owl.carousel.min.css" rel="stylesheet" />
    <link href="css/lib/owl.theme.default.min.css" rel="stylesheet" />
    <link href="css/helper.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
    <link rel="stylesheet" href="css/fontawesome.min.css">
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:** -->
    <!--[if lt IE 9]>
    <script src="https:**oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https:**oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->

</head>

<body class="fix-header fix-sidebar">
    <!-- Preloader - style you can find in spinners.css -->
    <div class="preloader">
        <svg class="circular" viewBox="25 25 50 50">
			<circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" /> </svg>
    </div>
    <!-- Main wrapper  -->
    <div id="main-wrapper">
        <!-- header header  -->
        <div class="header">
            <nav class="navbar top-navbar navbar-expand-md navbar-light">
                <!-- Logo -->
                <div class="navbar-header">
                    <a class="navbar-brand" href="index.php">
                        <!-- Logo icon -->
                        <!-- <b><img src="images/logo.png" alt="homepage" class="dark-logo" /></b> -->
                        <!--End Logo icon -->
                        <!-- Logo text -->
                        <span><img src="images/logo.png" alt="homepage" style="width: 50%; margin: 10px 0;" class="dark-logo" /></span>
                    </a>
                </div>
                <!-- End Logo -->
                <div class="navbar-collapse">
                    <!-- toggle and nav items -->
                    <ul class="navbar-nav mr-auto mt-md-0">
                        <!-- This is  -->
                        <li class="nav-item"> <a class="nav-link nav-toggler hidden-md-up text-muted  " href="javascript:void(0)"><i class="mdi mdi-menu"></i></a> </li>
                        <li class="nav-item m-l-10"> <a class="nav-link sidebartoggler hidden-sm-down text-muted  " href="javascript:void(0)"><i class="ti-menu"></i></a> </li>
                        <!-- End Messages -->
                    </ul>
                    <!-- User profile and search -->
                    <ul class="navbar-nav my-lg-0">
                        <!-- Profile -->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-muted  " href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="images/users/5.jpg" alt="user" class="profile-pic" /></a>
                            <div class="dropdown-menu dropdown-menu-right animated zoomIn">
                                <ul class="dropdown-user">
                                    <li><a href="#"><i class="ti-user"></i> Profile</a></li>
                                    <li><a href="login.php"><i class="fa fa-power-off"></i> Logout</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <!-- End header header -->
        <!-- Left Sidebar  -->
        <div class="left-sidebar">
            <!-- Sidebar scroll-->
            <div class="scroll-sidebar">
                <!-- Sidebar navigation-->
                <nav class="sidebar-nav">
                    <ul id="sidebarnav">
                        <!-- <li class="nav-devider"></li> -->
                        <!-- <li class="nav-label">Home</li> -->
                        <li> <a class="" href="index.php"><i class="fa fa-tachometer"></i><span class="hide-menu">Dashboard</span></a>
                        </li>
                        <li> <a class="has-arrow  " href="#" aria-expanded="false"><i class="fa fa-user"></i><span class="hide-menu">Manage Employer</span></a>
                            <ul aria-expanded="false" class="collapse">
                                <li><a href="add-employer.php">Add Employer</a></li>
                                <li><a href="view-employer.php">View Employer</a></li>
                            </ul>
                        </li>
                        <li> <a class="" href="manage-jobseeker.php"><i class="fa fa-user"></i><span class="hide-menu">Manage Jobseekers</span></a>
                        </li>
                        <li> <a class="has-arrow  " href="#" aria-expanded="false"><i class="fa fa-money"></i><span class="hide-menu">Manage Credits</span></a>
                            <ul aria-expanded="false" class="collapse">
                                <li><a href="add-credit.php">Add Credits</a></li>
                                <li><a href="credit-hiring.php">Hiring Jobseeker</a></li>
                                <li><a href="credit-accepting.php">Accepting Offer</a></li>
                                <li> <a class="has-arrow  " href="#" aria-expanded="false"><span class="hide-menu">Rates</span></a>
                                    <ul aria-expanded="false" class="collapse">
                                        <li><a href="add.php">Add</a></li>
                                        <li><a href="view-all.php">View All</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
            						<li> <a class="" href="manage-notification.php"><i class="fa fa-bell"></i><span class="hide-menu">Manage Notifications</span></a>
                        </li>
                        <li> <a class="has-arrow  " href="#" aria-expanded="false"><i class="fa fa-star"></i><span class="hide-menu">Manage Promos</span></a>
                            <ul aria-expanded="false" class="collapse">
                                <li><a href="promos-add.php">Add</a></li>
                                <li><a href="promos-view.php">View All</a></li>
                            </ul>
                        </li>
                        <li> <a class="has-arrow  " href="#" aria-expanded="false"><i class="fa fa-cog"></i><span class="hide-menu">Setting</span></a>
                            <ul aria-expanded="false" class="collapse">
                                <li><a href="gst.php">GST</a></li>
                                <li><a href="membership.php">Membership Fee</a></li>
                            </ul>
                        </li>
                        <li> <a class="" href="login.php"><i class="fa fa-power-off"></i><span class="hide-menu">Logout</span></a>
                        </li>
                    </ul>
                </nav>
                <!-- End Sidebar navigation -->
            </div>
            <!-- End Sidebar scroll-->
        </div>
        <!-- End Left Sidebar  -->

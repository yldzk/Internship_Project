<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Hublog 5651 </title>

    <!-- Bootstrap -->
    <link href="Content/vendors/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="Content/vendors/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <!-- NProgress -->
    <link href="Content/vendors/nprogress/nprogress.css" rel="stylesheet">
    <!-- Animate.css -->
    <link href="Content/vendors/animate.css/animate.min.css" rel="stylesheet">

    <!-- Custom Theme Style -->
    <link href="Content/build/css/custom.min.css" rel="stylesheet">
</head>

<body class="login">
    <div>
        <a class="hiddenanchor" id="signup"></a>
        <a class="hiddenanchor" id="signin"></a>

        <div class="login_wrapper">
            <div class="animate form login_form">
                <section class="login_content">
                    <img src="Content/images/hublog-logo.png" width="100%" />
                    <form class="user" action="Common/login.php" method="POST" name="loginForm" novalidate>
                        <h1>Login Form</h1>
                        <div class="form-group mb-4">
                            <input type="text" class="form-control form-control-user" name="username" aria-describedby="emailHelp" placeholder="Enter User Name" autocomplete="off">
                        </div>
                        <div class="form-group mb-4">
                            <input type="password" class="form-control form-control-user" name="password" placeholder="Enter Password">
                        </div>
                        <button type="submit" class="submit-button btn btn-block btn-info my-4 mx-auto" aria-label="LOG IN">
                            LOG IN
                        </button>
                        <hr>
                    </form>
                </section>
            </div>

            
        </div>
    </div>
</body>

</html>
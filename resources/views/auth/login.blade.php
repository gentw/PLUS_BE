<!DOCTYPE html>
<html class="loading" lang="en" data-textdirection="ltr">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    <meta name="description" content="Bluesky app">
    <meta name="keywords" content="Bluesky">
    <title>Bluesky app</title>
   

    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500;1,600" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="./app-assets/vendors/css/vendors.min.css">
    <link rel="stylesheet" type="text/css" href="./app-assets/css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="./app-assets/css/bootstrap-extended.css">
    <link rel="stylesheet" type="text/css" href="./app-assets/css/colors.css">
    <link rel="stylesheet" type="text/css" href="./app-assets/css/components.css">
    
    <link rel="stylesheet" type="text/css" href="./app-assets/css/plugins/forms/form-validation.css">
    <link rel="stylesheet" type="text/css" href="./app-assets/css/pages/authentication.css">

</head>

<body class="vertical-layout vertical-menu-modern blank-page navbar-floating footer-static  " data-open="click" data-menu="vertical-menu-modern" data-col="blank-page">
    <div class="app-content content ">
        <div class="content-overlay"></div>
        <div class="header-navbar-shadow"></div>
        <div class="content-wrapper">
            <div class="content-header row">
            </div>
            <div class="content-body">
                <div class="auth-wrapper auth-basic px-2">
                    <div class="auth-inner my-2">
                        <!-- Login basic -->
                        <div class="card mb-0">
                            <div class="card-body">
                                <a href="/" class="brand-logo">
                                    <h3>PLUS</h3>
                                </a>
                                <h4 class="card-title mb-1">PLUS</h4>
                                <p class="card-text mb-2">Kyqu ne llogarine tuaj te PLUS</p>
                                <form class="auth-login-form mt-2" method="POST" action="{{ route('login') }}">
                                    @csrf
                                    <div class="mb-1">
                                        <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus placeholder="email@example.com">
                                        @error('email')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>
                                    <div class="mb-1">
                                        <div class="input-group input-group-merge form-password-toggle">
                                            <input id="password" type="password" class="form-control form-control-merge @error('password') is-invalid @enderror" name="password" placeholder="********" required autocomplete="current-password">
                                            @error('password')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                            @enderror
                                        </div>
                                    </div>
                                    <button class="btn btn-primary w-100" tabindex="4">Kyqu</button>
                                
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="./app-assets/vendors/js/vendors.min.js"></script>
    <script>
        //  $('#login-form').submit(function(event) {
        //     var email = $('#email').val();
        //     var password = $('#password').val();
        //     $.ajax({
        //         url: '/api/loginApi',
        //         type: 'POST',
        //         data: {
        //             email: email,
        //             password: password
        //         },
        //         success: function(response) {
        //             localStorage.setItem('access_token', response.access_token);                
        //         },
        //         error: function(error) {
        //             console.log(error);
        //         }
        //     });
        // });
    </script>
    <script src="./app-assets/vendors/js/forms/validation/jquery.validate.min.js"></script>
    <script src="./app-assets/js/core/app-menu.js"></script>
    <script src="./app-assets/js/core/app.js"></script>
    <script src="./app-assets/js/scripts/pages/auth-login.js"></script>


    <script>
       
        $(window).on('load', function() {
            if (feather) {
                feather.replace({
                    width: 14,
                    height: 14
                });
            }
        })
    </script>
</body>

</html>
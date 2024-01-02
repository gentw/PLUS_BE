<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <meta name="csrf-token" content="{{ csrf_token() }}">

  <title>Bluesky App</title>


  <link rel="stylesheet" type="text/css" href="{{ asset(mix('css/loader.css')) }}" />


  <link rel="stylesheet" href="{{ asset(mix('css/core.css')) }}">


  <link rel="shortcut icon" href="{{ asset('/img/logo_bs.svg') }}">


  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap"
    rel="stylesheet">

    @if (Auth::check())
      <script>window.user_name = "{{ Auth::user()->name}}"</script>
      <script>window.user_email = "{{ Auth::user()->email}}"</script>
      <script>window.user_role = "{{ Auth::user()->role}}"</script>
      <script>window.logoutRoute = "/logout"</script>
    @endif
</head>

<body>
  <noscript>
    <strong>We're sorry but Bluesky doesn't work properly without
      JavaScript enabled. Please enable it to continue.</strong>
  </noscript>
  <div id="loading-bg">
    <div class="loading">
      <div class="effect-1 effects"></div>
      <div class="effect-2 effects"></div>
      <div class="effect-3 effects"></div>
    </div>
  </div>
  <div id="app">
  </div>

  <script src="{{ asset(mix('js/app.js')) }}"></script>

</body>

</html>

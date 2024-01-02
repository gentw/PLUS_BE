<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Bluesky fatura {{$sale->id}}</title>

    <!-- Scripts -->
    
    
    


    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/jquery-ui-timepicker-addon/1.4.5/jquery-ui-timepicker-addon.min.css"/>
      <link rel="stylesheet"
      href="https://code.jquery.com/ui/1.11.3/themes/smoothness/jquery-ui.css">
<link rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.5.0/css/bootstrap-datepicker.standalone.min.css"/>
      <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.47/css/bootstrap-datetimepicker.min.css">
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  
    <link href="{{ asset('css/invoice.css') }}" rel="stylesheet">
    <style type="text/css">
    body{background:#fff;}
    p {font-size: 18px; font-family: Arial;}
    .value{margin: 20px; position: absolute; left:0; margin-top: 0px; margin-left: 200px;} 
    .total_value { margin: 20px; position: absolute; left:0; margin-top: 0px; margin-left: 240px; }
    .hr { border: 1px solid #000; width: 400px;}
    .details-top {position:absolute; }
    .details-fatura { margin-top: 100px; }
    .tabela {margin-top: 50px;}
    .totali { left: 50px; }
    .total_1 {border-bottom: 1px solid #000000;}
    .total_2 {border-bottom: 2px solid #000000;}
    form {font-size: 18px;}
    .price_input {width:70px; border:none; height: 20px; font-weight: bold;}
    .tab2 p {
      font-size: 15px !important;
    }
    
</style>

</head>
<body>
	
	<div class="container">    
    <div class="row" style="margin-top: 20px">
	<div class="col-md-6">
		<img width="200" src="/img/logo_bs.svg">
	</div>
	<div class="col-md-6 d-flex align-items-end flex-column">
		<p class="details-top">
			<strong>BLUESKY TRAVEL SH.P.K</strong><br>
			Bardhyl Qaushi p.n<br>
			+383 49 820 080<br>
			blueskytravel.gjakove@gmail.com<br><br>
			<b>Nr. fiskal:</b><br>   811995804<br><br><br>

            <b>Bleresi:</b> <br>
			{{$sale->client->name}}
		</p>


	</div>


	<div class="col-md-6">
		<p class="details-fatura">
			Nr fatures: <span class="value">{{$sale->id}}</span><br>
			Data Fatures: <span class="value">{{$sale->updated_at}}</span><br>
			<br><br>
			<br><br>
			





		</p>
	</div>
	<div class="col-md-6 d-flex align-items-end flex-column">
		
	</div>
</div>

<div class="row tabela">
	<div class="col-md-12">
	<h2>Fatura</h2>

	<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Kodi</th>
      <th scope="col">Pershkrimi produktit</th>
      <th scope="col">Sasia</th>
      <th scope="col">Cmimi</th>
    </tr>
  </thead>
  <tbody>
  	
    <tr>
      <th scope="row">1</th>
      <td>KD000{{$sale->id}}00</td>
      <td>{{$sale->service->name}}</td>
      <td>1</td>
      <td>{{$sale->sold_price}} {{$sale->main_currency}}</td>
    </tr>
    
   
  </tbody>
</table>
</div>
</div>

<div class="row tabela" style="margin-top: 200px;">


<div class="totali" style="position: relative; width:50%; position:relative; margin-left: 500px;">
<div>
<!-- <p class="total_1" style="">Cmimi total (pa TVSH): <span class="total_value" style="position:relative;">55 EURO </span></p> -->
<p class="total_2">Paguar permes <span class="total_value">{{$sale->payment_method}}</span><br>
<strong>Total: <span class="total_value">{{$sale->sold_price}} {{$sale->main_currency}}</span></strong>

</p>
</div>
</div>

</div>

<div class="tabela tab2" style="margin-top: 100px; display:flex; justify-content: space-around;">
  <div class="col">
    <p>
    <span style="border-bottom: 2px dotted #000; padding-bottom: 5px; margin-bottom: 20px; font-weight: bold">Pagesat nga jasht Kosoves</span><br><br>
  
  Raiffeisenbank<br>
  BLUE SKY TRAVEL SH.P.K<br><br>

  RaiffeisenBank<br><br>
  nr i kontos:<br>

  XK051505001006833736<br>
  -----------------------------<br>
  Adresa: (Rruga: Bardhyl Qaushi) 50000 Gjakovë
</p>
  </div>

  <div class="col">
    <p>
    <span style="border-bottom: 2px dotted #000; padding-bottom: 5px; margin-bottom: 20px; font-weight: bold">Pagesat brenda Kosoves</span><br><br>
BLUE SKY TRAVEL SH.P.K<br><br><br>

RaiffeisenBank<br><br>
nr i kontos:<br>
1505001006833736<br>
-----------------------------<br>
Adresa: (Rruga: Bardhyl Qaushi) 50000 Gjakovë
</p>
  </div>
  <div class="col">
    <p>
    <span style="border-bottom: 2px dotted #000; padding-bottom: 5px; margin-bottom: 20px; font-weight: bold">Kontoja ne NLB Bank</span><br><br>
BLUE SKY TRAVEL SH.P.K.<br><br>

Kontoja per pagesa ne euro: 1704017400691451 EUR<br><br>

Kontoja per pagesa ne franga: 1704017400691451 CHF
    </p>
  </div>
</div>


  	</div>

    

    <script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
  	
   
</body>
</html>

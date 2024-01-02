/*=========================================================================================
    File Name: form-wizard.js
    Description: wizard steps page specific js
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy  - Vuejs, HTML & Laravel Admin Dashboard Template
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

$(function () {
  'use strict';

  var bsStepper = document.querySelectorAll('.bs-stepper'),
    select = $('.select2'),
    horizontalWizard = document.querySelector('.horizontal-wizard-example'),
    customWizard = document.querySelector('.customWizard'),
    verticalWizard = document.querySelector('.vertical-wizard-example'),
    modernWizard = document.querySelector('.modern-wizard-example'),
    modernVerticalWizard = document.querySelector('.modern-vertical-wizard-example');

  // Adds crossed class
  if (typeof bsStepper !== undefined && bsStepper !== null) {
    for (var el = 0; el < bsStepper.length; ++el) {
      bsStepper[el].addEventListener('show.bs-stepper', function (event) {
        var index = event.detail.indexStep;
        var numberOfSteps = $(event.target).find('.step').length - 1;
        var line = $(event.target).find('.step');

        // The first for loop is for increasing the steps,
        // the second is for turning them off when going back
        // and the third with the if statement because the last line
        // can't seem to turn off when I press the first item. ¯\_(ツ)_/¯

        for (var i = 0; i < index; i++) {
          line[i].classList.add('crossed');

          for (var j = index; j < numberOfSteps; j++) {
            line[j].classList.remove('crossed');
          }
        }
        if (event.detail.to == 0) {
          for (var k = index; k < numberOfSteps; k++) {
            line[k].classList.remove('crossed');
          }
          line[0].classList.remove('crossed');
        }
      });
    }
  }

  // select2
  select.each(function () {
    var $this = $(this);
    $this.wrap('<div class="position-relative"></div>');
    $this.select2({
      placeholder: 'Select value',
      dropdownParent: $this.parent()
    });
  });




















  // Horizontal Wizard
  // --------------------------------------------------------------------
  if (typeof horizontalWizard !== undefined && horizontalWizard !== null) {
    var numberedStepper = new Stepper(horizontalWizard),
      $form = $(horizontalWizard).find('.forms');





    $form.each(function () {
      var $this = $(this);
      $this.validate({
        rules: {
          username: {
            required: true
          },
          email: {
            required: true
          },
          password: {
            required: true
          },
          'confirm-password': {
            required: true,
            equalTo: '#password'
          },
          'first-name': {
            required: true
          },

          address: {
            required: true
          },
          landmark: {
            required: true
          },
          country: {
            required: true
          },
          language: {
            required: true
          },
          twitter: {
            required: true,
            url: true
          },
          facebook: {
            required: true,
            url: true
          },
          google: {
            required: true,
            url: true
          },
          linkedin: {
            required: true,
            url: true
          }
        }
      });
    });

    $(horizontalWizard)
      .find('.btn-next')
      .each(function () {
        $(this).on('click', function (e) {
          var isValid = $(this).parent().siblings('.forms').valid();
          if (isValid) {
            numberedStepper.next();
          } else {
            e.preventDefault();
          }
        });
      });

    $(horizontalWizard)
      .find('.btn-prev')
      .on('click', function () {
        numberedStepper.previous();
      });

    $(horizontalWizard)
      .find('.btn-submit')
      .on('click', function () {
        var isValid = $(this).parent().siblings('.forms').valid();
        if (isValid) {
          alert('Submitted..!!');
        }
      });
  }

  // Vertical Wizard
  // --------------------------------------------------------------------
  if (typeof verticalWizard !== undefined && verticalWizard !== null) {
    var verticalStepper = new Stepper(verticalWizard, {
      linear: true
    });


    $(verticalWizard)
      .find('.next1')
      .on('click', function (e) {

        if(!$('#firstname').val()){
          $("#firstname").focus();
          $("#firstname").css("border-color", "#ff0000");
          e.preventDefault();
        }else if(!$('#email').val()){
          $("#email").focus();
          $("#email").css("border-color", "#ff0000");
          e.preventDefault();
        }else{
          verticalStepper.next();
        }

      });



    $(verticalWizard)
      .find('.next2')
      .on('click', function (e) {

        if(!$('#password').val()){
          $("#password").focus();
          $("#password").css("border-color", "#ff0000");
          e.preventDefault();
        }else if(!$('#confirm-password').val()){
          $("#confirm-password").focus();
          $("#confirm-password").css("border-color", "#ff0000");
          e.preventDefault();
        }else if($('#password').val() != $('#confirm-password').val()){
          $("#password").focus();
          $("#confirm-password").css("border-color", "#ff0000");
          $("#password").css("border-color", "#ff0000");
          e.preventDefault();
        }else{
          verticalStepper.next();
        }

      });









      $("#firstname").keyup(function(){
          if(this.value.length > 0){
            $("#firstname").css("border-color", "#1eb314");
          }else{
            $("#firstname").css("border-color", "#ff0000");
          }
      });


      $("#email").keyup(function(){
          if(this.value.length > 0){
            $("#email").css("border-color", "#1eb314");
          }else{
            $("#email").css("border-color", "#ff0000");
          }
      });

      $("#password").keyup(function(){
          if(this.value.length > 0){
            $("#password").css("border-color", "#1eb314");
          }else{
            $("#password").css("border-color", "#ff0000");
          }
      });

      $("#password").keyup(function(){
          if(this.value.length > 0){
            $("#password").css("border-color", "#1eb314");
          }else{
            $("#password").css("border-color", "#ff0000");
          }
      });

      $("#confirm-password").keyup(function(){
          if(this.value.length > 0){
            $("#confirm-password").css("border-color", "#1eb314");
          }else{
            $("#confirm-password").css("border-color", "#ff0000");
          }
      });


      $("#address").keyup(function(){
          if(this.value.length > 0){
            $("#address").css("border-color", "#1eb314");
          }else{
            $("#address").css("border-color", "#ff0000");
          }
      });


      $("#contry").keyup(function(){
          if(this.value.length > 0){
            $("#contry").css("border-color", "#1eb314");
          }else{
            $("#contry").css("border-color", "#ff0000");
          }
      });






    $(verticalWizard)
      .find('.btn-prev')
      .on('click', function () {
        verticalStepper.previous();
      });



   
  }

  // Modern Wizard
  // --------------------------------------------------------------------
  if (typeof modernWizard !== undefined && modernWizard !== null) {
    var modernStepper = new Stepper(modernWizard, {
      linear: false
    });
    $(modernWizard)
      .find('.btn-next')
      .on('click', function () {
        modernStepper.next();
      });
    $(modernWizard)
      .find('.btn-prev')
      .on('click', function () {
        modernStepper.previous();
      });

    $(modernWizard)
      .find('.btn-submit')
      .on('click', function () {
        alert('Submitted..!!');
      });
  }

  // Modern Vertical Wizard
  // --------------------------------------------------------------------
  if (typeof modernVerticalWizard !== undefined && modernVerticalWizard !== null) {
    var modernVerticalStepper = new Stepper(modernVerticalWizard, {
      linear: false
    });
    $(modernVerticalWizard)
      .find('.btn-next')
      .on('click', function () {
        modernVerticalStepper.next();
      });
    $(modernVerticalWizard)
      .find('.btn-prev')
      .on('click', function () {
        modernVerticalStepper.previous();
      });

    $(modernVerticalWizard)
      .find('.btn-submit')
      .on('click', function () {
        alert('Submitted..!!');
      });
  }
});

$(function () {
  function showPop(i) {
    $('.mask').eq(i).show();
  }
  $('.closed').click(function () {
    $('.mask').hide();
  });

  // 04-课程终端-详情页-4
  $('.get').click(function () {
    showPop(0);
  })

  // 08-立即报名-地址下拉
  $('.fix').click(function () {

    showPop(0);

    // 修改地址弹窗
    $('.sel-label-box input').click(function (e) {
      $('.sel-label-box .sel-label').toggleClass('show');
      $('.sel-label-box .sel-box').toggleClass('show');
      console.log('1')
    });
    $('.modify-address .sel p').on('click', function () {
      $(this).parent('.sel').addClass('cur').siblings().removeClass('cur');
    });
    $('.modify-address li').on('click', function () {
      $(this).addClass('cur').siblings().removeClass('cur');
      $('.modify-address .sel-label input').val(getAddress());
    });

    function getAddress() {
      var province, city, area, street;
      province = $('.modify-address').find('.province li.cur').text();
      city = $('.modify-address').find('.city li.cur').text();
      area = $('.modify-address').find('.area li.cur').text();
      street = $('.modify-address').find('.street li.cur').text();
      return province + ' ' + city + ' ' + area + ' ' + street;
    };
    $('.modify-address .check input').click(function (event) {
      $(this).parent('.check').toggleClass('choice');
    });
  })



  // 09-微信支付
  $('.now-pay').click(function () {
    var i = 2; // 2: 微信，3: 支付宝
    showPop(3);
  })

  // 09-购买协议
  $('.protocol').click(function () {
    showPop(4);
  })

  // 10-签订协议步骤弹窗
  $('.xy-mask .step-1 .agree').click(function (event) {
    $(this).toggleClass('choice');
  });
  $('.xy-mask .step-1 .popup-link').click(function (event) {
    if ($('.step-1 .agree').hasClass('choice')) {
      $('.xy-mask .zg-popup').hide();
      $('.xy-mask .step-2').show();
    }
  });
  $('.xy-mask .step-2 .popup-link').click(function (event) {
    $('.xy-mask .zg-popup').hide();
    $('.xy-mask .step-3').show();
  });


  // 11-直播-回放
  $('.live-playback').click(function () {
    showPop(0);
  })

  // 11-直播-预约直播
  $('.row-yy').click(function () {
    showPop(1);
  })

  // 13-题库-开始做题
  $('.do-topic').click(function () {
    showPop(0);
  })

  // 19-每日一练终端-1
  $('.btn-pause').click(function () {
    showPop(0);
  })

  // 19-每日一练终端-2
  $('.btn-submit').click(function () {
    showPop(1);
  })

  // 19-每日一练终端-3
  $('.btn-submit').click(function () {
    showPop(2);
  })
});

// 显示弹窗
function showPop(i) {
  $('.mask').eq(i).show();
}

// 关闭弹窗
$('.closed').click(function () {
  $('.mask').hide();
});

// 鼠标点击
// contBox: 内容盒子,
function mouseClick(headBox, contBox, className) {
  $(headBox).each(function (i) {
    var that = this;
    $(that).click(function () {
      $(that).addClass(className).siblings().removeClass(className);
      $($(contBox)[i]).addClass(className).siblings().removeClass(className);
    })
  })
}

// 鼠标移入
  // contBox: 内容盒子,
  function mouseEnter(headBox, contBox, className) {
    $(headBox).each(function (i) {
      var that = this;
      $(that).mouseenter(function () {
        $(that).addClass(className).siblings().removeClass(className);
        $($(contBox)[i]).addClass(className).siblings().removeClass(className);
      })
    })
  }

// DOM（不包含图片）加载完之后执行
$(function () {
  theaMsForm($('.sign-in'));

  // 首页和频道页的类别
  function classHeightChange(outerEle, parentEle, itemEle){

    var itemLen = $(parentEle).find(itemEle).length;

    if(itemLen == 5){
      $(parentEle).find(itemEle).width('20%');
    }
    if(itemLen == 6){
      $(parentEle).find(itemEle).width('16.66%');
    }

    if(itemLen >= 7){
      $(parentEle).find(itemEle).width('16.66%');
      $(outerEle).height($(outerEle).height() * 2);
      $(parentEle).css({
        'background': 'transparent'
      })
      $(itemEle).css({
        'background': '#fff',
        'borderRadius': '4px',
        'marginBottom': '10px'
      })
    }
  }
  classHeightChange('.bw-class', '.class-cont', '.c-item');
  
  // 关闭区块
  function closeHandle(closeBtn, closeBox) {
    $(closeBtn).click(function () {
      $(closeBox).hide();
    })
  }
  // 首页 正在直播
  closeHandle($('.bw-live .live-close'), $('.bw-live'));

  // 切换 类
  // aimEle: 目标元素，className: 类名
  function switchClass(aimEle, className) {
    $(aimEle).toggleClass(className);
  }

  // 展开与收起
  // outerBox: 最外层盒子，headBox: 头部盒子
  function unfold(outerBox, headBox, className) {
    $(outerBox).each(function () {
      var that = this;
      $(that).find(headBox).click(function () {
        switchClass(that, className);
      })
    })
  }
  unfold('.menu-list .list-item', '.i-head', 'unfold');
  unfold('.menu-list .i-detail', '.d-head', 'on');
  // 课程终端 优惠券领取
  unfold('.r-price .p-ticket', '.h-btn', 'on');
  // 课程终端 选择课程
  unfold('.t-right .c-detail', '.d-btn', 'on');

  // 课程终端 试听单元
  unfold('.d-listen li', '.l-head', 'on');
  // 每日一练终端 收藏i
  unfold('.zt-collect', 'i', 'on');

  
  // 首页 右侧tab
  mouseEnter('.sc-l li', '.r-detail .d-item', 'on');
  // 课程终端 左侧tab
  mouseEnter('.tab-head li', '.tab-body .bd-item', 'on');
  // 免费试听
  mouseEnter('.l-catalog .g-item', null, 'on');
  
  // 每日一练 扫一扫
  mouseEnter('.sys .sys-item', '.sp .sp-item', 'on');

  // 首页 类别
  mouseClick('.class-cont .c-item', null, 'on');
  // 订单中心 支付方式
  mouseClick('.p-detail li', null, 'on');
});
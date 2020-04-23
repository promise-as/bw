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

// DOM（不包含图片）加载完之后执行
$(function () {
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
  // 课程终端 选择课程 具体课程按钮
  // unfold('.c-detail .c-detail', 'li', 'on');

  // 课程终端 试听单元
  unfold('.d-listen li', '.l-head', 'on');
  // 每日一练终端 收藏i
  unfold('.zt-collect', 'i', 'on');

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
  // 首页 右侧tab
  mouseEnter('.sc-l li', '.r-detail .d-item', 'on');
  // 课程终端 左侧tab
  mouseEnter('.tab-head li', '.tab-body .bd-item', 'on');
  // 免费试听
  mouseEnter('.l-catalog .g-item', null, 'on');
  // 订单中心 地址修改
  mouseEnter('.a-all .a-bar', null, 'on');
  // 每日一练 扫一扫
  mouseEnter('.sys .sys-item', '.sp .sp-item', 'on');

  // 首页 类别
  mouseClick('.class-cont .c-item', null, 'on');
  // 订单中心 支付方式
  mouseClick('.p-detail li', null, 'on');
});
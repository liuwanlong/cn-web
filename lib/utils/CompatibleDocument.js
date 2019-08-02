const CompatibleDocument = {
  getScrollHeight() {
    //文档实际高度
    return Math.max((document.body ? document.body.scrollHeight : 0), (document.documentElement ? document.documentElement.scrollHeight : 0));
  },
  getWindowHeight() {
    //视口实际高度
    return document.compatMode == "CSS1Compat" ? document.documentElement.clientHeight : document.body.clientHeight;
  },
  getDocumentTop() {
    //滚动条高度
    return Math.max((document.body ? document.body.scrollTop : 0), (document.documentElement ? document.documentElement.scrollTop : 0));
  },
  scrollToTop: function (top) {
    window.scrollTo(0, top);
  },
  platform() {
    let platform = 'pc';
    let agent = navigator.userAgent.toLowerCase();
    let keywords = ['android', 'iphone', 'ipod', 'ipad', 'windows phone', 'mqqbrowser'];

    //排除 Windows 桌面系统
    if (!(agent.indexOf('windows nt') > -1) || (agent.indexOf('windows nt') > -1 && agent.indexOf('compatible; msie 9.0;') > -1)) {
      //排除苹果桌面系统
      if (!(agent.indexOf('windows nt') > -1) && !agent.indexOf('macintosh') > -1) {
        for (let item of keywords) {
          if (agent.indexOf(item) > -1) {
            platform = item;
            break;
          }
        }
      }
    }
    return platform;
  }
};

export default CompatibleDocument;
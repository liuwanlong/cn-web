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
};

export default CompatibleDocument;
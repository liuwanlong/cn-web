const CompatibleDocument = {
  scrollTop: function () {
    return document.documentElement.scrollTop || document.body.scrollTop;
  },
  clientHeight: function () {
    return document.documentElement.clientHeight || document.body.clientHeight;
  },
  scrollToTop: function (top) {
    window.scrollTo(0, top);
  },
  scrollHeight: function () {
    let documentScrollHeight = document.documentElement.scrollHeight;
    let bodyScrollHeight = document.body.scrollHeight;
    return bodyScrollHeight - documentScrollHeight > 0 ? bodyScrollHeight : documentScrollHeight;
  }
};

export default CompatibleDocument;
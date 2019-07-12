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
  scrollHeight: function(){
    return document.documentElement.scrollHeight
  }
};

export default CompatibleDocument;
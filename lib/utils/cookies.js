function getCookieFromStr(cname, ca) {
  let name = cname + "=";
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return null;
}

/**
 * 获取cookie
 */

function getCookie(cname) {
  let value = getCookieFromStr(cname, document.cookie.split(';'));
  return value;
}

/**
 * 设置cookie
 */
function setCookie(cname, cvalue, exdays = 30, domain) {
  let d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  if (domain) {
    document.cookie = cname + "=" + cvalue + "; " + expires + ";path=/;" + "domain=" + domain + ";";
  } else {
    document.cookie = cname + "=" + cvalue + "; " + expires + ";path=/;";
  }
};

/**
 *  删除cookie
 */
function delCookie(name) {
  let exp = new Date();
  exp.setTime(exp.getTime() - 1);
  let cval = getCookie(name);
  if (cval != null) {
    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString() + ";path=/;";
  }
};

export {
  getCookie,
  setCookie,
  delCookie,
  getCookieFromStr
};
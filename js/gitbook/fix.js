elems = document.getElementsByClassName("_hs5eseb")
for (var i = 0; i < elems.length; i++) {
  elems[i].style.width = '64px';
  elems[i].style.height = '64px';
}

document.onscroll = function (element) {
  var leftSidebar = document.querySelector('div[class*="contentNavigation"]')[0];
  var rightSidebar = document.querySelector('div[class*="pageSide"]')[0];
  if (document.scrollingElement.scrollTop >= 80) {
    if (leftSidebar) {
      leftSidebar.style.position = 'fixed';
      leftSidebar.style.width = '297px';
    }
    if (rightSidebar) {
      rightSidebar.style.position = 'fixed';
      rightSidebar.style.width = '224px';
    }
  } else {
    if (leftSidebar) {
      leftSidebar.style.position = 'relative';
      leftSidebar.style.width = 'auto';
    }
    if (rightSidebar) {
      rightSidebar.style.position = 'relative';
      rightSidebar.style.width = 'auto';
    }
  }
}

var container = document.querySelector('div[class*="pageBody"]');
var h1s = container.querySelectorAll('h1');
var h2s = container.querySelectorAll('h2');
for (var i = 0; i < h1s.length; i++) {
  h1s[i].onmouseenter = function (event) {
    var target = event.currentTarget;
    var link = target.querySelector('a');
    link.style.opacity = '1';
  }
  h1s[i].onmouseleave = function (event) {
    var target = event.currentTarget;
    var link = target.querySelector('a');
    link.style.opacity = '0';
  }
}
for (var i = 0; i < h2s.length; i++) {
  h2s[i].onmouseenter = function (event) {
    var target = event.currentTarget;
    var link = target.querySelector('a');
    link.style.opacity = '1';
  }
  h2s[i].onmouseleave = function (event) {
    var target = event.currentTarget;
    var link = target.querySelector('a');
    link.style.opacity = '0';
  }
}

var codeContainers = document.querySelectorAll('div[class*="codeBlockWrapper"]');
for (var i = 0; i < codeContainers.length; i++){
  var codeContainer = codeContainers[i];
  codeContainer.firstElementChild.onclick = function (event) {
    var target = event.currentTarget;
    var container = target.parentElement;
    var code = container.lastElementChild.innerText;
    var textArea = document.createElement('textarea');
    textArea.textContent = code;
    textArea.style.position = 'absolute';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  }
}

var apiContainers = document.querySelectorAll('div[class*="blockApiMethodSpec"]');
for (var i = 0; i < apiContainers.length; i++) {
  var apiContainer = apiContainers[i];
  apiContainer.firstElementChild.onclick = function (event) {
    var target = event.currentTarget;
    var container = target.parentElement;
    var requestTab = container.firstElementChild;
    var responseTab = container.lastElementChild;
    var requestContainer = container.parentElement.firstElementChild.nextElementSibling;
    var responseContainer = container.parentElement.lastElementChild;
    requestTab.style.backgroundColor = '#ffffff';
    requestTab.style.borderBottomColor = '#ffffff';
    responseTab.style.backgroundColor = '#F5F7F9';
    responseTab.style.borderBottomColor = '#F5F7F9';
    requestContainer.style.display = 'block';
    responseContainer.style.display = 'none';
  }
  apiContainer.lastElementChild.onclick = function (event) {
    var target = event.currentTarget;
    var container = target.parentElement;
    var requestTab = container.firstElementChild;
    var responseTab = container.lastElementChild;
    var requestContainer = container.parentElement.firstElementChild.nextElementSibling;
    var responseContainer = container.parentElement.lastElementChild;
    requestTab.style.backgroundColor = '#F5F7F9';
    requestTab.style.borderBottomColor = '#F5F7F9';
    responseTab.style.backgroundColor = '#ffffff';
    responseTab.style.borderBottomColor = '#ffffff';
    requestContainer.style.display = 'none';
    responseContainer.style.display = 'block';
  }
}

// TODO
var tabContainers = document.querySelectorAll('div[class*="tabsHeaderContent"]');
for (var i = 0; i < tabContainers.length; i++) {
  var tabContainer = tabContainers[i];
  if (tabContainer.childNodes.length == 3) {
    tabContainer.childNodes[0].onclick = function (event) {
      var target = event.currentTarget;
      var container = target.parentElement;
      var responseContainer = container.parentElement.parentElement.parentElement.lastElementChild;
      container.childNodes[0].className = 'reset-3c756112--tabsItem-488dd212--tabsItemActive-7bf3ed3d--UIH300-2063425d';
      responseContainer.childNodes[0].className = 'reset-3c756112--tabItemContent-905a1220--tabItemContentActive-41e173d5';
      container.childNodes[1].className = 'reset-3c756112--tabsItem-488dd212--UIH300-2063425d';
      responseContainer.childNodes[1].className = 'reset-3c756112--tabItemContent-905a1220';
      container.childNodes[2].className = 'reset-3c756112--tabsItem-488dd212--UIH300-2063425d';
      responseContainer.childNodes[2].className = 'reset-3c756112--tabItemContent-905a1220';
    }
    tabContainer.childNodes[1].onclick = function (event) {
      var target = event.currentTarget;
      var container = target.parentElement;
      var responseContainer = container.parentElement.parentElement.parentElement.lastElementChild;
      container.childNodes[1].className = 'reset-3c756112--tabsItem-488dd212--tabsItemActive-7bf3ed3d--UIH300-2063425d';
      responseContainer.childNodes[1].className = 'reset-3c756112--tabItemContent-905a1220--tabItemContentActive-41e173d5';
      container.childNodes[0].className = 'reset-3c756112--tabsItem-488dd212--UIH300-2063425d';
      responseContainer.childNodes[0].className = 'reset-3c756112--tabItemContent-905a1220';
      container.childNodes[2].className = 'reset-3c756112--tabsItem-488dd212--UIH300-2063425d';
      responseContainer.childNodes[2].className = 'reset-3c756112--tabItemContent-905a1220';
    }
    tabContainer.childNodes[2].onclick = function (event) {
      var target = event.currentTarget;
      var container = target.parentElement;
      var responseContainer = container.parentElement.parentElement.parentElement.lastElementChild;
      container.childNodes[2].className = 'reset-3c756112--tabsItem-488dd212--tabsItemActive-7bf3ed3d--UIH300-2063425d';
      responseContainer.childNodes[2].className = 'reset-3c756112--tabItemContent-905a1220--tabItemContentActive-41e173d5';
      container.childNodes[1].className = 'reset-3c756112--tabsItem-488dd212--UIH300-2063425d';
      responseContainer.childNodes[1].className = 'reset-3c756112--tabItemContent-905a1220';
      container.childNodes[0].className = 'reset-3c756112--tabsItem-488dd212--UIH300-2063425d';
      responseContainer.childNodes[0].className = 'reset-3c756112--tabItemContent-905a1220';
    }
  } else {
    tabContainer.childNodes[0].onclick = function (event) {
      var target = event.currentTarget;
      var container = target.parentElement;
      var responseContainer = container.parentElement.parentElement.parentElement.lastElementChild;
      container.childNodes[0].className = 'reset-3c756112--tabsItem-488dd212--tabsItemActive-7bf3ed3d';
      responseContainer.childNodes[0].className = 'reset-3c756112--blockApiMethodSpecContent-905a1220--blockApiMethodSpecContentActive-41e173d5';
      container.childNodes[1].className = 'reset-3c756112--tabsItem-488dd212';
      responseContainer.childNodes[1].className = 'reset-3c756112--blockApiMethodSpecContent-905a1220';
    }
    tabContainer.childNodes[1].onclick = function (event) {
      var target = event.currentTarget;
      var container = target.parentElement;
      var responseContainer = container.parentElement.parentElement.parentElement.lastElementChild;
      container.childNodes[1].className = 'reset-3c756112--tabsItem-488dd212--tabsItemActive-7bf3ed3d';
      responseContainer.childNodes[1].className = 'reset-3c756112--blockApiMethodSpecContent-905a1220--blockApiMethodSpecContentActive-41e173d5';
      container.childNodes[0].className = 'reset-3c756112--tabsItem-488dd212';
      responseContainer.childNodes[0].className = 'reset-3c756112--blockApiMethodSpecContent-905a1220';
    }
  }
}


var rightSider = document.querySelector('div[class*="pageSide"]');
if (rightSider) {
  rightSider.setAttribute('style', 'max-height: 90vh;overflow: auto')
}

var returnTopBtnList = document.querySelectorAll('._bkzxwn');
var returnTop = function() {
  window.scrollTo(0,0);
}
if (returnTopBtnList && returnTopBtnList.length) {
  returnTopBtnList.forEach(function(btn) {
    btn.onclick = returnTop;
  })
}
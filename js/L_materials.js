    window.onload = function () {
            var oCr=document.getElementById('cr_top');
            var oBtn=oCr.getElementsByTagName('input');
            var oImg=oCr.getElementsByTagName('img');
            //alert('123');
            for (var i = 0; i < oBtn.length; i++) {
                oBtn[i].index=i;
                oBtn[i].onmouseover = function () {
                    for (var i = 0; i < oBtn.length; i++) {
                        oBtn[i].className = '';
                        oImg[i].style.display='none';
                    }
                    this.className = 'active';
                   oImg[this.index].style.display='block';
                }
            }
        }
    
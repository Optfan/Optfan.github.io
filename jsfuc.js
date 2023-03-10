function isQQAPP() {
    var isIosQQ = (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) && /\sQQ/i.test(navigator.userAgent));
    var isAndroidQQ = (/(Android)/i.test(navigator.userAgent) && /MQQBrowser/i.test(navigator.userAgent) && /\sQQ/i.test((navigator.userAgent).split('MQQBrowser')));
    console.log("isIosQQ:" + isIosQQ + "--" + "isAndroidQQ:" + isAndroidQQ);
    if (isIosQQ) {
        return 'IOS QQ'
    }
    else if (isAndroidQQ) {
        return 'Android QQ'
    }
}
const deviceType = isQQAPP()
function QQopenINbrowser() {
    var ope = document.createElement("a");
    ope.href = "googlechrome://browse?url=" + window.location.href;
    ope.click();

}
function browserTypeAlert()
{
    
    if (deviceType) {
        let container = document.querySelector('.container')
        let headalert = document.createElement("div");
        headalert.id = 'alert'
        headalert.style = 'margin-top:10px'
        headalert.className = 'alert alert-warning'
        headalert.setAttribute('role', 'alert')
        headalert.innerText = `当前环境 ${deviceType} 内置浏览器\n保存图片功能不可用\n如需保存图片，请使用其他浏览器打开`
        container.prepend(headalert)
    }
}
function ListenPICshow() {
    document.addEventListener('DOMContentLoaded', function () {
        let io = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    let wrap = entry.target;
                    let src = wrap.dataset.src;

                    iloader(src).then(data => {
                        let { blob, base64 } = data
                        console.log("loaded " + src);
                        wrap.outerHTML = `<img src='${base64}' class='show' data-src='${src}'>`;
                        let button = document.querySelector(`#illustcontainer>.col>div>img[data-src="${src}"]+div>button`)
                        if (!deviceType) {
                            button.disabled = false
                            button.className = 'btn btn-outline-primary float-end'
                        }
                    });
                    io.unobserve(wrap);

                }
            });

        });

        document.querySelectorAll('img.lazy[data-src]').forEach(function (img) {
            let src = img.dataset.src;
            img.outerHTML = `<div class='lazyImg-wrap' data-src='${src}'>
            <div class="placeholder-glow" style="height:360px;width:100%">
                <span>
                    <span class="placeholder col-12" style="height:100%;width:100%"></span>

                </span>
              </div>
        </div>`;
        });
        document.querySelectorAll('.lazyImg-wrap').forEach(function (wrap) {
            io.observe(wrap);
        });
    });
}
function getBase64ByURL(imgUrl) {
    return new Promise(resolve => {
        window.URL = window.URL || window.webkitURL;
        var xhr = new XMLHttpRequest();
        xhr.open("get", imgUrl, true);
        xhr.responseType = "blob";
        xhr.onload = function () {
            if (this.status == 200) {
                var blob = this.response;
                let oFileReader = new FileReader();
                oFileReader.onloadend = function (e) {
                    resolve({ blob, base64: e.target.result })
                };
                oFileReader.readAsDataURL(blob);
            }
        };
        xhr.send();
    });
};


function iloader(imgUrl) {
    return new Promise(resolve => {
        let image = new Image()
        window.URL = window.URL || window.webkitURL;
        var xhr = new XMLHttpRequest();
        xhr.open("get", imgUrl, true);
        xhr.responseType = "blob";
        xhr.onload = function () {
            if (this.status == 200) {
                var blob = this.response;
                let oFileReader = new FileReader();
                oFileReader.onloadend = function (e) {
                    resolve({ blob, base64: e.target.result })
                };
                oFileReader.readAsDataURL(blob);
            }
        };
        xhr.send();
    });
}
function downloadButtonClick(url) {

    let imgselect = document.querySelector(`#illustcontainer>.col>div>img[data-src="${url}"]`)
    const base = imgselect.getAttribute('src')
    var base64 = base.toString();
    let pnum = url.match(/-\d+/)
    if (pnum == null) {
        pnum = 0
    }
    else {
        pnum = pnum[0].slice(1) - 1
    }


    var imgtype = base64.slice(0, 20).match(/(png|jpeg|jpg|gif|webp)/)[0]
    if (imgtype == 'jpeg') {
        imgtype = 'jpg'
    }
    var filename = url.match(/\d+/)[0] + `_p${pnum}.${imgtype}`

    var byteCharacters = atob(
        base64.replace(/^data:image\/(png|jpeg|jpg|gif|webp);base64,/, "")
    );
    var byteNumbers = new Array(byteCharacters.length);
    for (var i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    var byteArray = new Uint8Array(byteNumbers);
    var blob = new Blob([byteArray], {
        type: undefined,
    });
    var aLink = document.createElement("a");
    aLink.download = filename;
    aLink.href = URL.createObjectURL(blob);
    aLink.click();
    window.URL.revokeObjectURL(aLink)


}

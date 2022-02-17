const url = window.location.href
// check if base url matches https://sj.uukanshu.com/
if (url.indexOf('https://sj.uukanshu.com/') === 0) {
    console.log('mobile')
    mobile()
} else {
    console.log('not mobile')
}

function cleanup(text) {

    const textBasic = text.replace(
        /[\uff01-\uff5e]/g,
        function (ch) { return String.fromCharCode(ch.charCodeAt(0) - 0xfee0); }
    )

    const removedUseless = textBasic.replaceAll('UU看书 www.uukanshu.com', '')
    const removedUseless1 = removedUseless.replaceAll('UU看書 www.uukanshu.com', '')
    const removedUseless2 = removedUseless1.replaceAll('UU看書www.uukanshu.com', '')
    const removedUseless3 = removedUseless2.replaceAll('UU看书www.uukanshu.com', '')
    const addSpace = removedUseless3.replaceAll(',', ', ')
    const addSpace1 = addSpace.replaceAll(':', ': ')
    const replaceDot = addSpace1.replaceAll('。', '.')
    return replaceDot
}

function mobile() {
    const content = document.querySelector('.bookContent').textContent
    const title = document.querySelector('h3')
    const copyButton = document.createElement("button")
    copyButton.style = 'padding: 5px;'
    copyButton.innerText = 'Copy'
    title.appendChild(copyButton)

}

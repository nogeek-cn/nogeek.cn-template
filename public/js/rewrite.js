// hostname + port
console.log('location.host:' + location.host);
console.log('location.hostname:' + location.hostname);

let HOST_LIST = ['localhost', 'scydxq.com', 'vip.scydxq.com']
if (HOST_LIST.includes(location.hostname)) {
    console.log('yes');
} else {
    // todo: 未来可以做校验，非法域名下给他做跳转到另外的页面上
    // window.location.href = 'http://scydxq.com/401'
}

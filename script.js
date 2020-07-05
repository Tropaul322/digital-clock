function time(){
    let date = new Date();
    let m = date.getMinutes();
    m = (m<10) ? "0" + date.getMinutes() : date.getMinutes();
    let s = date.getSeconds();
    s = (s<10) ? "0" + date.getSeconds() : date.getSeconds();
    let h = date.getHours();
    h = (h<10) ? "0" + date.getHours() : date.getHours();
    document.querySelector('.time').textContent = `${h}:${m}:${s}`;
    setTimeout(time, 1000)
}
time()
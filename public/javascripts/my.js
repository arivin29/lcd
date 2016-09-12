
var tinggiLayar = $(window).height();
$('body').height(tinggiLayar - 100);

var listKapalTimbang = document.getElementById('listKapalTimbang');
var kanan_layar = document.getElementById('kanan_layar');
$(listKapalTimbang).height(tinggiLayar - 200);
$(kanan_layar).height(tinggiLayar - 150);

new Optiscroll(listKapalTimbang, { forceScrollbars: false, maxTrackSize: 50, minTrackSize: 20 });
new Optiscroll(kanan_layar, { forceScrollbars: true });
// $('#listKapalTimbang').optiscroll();

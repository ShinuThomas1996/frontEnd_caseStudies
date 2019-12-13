$('nav a').on('click',function(e){
e.preventDefault();
var url=this.href;
$('nav a.current').remove('current');
$(this).addClass('current');
$('#cont').remove();
$('#co').load(url + ' #cont').hide().fadeIn('slow');
});

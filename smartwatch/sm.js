$('nav a').on('click',function(e){
e.preventDefault();
var url=this.href;
$('nav a.nw').remove('nw');
$(this).addClass('nw');
$('#mn').remove();
$('#c').load(url + '#mn');
});

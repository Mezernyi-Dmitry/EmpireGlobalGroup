var el = $('#number');
function change(v){
    var upd = +el.val()+v;
    el.val( upd>0 ? upd : 0);    
};
$('#max').on('click', function(){ change(1);}); // потом может поменяете на +-10
$('#min').on('click', function(){ change(-1);});
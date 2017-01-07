$(document).ready(function(){
//-----------------------------------------------------------------------------------------
    $("#paises").change(function(event){
  		$.get("/departamentos/"+event.target.value+"", function(response,state){
  			$("#departamentos").empty();
  			for (i = 0; i < response.length; i++) {
  				$("#departamentos").append("<option value='" + response[i].id+ "'>" + response[i].name + "</option>")
  			}
  		});
    });
//-----------------------------------------------------------------------------------------
     $("#departamentos").change(function(event){
  		$.get("/ciudades/"+event.target.value+"", function(response,state){
  			$("#ciudad").empty();
  			for (i = 0; i < response.length; i++) {
  				$("#ciudad").append("<option value='" + response[i].id+ "'>" + response[i].name + "</option>")
  			}
  		});
    });
//-----------------------------------------------------------------------------------------
  $(function()
  {
     $("#buscarP").autocomplete({
      source: "/buscar/producto",
      minLength: 1,
      select: function(event, ui) {
        $('#buscarP').val(ui.item.value);
        $('#producto_id').val(ui.item.id);
      }
    });
      $("#buscarP").click(function(){
      $("#buscarP").val("");
    });
  });
//-----------------------------------------------------------------------------------------
  $(function()
  {
     $("#buscarPInv").autocomplete({
      source: "/buscar/productoInventario",
      minLength: 1,
      select: function(event, ui) {
        $('#buscarPInv').val(ui.item.value);
        $('#producto_id').val(ui.item.id);
        $('#valor').val(ui.item.valor);
        $('#lote').val(ui.item.lote);
        $('#stock').val(ui.item.cantidad);
        $('#inventario_id').val(ui.item.inventario_id);

      }
    });
      $("#buscarPInv").click(function(){
      $("#buscarPInv").val("");
    });
  });
//-----------------------------------------------------------------------------------------
  $(function() {
     $("#buscarTercero").autocomplete({
      source: "/buscar/tercero",
      minLength: 1,
      select: function(event, ui) {
        $('#buscarTercero').val(ui.item.value);
        $('#tercero_id').val(ui.item.id);
      }
    });
     $("#buscarTercero").click(function(){
      $("#buscarTercero").val("");
    });
  });
//-----------------------------------------------------------------------------------------
  $('.btn-delete').click( function(e){
    e.preventDefault();
    var row = $(this).parents('tr');
    var id=row.data('id');
    var form = $('#form-delete');

    var url=form.attr('action').replace(':DETALLE_ID',id);
    var data=form.serialize();

    $.post(url,data, function(result){
      row.fadeOut();
      alert(result);
    }).fail(function(){
      alert('El registro no se pudo eliminar');
    });
  });
//-----------------------------------------------------------------------------------------
 $("#TxtEfectivo").change(function(event) {
    var total=$("#hdnTotal").val();
    var efectivo=$("#TxtEfectivo").val();
     var efectivoN=Number(efectivo.replace(/[^0-9\.]+/g,""));
    $('#LblCambio').val((efectivoN-total)*100);
 });
 //---------------------------------------------------------------------------------------
 $(function() {
    $('.currency').maskMoney({thousands:',', decimal:'.', allowZero:true, prefix: '$ '});
  })
});
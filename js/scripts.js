$('document').on('ready',function(){
  load();
  var code = $('#code');
  var html = $('#result');
  $('#save').on('click',function(){
    var htmleditable = code.text();
    validar(htmleditable);
  });

  $('#remove').on('click',function(){
    localStorage.removeItem('contentcode');
    $('.area_edit').text("");
  });

  function load(){
    if (localStorage.getItem('contentcode')) {
      var a = localStorage.getItem('contentcode');
      $('#result').children().remove();
      code.text(a);
      html.html($(a));
    }
  }
  function validar(htmleditable){
    if (code.text() !== "") {
      console.log(htmleditable);
      if ((htmleditable.indexOf('&lt;') !== -1) && (htmleditable.indexOf('&gt;') !== -1)) {
        localStorage.contentcode = htmleditable;
        load();
      } else{
        localStorage.contentcode = htmleditable;
        var a = localStorage.getItem('contentcode');
        $('#result').children().remove();
        code.text(a);
        debugger;
        html.html(a);
      };
      
    }else{
      alert('Ingresa algo!');//$('#remove').trigger('click');
      code.empty().focus();
      html.empty();
    }
  }
});
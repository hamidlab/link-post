function urlGet(key, queryString) {
  if(!queryString) queryString = document.location.search.substr(1);
  var result = {};
  var queries = queryString.split('&');
  for (var i in queries) {
    var tempv = queries[i].split('=');
    result[tempv[0]] = tempv.slice(1, tempv.length).join('=');
  }
  if (key) {
    return result[key];
  } else {
    return result;
  }
}
jQuery('a.link-post').click(function(e) {
  e.preventDefault();
  var queryString = this.search.substr(1);
  var url = this.href.split('?')[0];
  console.log(urlGet(false, queryString));

  var queries = urlGet(false, queryString);
  var form = $('<form></form>',{
    'method': 'POST',
    'action': url
  });
  for(var i in queries){
    $('<input>',{
      'type': 'hidden',
      'value': queries[i],
      'name': i
    }).appendTo(form);
  }
  $('body').append(form);
  form.submit();
});

var $output = document.createElement('output');
document.body.appendChild($output);

/**
 * PWA in Windows!
 */
if ( 'Windows' in window && 'caches' in window )
{
  $output.innerHTML += 'This is an installed PWA\r\n';
  
  var WinRT_js_file = '/j/WinRT.js',
      cache_name = 'WinRT';
  
  function addWinRTJS() {
    $output.innerHTML += 'Adding WinRT JS to the Page\r\n';
    var script = document.createElement('script');
    script.src = WinRT_js_file;
    document.body.appendChild(script);
  }
  caches.open(cache_name)
    .then( staticCache => {
      staticCache.match(WinRT_js_file)
        .then( responseFromCache => {
          // load the JS
          if ( responseFromCache )
          {
            $output.innerHTML += 'WinRT JS is already in the Cache\r\n';
            addWinRTJS();
            return;
          }

          // Run the test
          if ( 'Windows' in window )
          {
            caches.open(cache_name)
              .then( function (cache) {
                $output.innerHTML += 'Adding WinRT JS to the Cache\r\n';
                cache.add(WinRT_js_file);
                addWinRTJS();
              });
          }
        }); // end match
    }); // end open
}
else
{
  $output.innerHTML += 'Not a PWA in Windows\r\n';
}
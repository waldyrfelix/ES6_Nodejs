const request = require('request')

function get(url){
  return new Promise((resolve, reject) => {
    request(url, (err, res, body)=>{
      if (err) {
        reject(err)
      } else {
        resolve(body)
      }
    })
  })
}









run(function* (){
  console.log('Iniciando...')

  let res = yield get('http://waldyrfelix.com.br')

  console.log(`Request Length: ${res.length} bytes`);
  console.log('...FIM');
})













function run(g) {
    var it = g(), ret;

    // asynchronously iterate over generator
    (function iterate(val){
        ret = it.next( val );

        if (!ret.done) {
            // poor man's "is it a promise?" test
            if ("then" in ret.value) {
                // wait on the promise
                ret.value.then( iterate );
            }
            // immediate value: just send right back in
            else {
                // avoid synchronous recursion
                setTimeout( function(){
                    iterate( ret.value );
                }, 0 );
            }
        }
    })();
}




// ES7
// async function main (){
//   let result = await get('http://waldyrfelix.com.br')
//   console.log(result);
// }

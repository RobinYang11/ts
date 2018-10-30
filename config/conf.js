
const fs=require('fs');
const path=require('path')
const config={
  pageDir:path.resolve('./src/pages'),
  getEntries:function(dir){
   
     var pages={}
     fs.readdirSync(dir).forEach(i=>{

       pages[i]='./src/pages/'+i+'/index.js';
     })
     return pages;
  },
  getHtml:function(){

  }
}

module.exports =config;
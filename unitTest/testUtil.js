var path = require('path')
var fs = require('fs');

// {"name":"book1","category":"1","quantity":"27","allowlend":"1"},  
fs.readFile('Wechat-3/unitTest/testConfig/start.json',function(err,data){  
    if(err)  
        throw err;  
          
    var jsonObj=JSON.parse(data);  
    var space=' ';  
    var newLine=' . ';  
    var chunks=[];  
    var length=0;  
      
    for(var i=0,size=jsonObj.length;i<size;i++){  
        var record=jsonObj[i];  
        var name=record['name'];  
        var category=record['category'];  
        var quantity=record['quantity'];  
          
        var value=name+space+category+space+quantity+newLine;  
        var buffer=new Buffer(value);  
        chunks.push(buffer);  
        length+=buffer.length;  
    }  
      
    var resultBuffer=new Buffer(length);  
    for(var i=0,size=chunks.length,pos=0;i<size;i++){  
        chunks[i].copy(resultBuffer,pos);  
        pos+=chunks[i].length;  
    }  
      
    fs.writeFile('testConfig/start.txt',resultBuffer,function(err){  
        if(err) throw err;  
        console.log('write JSON into TEXT');  
    });  
});  
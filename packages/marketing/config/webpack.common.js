module.exports={
   module: { 
    rules:[
        {
          test:/\.m?js$/, //tells babel to tranfrom any file ends with mjs or js
          exclude: /node_modules/,
          use:{
            loader:'babel-loader',
            options:{
                presets:['@babel/preset-react' //to transform jsx
                ,'@babel/preset-env' //to transfrom es6 to es5
            ],
                plugins:['@babel/plugin-transform-runtime'] //add more features like async await
            }
          }

        }
    ]
}}
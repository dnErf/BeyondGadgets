// to test , on terminal - NODE_ENV=production webpack -p

var webpack= require('webpack');
var path= require('path');
// var envFile= require('node-env-file');

process.env.NODE_ENV= process.env.NODE_ENV || 'development';

// to load variables
// try {
//   envFile(path.join(__dirname, 'config/'+process.env.NODE_ENV+'.env'));
// } catch (e) {
//
// }

module.exports = {
  entry : [
    './app/app.jsx'
  ],
  plugins : [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings : false
      }
    }),
    new webpack.DefinePlugin({
      'process.env' : {
        NODE_ENV : JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  output : {
    path : __dirname,
    filename : './build/bundle.js'
  },
  resolve : {
    root : __dirname,
    modulesDirectories: [
      'node_modules'
    ],
    alias : {
      appStyle : 'app/style/app.scss',
      Comp : 'app/components'
    },
    extensions : ['','.js','.jsx']
  },
  module : {
    loaders : [
      {
        loader : 'babel-loader',
        query : {
          presets : ['es2015', 'stage-3'],
          plugins : [[
            'transform-react-jsx', {'pragma':'m'}
          ]]
      },
      test : /\.jsx?$/,
      exclude : /(node_modules|bower_components)/
    }
  ]
  },
  sassLoader : {
    includePaths : [
      path.resolve(__dirname,'./node_modules/bulma')
    ]
  },
  devtool : process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map'
}

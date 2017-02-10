const m= require('mithril');
const API= require('./PostageAPI.jsx');
const PostageBase= {

  data: []
  , retrieve: ()=>{
    API.readExcel().then((postages)=> {
      for (let i in postages) {
        PostageBase.data.push(postages[i]);
      }
      m.redraw();
    });
  }


}
module.exports= PostageBase;

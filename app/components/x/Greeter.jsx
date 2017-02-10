const m= require('mithril');
const GreeterContainer= require('Comp/GreeterContainer.jsx');

let Greeter= {
  message: ""
  setMessage: (v)=> {Greeter.message= v;m.redraw();}
}

module.exports= Greeter;

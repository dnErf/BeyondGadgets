const m= require('mithril');
const Greeter= require('Comp/Greeter.jsx')
const GreeterForm= require('Comp/GreeterForm.jsx');
const GreeterMessage= require('Comp/GreeterMessage');

let GreeterContainer= {
  view : function(vnode) {
    return (
      <div>
        <GreeterForm/>
        <GreeterMessage message={Greeter.message}/>
      </div>
    )
  }
}


module.exports= GreeterContainer;

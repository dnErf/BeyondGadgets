const m= require('mithril');

let GreeterMessage= {
  view : function(vnode) {
    let {message}= vnode.attrs;
    return (
      <div>
        <p>Hello {message}</p>
      </div>
    )
  }
}


module.exports= GreeterMessage;

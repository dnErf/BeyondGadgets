const m= require('mithril');
const Greeter= require('Comp/Greeter.jsx')

let GreeterForm = {
  view : function(vnode) {
    // this.handleSubmit
    return (
      <div>
        <form name= "myForm" onsubmit= {handleSubmit}>
          <div>
            <input
              className= "input"
              name= "msg"
              type= "text"
              placeholder= "Enter Name"
            />
            <button className="button">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}
function handleSubmit(e) {
  e.preventDefault();
  e.redraw= false;
  Greeter.setMessage(this.msg.value);
};

module.exports= GreeterForm;

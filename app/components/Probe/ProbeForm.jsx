const m= require('mithril');
var ProbeForm = {


  view : function(vnode) {
    return (
      <nav className="nav">
        <div className="nav-right">
          <div className="nav-item">
            <p className= "control has-addons">
            <form name= "myForm" onsubmit= {handleSubmit}>
              <div>
                <input
                  className= "input"
                  name= "search"
                  type= "text"
                  placeholder= "Type the Order-ID ..."
                />
                <button className="button">Search</button>
              </div>
            </form>
          </p>
          </div>
        </div>
      </nav>
    )
  }


}

function handleSubmit(e) {
  e.preventDefault();
  e.redraw= false;
};

module.exports= ProbeForm;

const m= require('mithril');
var ProbeConclude= {


  view : function() {
    return (
      <div className="card">
        <header className="card-header">
          <p className="card-header-title"><h3 className="title is-3">Recipient Details</h3></p>
        </header>
        <div className="columns">
          <div className="column is-two-thirds">
            <p>Order Number : 7654321</p>
          </div>
          <div className="column">
            <textarea className="textarea"></textarea>
          </div>
        </div>
      </div>
    )
  }


}
module.exports= ProbeConclude;

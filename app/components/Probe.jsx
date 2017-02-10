const m= require('mithril');
const ProbeConclude= require('Comp/Probe/ProbeConclude.jsx')
const ProbeForm= require('Comp/Probe/ProbeForm.jsx')
var Probe= {


  view : function() {
    return (
      <div className="container">
        <ProbeForm/>
        <div>
          <ProbeConclude/>
        </div>
      </div>
    )
  }


};
module.exports= Probe;

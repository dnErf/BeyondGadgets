// using sheet.js

module.exports= {


  readExcel: function() {
    return new Promise(function(resolve, reject) {
      const oReq = new XMLHttpRequest();
      let url = "GB_transactions.xlsx";

      oReq.open("GET", url, true);
      oReq.responseType = "arraybuffer";

      oReq.onload = function(e) {
        if(oReq.readyState === 4 && oReq.status === 200){
          let arraybuffer = oReq.response;

          /* convert data to binary string */
          let data = new Uint8Array(arraybuffer);
          let arr = new Array();
          for(let i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
          let bstr = arr.join("");

          /* Call XLSX */
          const workbook = XLSX.read(bstr, {type:"binary"});
          /* DO SOMETHING WITH workbook HERE */
          let first_sheet_name = workbook.SheetNames[0];
          let worksheet = workbook.Sheets[first_sheet_name];
          // console.log(XLSX.utils.sheet_to_json(worksheet,{raw:true}));
          resolve(
            XLSX.utils.sheet_to_json(worksheet,{raw:true})
          );
        } else {
          reject (console.log(this.status, oReq.status.Text));
        }
      }
      oReq.onerror= function () {
        reject(console.log(this.status, oReq.status.Text));
      };
      oReq.send();
    });
  }


};

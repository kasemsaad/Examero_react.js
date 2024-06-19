import React from 'react'
import MyTable from '../../common/Table/Table'

export default function Plans() {
    let header = {
        col1:"اسم الباقه",
        col2:"السعر",
        col3:"الامتحانات المتاحه ",
        col4:"الخصائص"
    }
    let array=[{
        id:1,
        name:"mostafa",
        hhhh:"mostafa",
        ljkdns:"mostafa",

    },
    {
        id:1,
        name:"mostafa",
        kljdnln:"mostafa",
        fbjkb:"mostafa",

    },{
        id:1,
        name:"mostafa",
        sjku:"mostafa",
        kdk:"mostafa",

    },{
        id:1,
        name:"mostafa",
        sjk:"mostafa",
        ahdj:"mostafa",

    },{
        id:1,
        name:"mostafa",
        hcdu:"mostafa",
        jkdk:"mostafa",

    }

]

let icon= {
    trash:true,
    edit:true
}
  return (
    <>

<div className="container  pb-4 " style={{ overflow: 'auto', marginTop: '18px', direction: 'rtl', height: '100vh', border: "2px solid purble", borderRadius: "10px", width: "90%", margin: "auto" }}>

<MyTable header={header} body={array} icons={icon} delteModalName={"#exampleModal"} editButtonName={"#exampleModal"}/>
    
    </div>
    {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}




















<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

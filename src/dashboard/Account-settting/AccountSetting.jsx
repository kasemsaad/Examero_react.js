import React, { useState } from 'react'
import "./Account.css"
import SidebarFullscreen from '../../common/sidebar/structure';
 function AccountSetting() {
  return (
    <>

    <div className='container container_edit' >
      <div style={{paddingTop:"6%" ,direction:"rtl"}}>

     
    <table class="table" >
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col">Handle</th>
      <th scope="col">Handle</th>
      <th scope="col">Handle</th>
   

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table> 
</div>
</div>

    </>
  )
}
export default AccountSetting ;

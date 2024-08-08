import React from 'react'
import errorr from './../../assets/image/Group 339.svg'

export default function ErrorPage(props) {
  return (
    <>

<div className="  pb-4 " style={{ overflow: 'auto',direction: '', height: '100vh', border: "2px solid purble", borderRadius: "10px", margin: "auto",backgroundColor:"#0E0A43", }}>

<div className='col-12' style={{textAlign:"center"}}>

<img src={errorr} alt="error" width={"500px"} height={"500px"} />
</div>

<div style={{textAlign:"center"}}>
  <p style={{color:"#FF828E"}}>الصفحة غير موجودة !</p>
{ props.content? <p  style={{color:"#ffff"}}>نأسف، ليس لديك الصلاحيه لهذه الصفحه</p>:
 
 <p  style={{color:"#ffff"}}>نأسف، الصفحة التي تبحث عنها غير متوفرة. قد يكون الرابط الذي اتبعته غير صحيح أو أن الصفحة قد تم حذفها.</p>
}</div>



    
    </div>
    </>
  )
}

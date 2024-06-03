import { Router,Link  } from "react-router-dom";
import "./style.css";
import homeIcon from '../../assets/icons/sidebar/majesticons_home-line.svg';
import octiconIcon from '../../assets/icons/sidebar/octicon_question-16.svg';
import ph_certificate from '../../assets/icons/sidebar/ph_certificate.svg';
import tabel from '../../assets/icons/sidebar/ph_table.svg';
import lucide_file_input from '../../assets/icons/sidebar/lucide_file-input.svg';
import create_new from '../../assets/icons/sidebar/wpf_create-new.svg';
import iconamoon_exit_light from '../../assets/icons/sidebar/iconamoon_exit-light.svg';
import akar_icons_bank from '../../assets/icons/sidebar/akar-icons_bank.svg';
import manage_accounts_outline_rounded from '../../assets/icons/sidebar/material-symbols_manage-accounts-outline-rounded.svg';
import account_supervisor_outline from '../../assets/icons/sidebar/mdi_account-supervisor-outline.svg';
import teacher from '../../assets/icons/sidebar/mdi_teacher.svg';

function Sidmedscreen() {
  const setId = (id) => {
    localStorage.setItem("sidbarId", JSON.stringify(id));
  };
  const id=localStorage.getItem("sidbarId");
  return (
    <>

        {/* --------------sidbar------------- */}
        <div className="sidbarmed p-0 " dir="rtl" >
          <div className="sidbarSidbar ">
          <ul className="pt-4 ps-4">
            <li className={`Icon  ${id === "1" ? "bgIcon":" "}`}>
              <Link to="/log" onClick={() => setId(1)} >
              <img  src={homeIcon} alt="الرئيسية" />
              </Link>
            </li>
            <li className={`Icon  ${id === "2" ? "bgIcon":" "}`}>
            <Link  to="/log" onClick={() => setId(2)} >
            <img style={{ width: 20 , height:20 }} src={manage_accounts_outline_rounded} alt="مديرو الموقع" />
              </Link>
            </li>
            <li className={`Icon  ${id === "3" ? "bgIcon":" "}`}>
            <Link  to="/" onClick={() => setId(3)}>
            <img style={{ width: 20 , height:20 }} src={account_supervisor_outline} alt="مشرفو الموقع" />
              </Link>
            </li>
            <li className={`Icon  ${id === "4" ? "bgIcon":" "}`}>
            <Link  to="/" onClick={() => setId(4)}>
            <img style={{ width: 20 , height:20 }} src={teacher} alt="المعلمين" />
              </Link>
            </li>
            <li className={`Icon  ${id === "5" ? "bgIcon":" "}`}>
            <Link  to="/" onClick={() => setId(5)}>
            <img style={{ width: 20 , height:20 }} src={octiconIcon} alt="وضع الاسئله" />
              </Link>
            </li>
            <li className={`Icon  ${id === "6" ? "bgIcon":" "}`}>
            <Link to="/" onClick={() => setId(6)}>
              <img style={{ width: 23 , height:23 }} src={akar_icons_bank} alt="وضع الاسئله"  />
              </Link>
            </li>
            <li className={`Icon  ${id === "7" ? "bgIcon":" "}`}>
            <Link to="/" onClick={() => setId(7)}>
              <img style={{ width: 23 , height:23 }} src={ph_certificate } alt="وضع الاسئله"  />
              </Link>
            </li>
            <li className={`Icon  ${id === "8" ? "bgIcon":" "}`}>
            <Link to="/" onClick={() => setId(8)}>
              <img style={{ width: 20 , height:20 }} src={lucide_file_input } alt="وضع الاسئله"  />
              </Link>
            </li>
            <li className={`Icon  ${id === "9" ? "bgIcon":" "}`}>
            <Link to="/" onClick={() => setId(9)}>
              <img style={{ width: 23 , height:23 }} src={tabel} alt="وضع الاسئله"  />
              </Link>
            </li>
            <li className={`Icon  ${id === "10" ? "bgIcon":" "}`}>
            <Link to="/mostar" onClick={() => setId(10)}>
              <img  style={{ width: 18 , height:18 }} src={create_new} alt="وضع الاسئله"  />
              </Link>
            </li>
            <li className={`Icon  ${id === "11" ? "bgIcon":" "}`}>
            <Link to="/" onClick={() => setId(11)}>
              <img  src={iconamoon_exit_light} alt="وضع الاسئله"  />
              </Link>
            </li>
            {/* <li className={`Icon  ${id === "11" ? "bgIcon":" "}`}>
            <Link to="/" onClick={() => setId(11)}>
              <img  src={iconamoon_exit_light} alt="وضع الاسئله"  />
              </Link>
            </li> */}
          </ul>
          </div>
      
        </div>

            </>
  );
}


export default Sidmedscreen;

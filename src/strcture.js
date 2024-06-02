import { Router,Link  } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import homeIcon from '../src/icons/sidebar/majesticons_home-line.svg';
import octiconIcon from '../src/icons/sidebar/octicon_question-16.svg';
import ph_certificate from '../src/icons/sidebar/ph_certificate.svg';
import tabel from '../src/icons/sidebar/ph_table.svg';
import lucide_file_input from '../src/icons/sidebar/lucide_file-input.svg';
import create_new from '../src/icons/sidebar/wpf_create-new.svg';
import iconamoon_exit_light from '../src/icons/sidebar/iconamoon_exit-light.svg';

function Strcture() {
  return (
    <div className="container bg-danger mt-5">
      <div className="row" dir="rtl" >
        {/* --------------sidbar------------- */}
        <div className="sidbar p-0 ">
          <div className="sidbarSidbar  mb-3">
          <ul className="pt-5">
            <li className="Icon">
              <Link to="/"  >
              <img  src={homeIcon} alt="الرئيسية" />
              </Link>
            </li>
            <li>
            <Link  to="/" >
            <img style={{ width: 20 , height:20 }} src={octiconIcon} alt="وضع الاسئله" />
              </Link>
            </li>
            <li>
            <Link to="/">
              <img style={{ width: 23 , height:23 }} src={ph_certificate } alt="وضع الاسئله"  />
              </Link>
            </li>
            <li>
            <Link to="/">
              <img style={{ width: 20 , height:20 }} src={lucide_file_input } alt="وضع الاسئله"  />
              </Link>
            </li>
            <li>
            <Link to="/">
              <img style={{ width: 23 , height:23 }} src={tabel} alt="وضع الاسئله"  />
              </Link>
            </li>
            <li>
            <Link to="/">
              <img  style={{ width: 18 , height:18 }} src={create_new} alt="وضع الاسئله"  />
              </Link>
            </li>
            <li>
            <Link to="/">
              <img  src={iconamoon_exit_light} alt="وضع الاسئله"  />
              </Link>
            </li>
          </ul>
          </div>
          <ul className="sidbarUl pt-5 ">
            <li className="sidbarli ">
              <Link  className="Icon mb-1">الرئيسيه</Link>
            </li>
            <li className="sidbarli">
              <Link  className="Icon">وضع الأسئلة</Link>
            </li>
            <li className="sidbarli">
              <Link  className="Icon">شهادات التقدير</Link>
            </li>
            <li className="sidbarli">
              <Link  className="Icon">إدخال علامات Open Emis</Link>
            </li>
            <li className="sidbarli">
              <Link  className="Icon">جدول المواصفات</Link>
            </li>
            <li className="sidbarli">
              <Link  className="Icon">إنشاء الامتحان</Link>
            </li>
            <li className="sidbarli">
              <Link  className="Icon">تسجيل الخروج</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Strcture;

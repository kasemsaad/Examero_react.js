import { Router, Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import homeIcon from "../src/icons/sidebar/majesticons_home-line.svg";
import octiconIcon from "../src/icons/sidebar/octicon_question-16.svg";
import ph_certificate from "../src/icons/sidebar/ph_certificate.svg";
import tabel from "../src/icons/sidebar/ph_table.svg";
import lucide_file_input from "../src/icons/sidebar/lucide_file-input.svg";
import create_new from "../src/icons/sidebar/wpf_create-new.svg";
import iconamoon_exit_light from "../src/icons/sidebar/iconamoon_exit-light.svg";
import akar_icons_bank from "../src/icons/sidebar/akar-icons_bank.svg";
import manage_accounts_outline_rounded from "../src/icons/sidebar/material-symbols_manage-accounts-outline-rounded.svg";
import account_supervisor_outline from "../src/icons/sidebar/mdi_account-supervisor-outline.svg";
import teacher from "../src/icons/sidebar/mdi_teacher.svg";

function Strcture() {
  const setId = (id) => {
    localStorage.setItem("sidbarId", JSON.stringify(id));
  };
  const id = localStorage.getItem("sidbarId");
  return (
    <div className="container  mt-4">
      {/* --------------sidbar------------- */}
      <div dir="rtl">
        <div className="sidbar p-0 ">
          <div className="sidbarSidbar mb-3">
            <ul className="pt-4">
              <li className={`Icon  ${id === "1" ? "bgIcon" : " "}`}>
                <Link to="/" onClick={() => setId(1)}>
                  <img src={homeIcon} alt="الرئيسية" />
                </Link>
              </li>
              <li className={`Icon  ${id === "2" ? "bgIcon" : " "}`}>
                <Link to="/" onClick={() => setId(2)}>
                  <img
                    style={{ width: 20, height: 20 }}
                    src={manage_accounts_outline_rounded}
                    alt="مديرو الموقع"
                  />
                </Link>
              </li>
              <li className={`Icon  ${id === "3" ? "bgIcon" : " "}`}>
                <Link to="/" onClick={() => setId(3)}>
                  <img
                    style={{ width: 20, height: 20 }}
                    src={account_supervisor_outline}
                    alt="مشرفو الموقع"
                  />
                </Link>
              </li>
              <li className={`Icon  ${id === "4" ? "bgIcon" : " "}`}>
                <Link to="/" onClick={() => setId(4)}>
                  <img
                    style={{ width: 20, height: 20 }}
                    src={teacher}
                    alt="المعلمين"
                  />
                </Link>
              </li>
              <li className={`Icon  ${id === "5" ? "bgIcon" : " "}`}>
                <Link to="/" onClick={() => setId(5)}>
                  <img
                    style={{ width: 20, height: 20 }}
                    src={octiconIcon}
                    alt="وضع الاسئله"
                  />
                </Link>
              </li>
              <li className={`Icon  ${id === "6" ? "bgIcon" : " "}`}>
                <Link to="/" onClick={() => setId(6)}>
                  <img
                    style={{ width: 23, height: 23 }}
                    src={akar_icons_bank}
                    alt="وضع الاسئله"
                  />
                </Link>
              </li>
              <li className={`Icon  ${id === "7" ? "bgIcon" : " "}`}>
                <Link to="/" onClick={() => setId(7)}>
                  <img
                    style={{ width: 23, height: 23 }}
                    src={ph_certificate}
                    alt="وضع الاسئله"
                  />
                </Link>
              </li>
              <li className={`Icon  ${id === "8" ? "bgIcon" : " "}`}>
                <Link to="/" onClick={() => setId(8)}>
                  <img
                    style={{ width: 20, height: 20 }}
                    src={lucide_file_input}
                    alt="وضع الاسئله"
                  />
                </Link>
              </li>
              <li className={`Icon  ${id === "9" ? "bgIcon" : " "}`}>
                <Link to="/" onClick={() => setId(9)}>
                  <img
                    style={{ width: 23, height: 23 }}
                    src={tabel}
                    alt="وضع الاسئله"
                  />
                </Link>
              </li>
              <li className={`Icon  ${id === "10" ? "bgIcon" : " "}`}>
                <Link to="/" onClick={() => setId(10)}>
                  <img
                    style={{ width: 18, height: 18 }}
                    src={create_new}
                    alt="وضع الاسئله"
                  />
                </Link>
              </li>
              <li className={`Icon  ${id === "11" ? "bgIcon" : " "}`}>
                <Link to="/" onClick={() => setId(11)}>
                  <img src={iconamoon_exit_light} alt="وضع الاسئله" />
                </Link>
              </li>
              <li className={`Icon  ${id === "11" ? "bgIcon" : " "}`}>
                <Link to="/" onClick={() => setId(11)}>
                  <img src={iconamoon_exit_light} alt="وضع الاسئله" />
                </Link>
              </li>
            </ul>
          </div>
          <ul className="sidbarUl pt-4 ">
            <li className="sidbarli">
              <Link
                to="/"
                onClick={() => setId(1)}
                className={`Icon  ${id === "1" ? "Id" : " "}`}
              >
                الرئيسية
              </Link>
            </li>
            <li className="sidbarli">
              <Link
                to="/"
                onClick={() => setId(2)}
                className={`Icon  ${id === "2" ? "Id" : " "}`}
              >
                مديرو الموقع
              </Link>
            </li>
            <li className="sidbarli">
              <Link
                to="/"
                onClick={() => setId(3)}
                className={`Icon  ${id === "3" ? "Id" : " "}`}
              >
                مشرفو الموقع
              </Link>
            </li>
            <li className="sidbarli">
              <Link
                to="/"
                onClick={() => setId(4)}
                className={`Icon  ${id === "4" ? "Id" : " "}`}
              >
                المعلمين
              </Link>
            </li>
            <li className="sidbarli">
              <Link
                to="/"
                onClick={() => setId(5)}
                className={`Icon  ${id === "5" ? "Id" : " "}`}
              >
                وضع الأسئلة
              </Link>
            </li>
            <li className="sidbarli">
              <Link
                to="/"
                onClick={() => setId(6)}
                className={`Icon  ${id === "6" ? "Id" : " "}`}
              >
                بنك الأسئلة
              </Link>
            </li>
            <li className="sidbarli">
              <Link
                to="/"
                onClick={() => setId(7)}
                className={`Icon  ${id === "7" ? "Id" : " "}`}
              >
                شهادات التقدير
              </Link>
            </li>
            <li className="sidbarli">
              <Link
                to="/"
                onClick={() => setId(8)}
                className={`Icon  ${id === "8" ? "Id" : " "}`}
              >
                إدخال علامات Open Emis
              </Link>
            </li>
            <li className="sidbarli">
              <Link
                to="/"
                onClick={() => setId(9)}
                className={`Icon  ${id === "9" ? "Id" : " "}`}
              >
                جدول المواصفات
              </Link>
            </li>
            <li className="sidbarli">
              <Link
                to="/"
                onClick={() => setId(10)}
                className={`Icon  ${id === "10" ? "Id" : " "}`}
              >
                إنشاء الامتحان
              </Link>
            </li>
            <li className="sidbarli">
              <Link
                to="/"
                onClick={() => setId(11)}
                className={`Icon  ${id === "11" ? "Id" : " "}`}
              >
                تسجيل الخروج
              </Link>
            </li>
            <li className="sidbarli">
              <Link
                to="/"
                onClick={() => setId(11)}
                className={`Icon  ${id === "11" ? "Id" : " "}`}
              >
                تسجيل الخروج
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Strcture;

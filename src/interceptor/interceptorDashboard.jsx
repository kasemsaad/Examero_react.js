import axios from 'axios';
// إنشاء instance من axios
const Api_Dashboard = axios.create({
  baseURL: 'http://127.0.0.1:8000/api_dashboard',
});

// Interceptor للطلبات لإضافة التوكن
Api_Dashboard.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor للاستجابات للتعامل مع الأخطاء
Api_Dashboard.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // التعامل مع انتهاء صلاحية التوكن هنا
      // مثال: إعادة التوجيه لصفحة تسجيل الدخول
    //   window.location.href = '/login_dashboard';
    }
    return Promise.reject(error);
  }
);


export default Api_Dashboard;
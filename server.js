const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// لخدمة الملفات الثابتة من مجلد public
app.use(express.static('public'));

// تعريف المسار الأساسي (الصفحة الرئيسية)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// تشغيل الخادم
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

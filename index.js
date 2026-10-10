const bedrock = require('bedrock-protocol')

const client = bedrock.createClient({
  host: 'qrwu000.aternos.me', // IP السيرفر
  port: 19132,                // بورت نسخة الجوال
  username: 'مهدي_عمك',        // اسم البوت داخل اللعبة
  offline: true               // تفعيل الدخول المكرك (Cracked)
})

client.on('join', () => {
  console.log('تم دخول البوت إلى سيرفر الجوال (Bedrock) بنجاح!')
})

client.on('close', () => {
  console.log('انقطع الاتصال بالسيرفر، جاري إغلاق الجلسة...')
})

client.on('error', (err) => {
  console.log('حدث خطأ في الاتصال:', err)
})

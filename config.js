// ใส่ค่าจาก Supabase > Project Settings > API (Data API)
// anon/publishable key เปิดเผยได้ ข้อมูลถูกป้องกันด้วย Row Level Security
// ถ้าเว้นว่างไว้ เว็บจะทำงานในโหมดทดลอง (เก็บข้อมูลในเครื่อง)
window.APP_CONFIG = {
  supabaseUrl: "https://onboiyoejvjnozibvrdw.supabase.co",      // เช่น https://abcdefghijk.supabase.co
  supabaseAnonKey: "sb_publishable_CadR98nm-5lOsEqK6ZHMpQ_4kj2tSHl"   // คีย์ anon public หรือ publishable key
};

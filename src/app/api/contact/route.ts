import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const RECEIVER_EMAIL = 'bahadrefeylmaz4@gmail.com'; 
const SENDER_EMAIL = process.env.SMTP_USER || 'your-email@gmail.com';
const SENDER_PASSWORD = process.env.SMTP_PASSWORD || 'your-app-password';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validasyon
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Tüm alanlar zorunludur' },
        { status: 400 }
      );
    }

    // E-mail transporter oluştur - createTransport kullanılıyor
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: SENDER_EMAIL,
        pass: SENDER_PASSWORD,
      },
    });

    // E-mail içeriği
    const mailOptions = {
      from: SENDER_EMAIL,
      to: RECEIVER_EMAIL,
      subject: `İletişim Formu: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #198754;">Yeni İletişim Formu Mesajı</h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>İsim:</strong> ${name}</p>
            <p><strong>E-posta:</strong> ${email}</p>
            <p><strong>Telefon:</strong> ${phone}</p>
            <p><strong>Konu:</strong> ${subject}</p>
          </div>
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
            <h3 style="color: #198754;">Mesaj:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <hr style="margin-top: 40px;">
          <p style="color: #6c757d; font-size: 12px;">
            Bu e-posta ${new Date().toLocaleString('tr-TR')} tarihinde website iletişim formu üzerinden gönderilmiştir.
          </p>
        </div>
      `,
      replyTo: email,
    };

    // E-mail gönder
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'E-posta başarıyla gönderildi' },
      { status: 200 }
    );
  } catch (error) {
    console.error('E-posta gönderme hatası:', error);
    return NextResponse.json(
      { error: 'E-posta gönderilirken bir hata oluştu' },
      { status: 500 }
    );
  }
}
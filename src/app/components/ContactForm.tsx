'use client';

import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAlert, setShowAlert] = useState<{ type: 'success' | 'danger', message: string } | null>(null);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'İsim soyisim gereklidir';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-posta adresi gereklidir';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Geçerli bir e-posta adresi giriniz';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefon numarası gereklidir';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Konu başlığı gereklidir';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mesajınızı yazınız';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setShowAlert(null);

    try {
      // API route'a form verisini gönder
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setShowAlert({
          type: 'success',
          message: 'Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.'
        });
        
        // Formu temizle
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(data.error || 'E-posta gönderilirken bir hata oluştu');
      }
    } catch (error) {
      setShowAlert({
        type: 'danger',
        message: 'Mesaj gönderilirken bir hata oluştu. Lütfen WhatsApp üzerinden iletişime geçin.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit} id="form">
      {showAlert && (
        <Alert 
          variant={showAlert.type} 
          dismissible 
          onClose={() => setShowAlert(null)}
          className="mb-4"
        >
          {showAlert.message}
        </Alert>
      )}

      <Form.Group className="mb-4">
        <Form.Label className="fw-semibold">İsim Soyisim *</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          isInvalid={!!errors.name}
          placeholder="Adınız ve soyadınız"
          className="form-control-glass"
        />
        <Form.Control.Feedback type="invalid">
          {errors.name}
        </Form.Control.Feedback>
      </Form.Group>

      <div className="row">
        <div className="col-md-6">
          <Form.Group className="mb-4">
            <Form.Label className="fw-semibold">E-Posta *</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              isInvalid={!!errors.email}
              placeholder="ornek@email.com"
              className="form-control-glass"
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>
        </div>
        <div className="col-md-6">
          <Form.Group className="mb-4">
            <Form.Label className="fw-semibold">Telefon *</Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              isInvalid={!!errors.phone}
              placeholder="0 (5XX) XXX XX XX"
              className="form-control-glass"
            />
            <Form.Control.Feedback type="invalid">
              {errors.phone}
            </Form.Control.Feedback>
          </Form.Group>
        </div>
      </div>

      <Form.Group className="mb-4">
        <Form.Label className="fw-semibold">Konu *</Form.Label>
        <Form.Control
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          isInvalid={!!errors.subject}
          placeholder="Mesajınızın konusu"
          className="form-control-glass"
        />
        <Form.Control.Feedback type="invalid">
          {errors.subject}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label className="fw-semibold">Mesajınız *</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          name="message"
          value={formData.message}
          onChange={handleChange}
          isInvalid={!!errors.message}
          placeholder="Size nasıl yardımcı olabiliriz?"
          className="form-control-glass"
        />
        <Form.Control.Feedback type="invalid">
          {errors.message}
        </Form.Control.Feedback>
      </Form.Group>

      <div className="text-end">
        <Button 
          type="submit" 
          variant="success" 
          size="lg"
          disabled={isSubmitting}
          className="px-5 py-3 rounded-pill fw-semibold btn-submit"
        >
          {isSubmitting ? (
            <>
              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              Gönderiliyor...
            </>
          ) : (
            <>
              <i className="bi bi-send-fill me-2"></i>
              Mesajı Gönder
            </>
          )}
        </Button>
      </div>
    </Form>
  );
}
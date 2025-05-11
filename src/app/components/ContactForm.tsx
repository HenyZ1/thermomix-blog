// src/app/components/ContactForm.tsx
"use client";
import { useState } from 'react';
import { useForm, FieldError, SubmitHandler } from 'react-hook-form';
import { Form, Button, Row, Col, Alert, Spinner } from 'react-bootstrap';

// Form veri tipini tanımla
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  consent: boolean;
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset 
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsSubmitting(true);
    setError(null);

    try {
      // Normalde burada bir API endpoint'e post işlemi yapılır
      // Şimdilik simüle edelim
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form data:', data);
      setIsSubmitted(true);
      reset();
    } catch (err) {
      console.error('Form submission error:', err);
      setError('Form gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-5">
        <div className="d-inline-flex align-items-center justify-content-center bg-success bg-opacity-10 rounded-circle mb-4" style={{ width: '80px', height: '80px' }}>
          <i className="bi bi-check-lg text-success fs-1"></i>
        </div>
        <h3 className="h4 fw-bold mb-3">Teşekkürler!</h3>
        <p className="text-muted mb-4">Mesajınız bize ulaştı. En kısa sürede sizinle iletişime geçeceğiz.</p>
        <Button 
          onClick={() => setIsSubmitted(false)} 
          variant="primary"
        >
          Yeni Mesaj Gönder
        </Button>
      </div>
    );
  }

  // Hata mesajını göstermek için yardımcı fonksiyon
  const getErrorMessage = (error: FieldError | undefined): React.ReactNode => {
    return error ? error.message : null;
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {error && (
        <Alert variant="danger" className="mb-4">
          {error}
        </Alert>
      )}

      <Row className="mb-3">
        <Col md={6}>
          <Form.Group className="mb-3 mb-md-0">
            <Form.Label>Ad</Form.Label>
            <Form.Control
              type="text"
              placeholder="Adınız"
              isInvalid={!!errors.firstName}
              {...register('firstName', { required: 'Ad alanı zorunludur' })}
            />
            <Form.Control.Feedback type="invalid">
              {getErrorMessage(errors.firstName)}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group>
            <Form.Label>Soyad</Form.Label>
            <Form.Control
              type="text"
              placeholder="Soyadınız"
              isInvalid={!!errors.lastName}
              {...register('lastName', { required: 'Soyad alanı zorunludur' })}
            />
            <Form.Control.Feedback type="invalid">
              {getErrorMessage(errors.lastName)}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3">
        <Form.Label>E-posta</Form.Label>
        <Form.Control
          type="email"
          placeholder="E-posta adresiniz"
          isInvalid={!!errors.email}
          {...register('email', { 
            required: 'E-posta alanı zorunludur',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Geçerli bir e-posta adresi giriniz'
            }
          })}
        />
        <Form.Control.Feedback type="invalid">
          {getErrorMessage(errors.email)}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Telefon</Form.Label>
        <Form.Control
          type="tel"
          placeholder="05XX XXX XX XX"
          isInvalid={!!errors.phone}
          {...register('phone', { 
            required: 'Telefon alanı zorunludur',
            pattern: {
              value: /^[0-9\s\(\)\-\+]{10,15}$/,
              message: 'Geçerli bir telefon numarası giriniz'
            }
          })}
        />
        <Form.Control.Feedback type="invalid">
          {getErrorMessage(errors.phone)}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Konu</Form.Label>
        <Form.Select
          isInvalid={!!errors.subject}
          {...register('subject', { required: 'Konu seçimi zorunludur' })}
        >
          <option value="">Konu Seçiniz</option>
          <option value="demo">Demo İsteği</option>
          <option value="purchase">Satın Alma</option>
          <option value="support">Teknik Destek</option>
          <option value="other">Diğer</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {getErrorMessage(errors.subject)}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Mesaj</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          placeholder="Mesajınızı buraya yazın..."
          isInvalid={!!errors.message}
          {...register('message', { 
            required: 'Mesaj alanı zorunludur',
            minLength: {
              value: 10,
              message: 'Mesajınız en az 10 karakter olmalıdır'
            }
          })}
        />
        <Form.Control.Feedback type="invalid">
          {getErrorMessage(errors.message)}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Check
          type="checkbox"
          id="consent"
          label="Kişisel verilerimin işlenmesini ve tarafıma ticari elektronik ileti gönderilmesini kabul ediyorum."
          isInvalid={!!errors.consent}
          {...register('consent', { required: 'Bu alanı işaretlemeniz gerekmektedir' })}
        />
        <div className="text-danger small mt-1">
          {errors.consent && getErrorMessage(errors.consent)}
        </div>
      </Form.Group>

      <Button
        type="submit"
        variant="primary"
        className="w-100 py-2"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
              className="me-2"
            />
            Gönderiliyor...
          </>
        ) : 'Gönder'}
      </Button>
    </Form>
  );
}
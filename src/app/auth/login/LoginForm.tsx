'use client';
import React, { useState } from 'react';
import { InputField } from '../../components/InputField';
import { AuthForm } from '@/app/components/authForm';
import { useRouter } from 'next/navigation';

type ServerError = {
  message: string;
};

export default function LoginForm() {
  const router = useRouter();
  const [error, setErrors] = useState<string[]>([]);

  console.log(error);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');
    try {
      const response = await fetch('/auth/login/api', {
        method: 'POST',
        headers: { 'Content-Type': 'Application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        router.push('/');
        return;
      }

      const payload: ServerError[] = await response.json();
      setErrors(payload.map((error) => error.message));
    } catch (error) {
      console.error(error);

      setErrors(['An unknown error ocurred.']);
    }
  };

  return <AuthForm formType={'login'} onSubmit={handleSubmit} />;
}

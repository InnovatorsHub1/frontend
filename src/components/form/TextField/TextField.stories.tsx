import type { Meta, StoryObj } from '@storybook/react';
import { ReactNode, useState } from 'react';
import TextField from './TextField';
import { useForm, SubmitHandler } from 'react-hook-form';
import GenericButton from '@src/components/Button/GenericButton';

const meta = {
  title: 'UI/Input',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['alpha', 'version:1.0.0'],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'Email',
    placeholder: 'Email placeholder',
  },
};

type Inputs = {
  email: string;
  name: string;
  message: string;
};

export const ContactForm = (): ReactNode => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<Inputs | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    defaultValues: {
      email: '',
      name: '',
      message: '',
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    setFormData(data);
    setIsSubmitted(true);
  };

  return (
    <div className='p-4 max-w-md w-full'>
      <h2 className='text-xl font-bold mb-4 text-white'>Contact Form</h2>

      {isSubmitted && (
        <div className='mb-4 p-3 bg-green-500 text-white rounded'>
          Thank you! Your form has been submitted successfully
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          type='email'
          placeholder='Your email'
          isError={!!errors.email}
          errorMessage={errors.email?.message}
          {...register('email', {
            required: 'This field is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
        />
        <TextField
          type='text'
          id='name'
          placeholder='Your name'
          isError={!!errors.name}
          errorMessage={errors.name?.message}
          {...register('name', {
            required: 'This field is required',
            minLength: {
              value: 2,
              message: 'Name must contain at least 2 characters',
            },
          })}
        />
        <TextField
          placeholder='Your message'
          multiline
          rows={4}
          isError={!!errors.message}
          errorMessage={errors.message?.message}
          {...register('message', {
            required: 'This field is required',
            minLength: {
              value: 10,
              message: 'Message must contain at least 10 characters',
            },
          })}
        />

        <GenericButton type='submit' disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send'}
        </GenericButton>
      </form>

      {formData && (
        <div className='mt-4 p-3 bg-gray-700 rounded text-white'>
          <h3 className='font-bold mb-2'>Submitted data:</h3>
          <pre className='text-sm overflow-x-auto'>{JSON.stringify(formData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

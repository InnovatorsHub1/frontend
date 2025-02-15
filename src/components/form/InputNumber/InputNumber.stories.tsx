import { ComponentType, ReactNode, useState } from 'react';
import { userEvent, within, expect } from '@storybook/test';
import { Meta } from '@storybook/react';
import InputNumber from './InputNumber';
import { RegisterOptions, useForm } from 'react-hook-form';

const meta = {
  title: 'components/InputNumber',
  component: InputNumber,
  parameters: {
    controls: { exclude: /^(label|defaultValue|validation|errors|register)$/g },
  },
  tags: ['autodocs', 'new'],
  decorators: [
    (Story: ComponentType) => (
      <div style={{ minHeight: '20vh' }}>
        <Story />
      </div>
    ),
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // 1. what happen when the user submit value is undefined.
    // 2. what happen when the user submit value 22.
    // 3. what happen when the user submit value 41.
    // 4. what happen when the user submit value 36.

    // test 1 implementation.
    await userEvent.click(canvas.getByRole('button'), { delay: 300 });
    await expect(canvas.getByText('Must fill the input.')).toBeInTheDocument();

    // test 2 implementation.
    canvas.getByTestId('input-number').focus();
    await userEvent.type(canvas.getByTestId('input-number'), '22', { delay: 100 });
    await userEvent.click(canvas.getByRole('button'), { delay: 100 });
    await expect(canvas.getByText('must be more than 25.')).toBeInTheDocument();

    // clear
    userEvent.clear(canvas.getByTestId('input-number'));

    // test 3 implementation.
    await userEvent.type(canvas.getByTestId('input-number'), '41', { delay: 100 });
    await userEvent.click(canvas.getByRole('button'), { delay: 100 });
    await expect(canvas.getByText('must be max 40.')).toBeInTheDocument();

    // clear
    userEvent.clear(canvas.getByTestId('input-number'));

    // test 4 implementation.
    await userEvent.type(canvas.getByTestId('input-number'), '36', { delay: 100 });
    await userEvent.click(canvas.getByRole('button'), { delay: 100 });
    await expect(canvas.getByText('Submitted successfully !')).toBeInTheDocument();
  },
} satisfies Meta<typeof InputNumber>;

export default meta;
type FormTest = {
  streetNumber: string;
};

export const FormWithInputNumber = (): ReactNode => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [successMsg, setSuccessMsg] = useState('');
  const validConfig: RegisterOptions = {
    required: 'Must fill the input.',
    min: {
      value: 25,
      message: 'must be more than 25.',
    },
    max: {
      value: 40,
      message: 'must be max 40.',
    },
  };

  const testHandleSubmit = (dataBody: FormTest) => {
    console.log(dataBody);
    setSuccessMsg('Submitted successfully !');
    setTimeout(() => {
      setSuccessMsg('');
    }, 1000);
  };

  return (
    <form className='p-4 bg-blue-300' onSubmit={handleSubmit((dataBody) => testHandleSubmit(dataBody as FormTest))}>
      <InputNumber
        label='Number:'
        formRegisterName='streetNumber'
        key='streetNumber'
        register={register}
        errors={errors}
        validation={validConfig}
      />

      <button className='bg-blue-900 text-white font-bold py-2 px-4 rounded-full'>Submit</button>

      {successMsg ? (
        <div role='alert'>
          <div className='bg-green-500 text-white font-bold rounded-t px-4 py-2'>Success</div>
          <div className='border border-t-0 border-green-400 rounded-b bg-green-100 px-4 py-3 text-green-700'>
            <p>{successMsg}</p>
          </div>
        </div>
      ) : null}
    </form>
  );
};

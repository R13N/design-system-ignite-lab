import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputRootProps {
  children: ReactNode;
}

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputRoot({ children }: TextInputRootProps){
  return (
    <div className={clsx('flex h-12 items-center gap-3 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300')}>
      { children }
    </div>
  )
}

function TextInputIcon({ children }: TextInputIconProps){
  return(
    <Slot className='w-6 h-6 text-gray-400'>
      { children }
    </Slot>
  )
}

function TextInputInput(props: TextInputInputProps){
  return(
    <input 
      className='bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none'
      {...props}
    />
  )
}

//how the elements will be called
TextInputRoot.displayName = 'TextInput.Root';
TextInputIcon.displayName = 'TextInput.Icon';
TextInputInput.displayName = 'TextInput.Input';

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}
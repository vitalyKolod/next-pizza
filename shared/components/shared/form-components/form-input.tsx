import { Input } from '../../ui'
import { ClearButton } from '../clear-button'
import { ErrorText } from '../error-text'
import { RequiredSymbol } from '../required-symbol'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
  required?: boolean
  className?: string
}

export const FormInput: React.FC<Props> = ({ className, name, label, required, ...props }) => {
  return (
    <div className={className}>
      <p className="font-medium mb-2"></p>
      {label} {required && <RequiredSymbol />}
      <div className="relative">
        <Input className="h-12 text-md" {...props} />
        <ClearButton onClick={clearClickButton} />
      </div>
      <ErrorText text="Поле обязательно для заполонения " className="mt-2" />
    </div>
  )
}

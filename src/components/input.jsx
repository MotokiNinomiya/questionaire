import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

// Formに入力したデータ保存用のInterface
interface InputData {
  username: string;
  gender: string;
  month: string;
  date: string;
  message: string;
}
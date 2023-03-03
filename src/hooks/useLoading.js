import { useContext } from 'react';
import { LoadingContext } from '../contexts/LoadingContext';

export default function useLoading() {
  return useContext(LoadingContext);
}

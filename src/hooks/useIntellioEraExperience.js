import { useEffect } from 'react';
import { initializeWebsite } from '../legacyRuntime';

export default function useIntellioEraExperience() {
  useEffect(() => {
    initializeWebsite();
  }, []);
}

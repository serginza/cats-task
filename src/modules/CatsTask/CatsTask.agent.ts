import { CatsType } from './CatsTask.types';

const KEY_API =
  'live_dlzlsWYT2L0XcY4qEkZR0Tw9YN11BwSQhxKegYsMPRIx9RHkZXFNt1erYgbyeUda';
const BASE_URL = 'https://api.thecatapi.com';

// использован стандартный fetch с параметром limit, без сервиса и адпатера
export async function getCatsAgent(limit: number): Promise<CatsType[]> {
  const res = await fetch(`${BASE_URL}/v1/images/search?limit=${limit}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${KEY_API}`,
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error(`Error fetch cats: ${res.statusText}`);
  }

  const data: CatsType[] = await res.json();
  return data;
}

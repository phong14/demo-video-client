import axios from 'axios';
import { NextRequest } from 'next/server';
import { ENV } from '@/core/configs';
import { handleResponseErrors } from '@/shared/helpers';

export async function POST(request: NextRequest) {
  const payload = await request.json();
  try {
    const base_url = ENV.API_URL;
    const { data } = await axios.post(`${base_url}/increaseView`, payload);

    return Response.json({
      status: 200,
      success: true,
      ...data,
    });
  } catch (error) {
    const { status, ...rest } = handleResponseErrors(error);
    return Response.json({ status, ...rest }, { status });
  }
}

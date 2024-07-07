import { redirect } from 'next/navigation';
import { routeExternal } from '@/core/routes';

const RootPage = () => {
  redirect(routeExternal.video());
};

export default RootPage;

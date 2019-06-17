const BASEURL = '/login';

import login from '@/pages/login/login';
import edit from '@/pages/login/login_update';

export default [
    {
        path: BASEURL,
        name:'login',
        component: login
    },
    {
        path: `${BASEURL}/edit`,
        name:'loginEdit',
        component: edit
    },
];


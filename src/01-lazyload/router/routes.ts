import {LazyPage1, LazyPage2, LazyPage3} from '../pages'

interface Route {
    path: string;
    Component: () => JSX.Element,
    name: string;
    children?: Route[]
}
export const routes: Route[] = [
    
    {
        path:'/page1',
        Component: LazyPage1,
        name: 'LazyPage1'
    },
    {
        path:'/page2',
        Component: LazyPage2,
        name: 'LazyPage2'
    },
    {
        path:'/page3',
        Component: LazyPage3,
        name: 'LazyPage3'
    },
]
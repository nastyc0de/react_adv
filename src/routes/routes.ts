import ShoppingPage from '../02-component-patterns/pages/ShoppingPage';

interface Route {
    path: string;
    Component: () => JSX.Element,
    name: string;
    children?: Route[]
}
export const routes: Route[] = [
    
    {
        path:'/',
        Component: ShoppingPage,
        name: 'ShoppingPage'
    },
]
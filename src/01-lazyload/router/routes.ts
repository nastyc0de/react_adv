import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string;
}

const Lazy1 = lazy(/*webpackChunkName: 'lazyPage1'*/ () => import('../pages/LazyPage1'));
const Lazy2 = lazy(/*webpackChunkName: 'lazyPage2'*/ () => import('../pages/LazyPage2'));
const Lazy3 = lazy(/*webpackChunkName: 'lazyPage3'*/ () => import('../pages/LazyPage3'));
export const routes: Route[] = [
    
    {
        to:'/page1', 
        path: 'lazy1',
        Component: Lazy1,
        name: 'LazyPage1'
    },
    {
        to:'/page2',
        path:'page2',
        Component: Lazy2,
        name: 'LazyPage2'
    },
    {
        to:'/page3',
        path:'page3',
        Component: Lazy3,
        name: 'LazyPage3'
    },
]
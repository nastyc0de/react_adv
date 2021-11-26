import { lazy, LazyExoticComponent } from "react";
import NoLazy from "../pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string;
}

const LayoutLazy = lazy(/*webpackChunkName: 'lazylayout'*/ () => import('../../01-lazyload/layout/LazyLayout'));

export const routes: Route[] = [
    
    {
        to:'/lazyload/*', 
        path: '/lazyload',
        Component: LayoutLazy,
        name: 'Lazy Layout'
    },
    {
        to:'/no-lazy',
        path:'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },
]
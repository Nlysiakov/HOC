import type { ComponentType } from "react";
import { Loader } from "./Loader";

interface IWithLoader{
    isLoading: boolean
}

export function withLoading<P extends object>(
    WrappedComponent: ComponentType<P>
){
    return function WithLoaderComponent(props: P & IWithLoader){
        const {isLoading, ...rest}=props
        if(isLoading) return <Loader/>
        return <WrappedComponent {...(rest as P)}/>
    }
}
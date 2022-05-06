import React from "react";
import { LayoutPropsI } from "../../interfaces/components/layout/layout.interface";
import Header from "./header";

const Layout = ({ children, title }: LayoutPropsI) => {

    return (
        <React.Fragment>
            <Header title={title} />
            <main>
                {children}
            </main>
        </React.Fragment>
    )
}

export default Layout;
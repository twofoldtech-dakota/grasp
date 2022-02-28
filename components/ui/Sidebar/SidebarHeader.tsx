import { ReactNode } from 'react';

import className from 'classnames';

import { ToggleMenuButton } from '../Button/ToggleMenuButton';
import { useMenu } from '../../../utils/helpers';
import { Sidebar } from './Sidebar';
import Navbar from '../Navbar';

type ISidebarHeaderProps = {
    topLeftLinks: ReactNode;
    bottomLeftLinks: ReactNode;
    title?: string;
    topNavContent: ReactNode;
    children: ReactNode;
};

const SidebarHeader = (props: ISidebarHeaderProps) => {
    const { showMenu, handleToggleMenu, handleClose } = useMenu();

    const clickableBgClass = className(
        'fixed',
        'w-full',
        'h-full',
        'z-40',
        'inset-0',
        'opacity-50',
        'cursor-default',
        {
            hidden: !showMenu
        },
        'lg:hidden'
    );

    return (
        <div className="flex h-screen antialiased">
            <button
                className={clickableBgClass}
                onClick={handleClose}
                aria-label="Close"
                type="button"
                tabIndex={-1}
            />

            <Sidebar
                show={showMenu}
                topLinks={props.topLeftLinks}
                bottomLinks={props.bottomLeftLinks}
            />

            <div className="flex flex-col flex-1 overflow-hidden bg-primary-100">
                <header className="flex items-center justify-between h-16 px-3 py-3 bg-base-300 sm:px-5 lg:px-6">
                    <div className="mr-2 lg:hidden">
                        <ToggleMenuButton onClick={handleToggleMenu} />
                    </div>
                    <div className="ml-auto">{props.topNavContent}</div>
                </header>

                <div className="flex-1 overflow-x-hidden">
                    <div className="py-8">{props.children}</div>
                </div>
            </div>
        </div>
    );
};

export { SidebarHeader };

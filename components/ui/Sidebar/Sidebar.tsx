import { ReactNode } from 'react';

import className from 'classnames';

import Logo from 'components/icons/Logo';
import Link from 'next/link';

type ISidebarProps = {
    show?: boolean;
    topLinks: ReactNode;
    bottomLinks: ReactNode;
};

const Sidebar = (props: ISidebarProps) => {
    const sidebarClass = className(
        'w-52',
        'inset-y-0',
        'left-0',
        'z-50',
        'bg-base-300',
        'pb-8',
        'pt-4',
        'px-3',
        'flex',
        'flex-col',
        'fixed',
        'lg:static',
        'transition',
        'duration-300',
        'ease-in-out',
        'transform',
        {
            'translate-x-0': props.show,
            '-translate-x-full': !props.show
        },
        'lg:translate-x-0'
    );

    return (
        <div className={sidebarClass}>
            <div className="flex-1 mt-10 w-">{props.topLinks}</div>

            <div>{props.bottomLinks}</div>
        </div>
    );
};

export { Sidebar };

type ISidebarLinkProps = {
    children: string;
};

const SidebarLink = (props: ISidebarLinkProps) => (
    <div className="flex items-center px-2 py-2 text-lg font-semibold rounded-lg sidebar-link hover:bg-base-100">
        {props.children}

        <style jsx>
            {`
                .sidebar-link :global(svg) {
                    @apply stroke-2 stroke-current h-6 w-6 mr-1;
                }
            `}
        </style>
    </div>
);

export { SidebarLink };

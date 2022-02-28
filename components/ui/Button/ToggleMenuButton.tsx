type IToggleMenuButton = {
    onClick: () => void;
};

const ToggleMenuButton = (props: IToggleMenuButton) => (
    <button
        className="p-2 rounded-md btn"
        onClick={props.onClick}
        type="button"
    >
        <svg
            className="w-6 h-6 stroke-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M0 0h24v24H0z" stroke="none" />
            <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    </button>
);

export { ToggleMenuButton };

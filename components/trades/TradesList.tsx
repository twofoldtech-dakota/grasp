import { Trade } from 'types';
import Modal from '../ui/Modal/Modal';
import SubTitle from '../ui/Titles/SubTitle';
import NewTradeForm from './NewTradeForm';

interface Props {
    trades: Trade[];
    title: string;
}

export default function TradesList({ trades, title }: Props) {
    return (
        <section className="flex flex-col mt-8">
            <SubTitle title={title} />

            <div className="w-full overflow-x-auto">
                <table className="table w-full mb-2 border-b-2 border-accent">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Edit</th>
                            <th>Asset</th>
                            <th>Entry</th>
                            <th>Status</th>
                            <th>PnL</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-info"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                    />
                                </svg>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="w-12 h-12 mask mask-squircle">
                                            <img
                                                src="https://s3-symbol-logo.tradingview.com/crypto/XTVCBTC.svg"
                                                alt="Avatar Tailwind CSS Component"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">btc</div>
                                        <div className="text-sm opacity-50">
                                            usd
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                $40,000
                                <br />
                                <span className="badge badge-outline badge-sm">
                                    Feb 12, 2022
                                </span>
                            </td>
                            <td>
                                <div className="badge badge-accent badge-outline">
                                    Active
                                </div>
                            </td>
                            <td>
                                <div className="text-success">
                                    ↗︎ $400 (22%)
                                </div>
                            </td>
                            <th>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-red-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                    />
                                </svg>{' '}
                            </th>
                        </tr>
                        <tr>
                            <th>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-info"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                    />
                                </svg>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="w-12 h-12 mask mask-squircle">
                                            <img
                                                src="https://s3-symbol-logo.tradingview.com/crypto/XTVCETH.svg"
                                                alt="Avatar Tailwind CSS Component"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">eth</div>
                                        <div className="text-sm opacity-50">
                                            usd
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                $2,200
                                <br />
                                <span className="badge badge-outline badge-sm">
                                    Jan 1, 2022
                                </span>
                            </td>
                            <td>
                                <div className="badge badge-accent badge-outline">
                                    Active
                                </div>
                            </td>
                            <td>
                                <div className="text-success">
                                    ↗︎ $4000 (220%)
                                </div>
                            </td>
                            <th>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-red-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                    />
                                </svg>{' '}
                            </th>
                        </tr>
                        <tr>
                            <th>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-info"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                    />
                                </svg>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="w-12 h-12 mask mask-squircle">
                                            <img
                                                src="https://s3-symbol-logo.tradingview.com/crypto/XTVCSOL.svg"
                                                alt="Avatar Tailwind CSS Component"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">sol</div>
                                        <div className="text-sm opacity-50">
                                            usd
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                $90
                                <br />
                                <span className="badge badge-outline badge-sm">
                                    Feb 22, 2022
                                </span>
                            </td>
                            <td>
                                <div className="badge badge-secondary badge-outline">
                                    Closed
                                </div>
                            </td>
                            <td>
                                <div className="text-error">↘︎ 90 (14%)</div>
                            </td>
                            <th>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-red-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                    />
                                </svg>{' '}
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* <Modal
                description="test desc"
                submitButtonText="Submit"
                openModalText="Log a new trade"
                title="Log a new trade"
            >
                <NewTradeForm title="Log a new trade" />
            </Modal> */}
        </section>
    );
}

import { Trade } from 'types';
import SubTitle from '../ui/Titles/SubTitle';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface Props {
    trade?: Trade;
    title: string;
}

export default function NewTradeForm({ trade, title }: Props) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<Trade>();
    const onSubmit: SubmitHandler<Trade> = (data) => console.log(data);

    function addNewTrade() {
        return null;
    }

    return (
        <section className="flex flex-col">
            <SubTitle title={title} />

            <div className="w-full overflow-x-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="text"
                        placeholder="choose an asset"
                        className="w-full max-w-xs input input-bordered"
                        {...(register('asset'), { required: true })}
                    ></input>
                    {errors.asset && <span>This field is required</span>}
                    <input
                        type="text"
                        placeholder="choose an asset"
                        className="w-full max-w-xs input input-bordered"
                        {...(register('asset'), { required: true })}
                    ></input>
                    {errors.asset && <span>This field is required</span>}

                    <button type="submit" className="btn btn-secondary">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}

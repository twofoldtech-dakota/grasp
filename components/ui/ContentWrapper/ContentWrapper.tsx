import { ReactNode } from "react";
import PageTitle from "../Titles/PageTitle";

interface Props {
    children: ReactNode;
    title: string;
  }
  
const ContentWrapper = (props: Props) => {
  return (
    <div className='max-w-6xl p-6 mx-auto'>
        <PageTitle title={props.title}/>
        {props.children}
    </div>
  );
};

export default ContentWrapper;

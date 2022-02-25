interface Props {
  title: string;
}
const SubTitle = (props: Props) => {
  return (
    <h3 className="my-4 text-2xl font-extrabold sm:text-4xl">{props.title}</h3>
  );
};

export default SubTitle;

interface Props {
  title: string;
}
const PageTitle = (props: Props) => {
  return (
    <h1 className="my-4 text-4xl font-extrabold sm:text-center sm:text-6xl">{props.title}</h1>
  );
};

export default PageTitle;
